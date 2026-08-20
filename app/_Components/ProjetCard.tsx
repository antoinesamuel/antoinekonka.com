import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
interface cardProps {
  name: string;
  logosrc: string;
  description: string;
  GithubLink: string | undefined;
  RealLink: string | undefined;
  FigmaTemplateLink: string | undefined;
}
export function ProjectCard({
  name,
  logosrc,
  description,
  GithubLink,
  RealLink,
  FigmaTemplateLink,
}: cardProps) {
  return (
    <div className="md:m-2">
      <div className="projetcCard">
        <div className="content">
          {logosrc === "" ? (
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z"></path>
            </svg>
          ) : (
            <Image
              src={logosrc}
              alt="logo du projet"
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
          <h1 className="">{name}</h1>
          <p className="para">{description}</p>
          {/* Pillule des réseaux sociaux (Gmail, LinkedIn, GitHub) */}
          <div className="grid grid-cols-3 place-items-start gap-3 px-6 py-3 rounded-full ">
            <a
              href={RealLink}
              className="w-18 h-18 rounded-full flex items-center justify-center bg-[whitesmoke] transition-colors overflow-hidden text-[1rem]"
              aria-label="Email"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="rotate-145 h-12 w-12"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </a>
            <a
              href={FigmaTemplateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-18 h-18 rounded-full flex items-center justify-center bg-[whitesmoke] transition-colors"
              aria-label="Figma"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#000000">
                <path d="M8 11.5a3.5 3.5 0 1 1 0-7h8a3.5 3.5 0 1 1 0 7h-8zm0 7a3.5 3.5 0 1 1 0-7h4v7a3.5 3.5 0 0 1-4 0zm8-7a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
              </svg>
            </a>
            <a
              href={GithubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-18 h-18 rounded-full flex items-center justify-center bg-[whitesmoke] transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
