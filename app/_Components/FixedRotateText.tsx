"use client"; // Obligatoire pour utiliser un bouton avec onClick
import { useRouter } from "next/navigation";
import Link from "next/link";
import { redirect } from "next/navigation";
export function FixedRotateText() {
  const router = useRouter();
  function redirectToContactSection() {
    // router.push s'utilise côté client pour la navigation
    router.push("#Contacts");
  }

  return (
    <button className="button" onClick={redirectToContactSection}>
      <p className="button__text">
        <span style={{ "--index": 0 } as React.CSSProperties}> </span>
        <span style={{ "--index": 1 } as React.CSSProperties}>H</span>
        <span style={{ "--index": 2 } as React.CSSProperties}>I</span>
        <span style={{ "--index": 3 } as React.CSSProperties}>R</span>
        <span style={{ "--index": 4 } as React.CSSProperties}>E</span>
        <span style={{ "--index": 5 } as React.CSSProperties}> </span>
        <span style={{ "--index": 6 } as React.CSSProperties}>M</span>
        <span style={{ "--index": 7 } as React.CSSProperties}>E</span>
        <span style={{ "--index": 8 } as React.CSSProperties}> </span>
        <span style={{ "--index": 9 } as React.CSSProperties}>H</span>
        <span style={{ "--index": 10 } as React.CSSProperties}>I</span>
        <span style={{ "--index": 11 } as React.CSSProperties}>R</span>
        <span style={{ "--index": 12 } as React.CSSProperties}>E</span>
        <span style={{ "--index": 13 } as React.CSSProperties}> </span>
        <span style={{ "--index": 14 } as React.CSSProperties}>M</span>
        <span style={{ "--index": 15 } as React.CSSProperties}>E</span>
        <span style={{ "--index": 16 } as React.CSSProperties}> </span>
        <span style={{ "--index": 17 } as React.CSSProperties}>H</span>
        <span style={{ "--index": 18 } as React.CSSProperties}>E</span>
        <span style={{ "--index": 19 } as React.CSSProperties}> </span>
      </p>

      <div className="button__circle">
        <div className="button__icon">🤭</div>

        <div className="button__icon button__icon--copy">😎</div>
      </div>
    </button>
  );
}
