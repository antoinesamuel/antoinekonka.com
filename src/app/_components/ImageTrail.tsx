import { gsap } from "gsap";
import Image from "next/image";
import { JSX, useEffect, useRef } from "react";

// Utilitaires inchangés
function lerp(a: number, b: number, n: number): number {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(
  e: MouseEvent | TouchEvent,
  rect: DOMRect,
): { x: number; y: number } {
  let clientX = 0,
    clientY = 0;
  if ("touches" in e && e.touches !== undefined && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else if ("clientX" in e) {
    clientX = (e as MouseEvent).clientX;
    clientY = (e as MouseEvent).clientY;
  }
  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  };
}

function getMouseDistance(
  p1: { x: number; y: number },
  p2: { x: number; y: number },
): number {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageItem {
  public DOM: { el: HTMLDivElement; inner: HTMLDivElement | null } = {
    el: null as unknown as HTMLDivElement,
    inner: null,
  };
  public defaultStyle: gsap.TweenVars = { scale: 1, x: 0, y: 0, opacity: 0 };
  public rect: DOMRect | null = null;
  private resize!: () => void;

  constructor(DOM_el: HTMLDivElement) {
    this.DOM.el = DOM_el;
    this.DOM.inner = this.DOM.el.querySelector(
      ".content__img-inner",
    ) as HTMLDivElement | null;
    this.getRect();
    this.initEvents();
  }

  private initEvents() {
    this.resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };
    window.addEventListener("resize", this.resize);
  }

  private getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }
}

class ImageTrailVariant1 {
  private container: HTMLDivElement;
  private DOM: { el: HTMLDivElement };
  private images: ImageItem[];
  private imagesTotal: number;
  private imgPosition: number;
  private zIndexVal: number;
  private activeImagesCount: number;
  private isIdle: boolean;
  private threshold: number;
  private mousePos: { x: number; y: number };
  private lastMousePos: { x: number; y: number };
  private cacheMousePos: { x: number; y: number };

  constructor(container: HTMLDivElement) {
    this.container = container;
    this.DOM = { el: container };

    const imgElements = Array.from(
      container.querySelectorAll(".content__img"),
    ) as HTMLDivElement[];
    this.images = imgElements.map((img) => new ImageItem(img));

    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = (ev: Event) => {
      const event = ev as unknown as MouseEvent | TouchEvent;
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(event, rect);
    };

    container.addEventListener("mousemove", handlePointerMove as EventListener);
    container.addEventListener("touchmove", handlePointerMove as EventListener);

    const initRender = (ev: Event) => {
      const event = ev as unknown as MouseEvent | TouchEvent;
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(event, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());

      container.removeEventListener("mousemove", initRender as EventListener);
      container.removeEventListener("touchmove", initRender as EventListener);
    };

    container.addEventListener("mousemove", initRender as EventListener);
    container.addEventListener("touchmove", initRender as EventListener);
  }

  private render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    requestAnimationFrame(() => this.render());
  }

  private showNextImage() {
    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .fromTo(
        img.DOM.el,
        {
          opacity: 1,
          scale: 1,
          zIndex: this.zIndexVal,
          x: this.cacheMousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.cacheMousePos.y - (img.rect?.height ?? 0) / 2,
        },
        {
          duration: 0.4,
          ease: "power1",
          x: this.mousePos.x - (img.rect?.width ?? 0) / 2,
          y: this.mousePos.y - (img.rect?.height ?? 0) / 2,
        },
        0,
      )
      .to(
        img.DOM.el,
        {
          duration: 0.4,
          ease: "power3",
          opacity: 0,
          scale: 0.2,
        },
        0.4,
      );
  }

  private onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  private onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }
}

type TrailInstanceType = ImageTrailVariant1;

interface ImageTrailProps {
  images: (string | { src: string })[]; // Accepte à la fois les chaînes et les imports statiques Next.js
  variant?: 1;
  mainText?: string;
  subText?: string;
}
export default function ImageTrail({
  images,
  variant = 1,
  mainText,
  subText,
}: ImageTrailProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const trailInstance = useRef<TrailInstanceType | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    switch (variant) {
      case 1:
      default:
        trailInstance.current = new ImageTrailVariant1(containerRef.current);
        break;
    }
  }, [variant]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black flex justify-center items-center"
    >
      {/* Contenu textuel central inspiré de ton design Figma */}
      <div className="absolute z-10 text-center pointer-events-none select-none flex flex-col items-center">
        <h1 className="text-white font-bold text-[8rem] md:text-[10rem] lg:text-[14rem] tracking-tight leading-none">
          Ciao, i{"'"}m
          <br />
          antoine
        </h1>
        {subText && (
          <p className="text-white/80 font-medium text-lg md:text-xl mt-4 tracking-wide">
            {subText}
          </p>
        )}
      </div>

      {/* Rendu des avatars circulaires avec une balise img */}
      {images.map((src, index) => {
        // Récupère l'URL proprement sans utiliser 'any'
        const imageSrc = typeof src === "string" ? src : src.src;

        return (
          <div
            key={index}
            className="content__img absolute top-0 left-0 pointer-events-none opacity-0"
          >
            <div className="content__img-inner w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
              <Image
                src={imageSrc}
                alt="avatar"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
