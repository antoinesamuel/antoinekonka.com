import Link from "next/link";
export function CallToActionButton() {
  return (
    <a href="#Contacts" className="cairn-btn z-100 md:hidden" type="button">
      Contacter Moi
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="rotate-180 h-10 w-10"
      >
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </a>
  );
}
