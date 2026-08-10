import { useEffect, useState } from "react";
import improveLogo from "@/assets/logo-improve.png";

const PHRASES = ["Manten tu auto como nuevo.", "Personalización a tu medida .", "Protege tu inversión." ];

const PHRASE_MS = 1100;
const LOGO_MS = 1100;
const FADE_MS = 700;

export function Preloader() {
  const [index, setIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    PHRASES.forEach((_, i) => {
      if (i === 0) return;
      timers.push(setTimeout(() => setIndex(i), PHRASE_MS * i));
    });

    const afterPhrases = PHRASE_MS * PHRASES.length;
    timers.push(setTimeout(() => setShowLogo(true), afterPhrases));
    timers.push(setTimeout(() => setExiting(true), afterPhrases + LOGO_MS));
    timers.push(setTimeout(() => setDone(true), afterPhrases + LOGO_MS + FADE_MS));

    document.body.style.overflow = "hidden";
    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (exiting) document.body.style.overflow = "";
  }, [exiting]);

  if (done) return null;

  return (
    <div className={`improve-preloader${exiting ? " is-exiting" : ""}`} aria-hidden="true">
      <div className="improve-preloader__inner">
        {showLogo ? (
          <img src={improveLogo} alt="IMPROVE" className="improve-preloader__logo" />
        ) : (
          <p key={index} className="improve-preloader__phrase">
            {PHRASES[index]}
          </p>
        )}
      </div>

      <style>{`
        .improve-preloader {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0a0a0a;
          transition: opacity ${FADE_MS}ms ease, visibility ${FADE_MS}ms ease;
        }
        .improve-preloader.is-exiting {
          opacity: 0;
          visibility: hidden;
        }
        .improve-preloader__inner {
          padding: 0 24px;
          text-align: center;
        }
        .improve-preloader__phrase {
          margin: 0;
          color: #fff;
          font-family: var(--font-display, "Inter", sans-serif);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          font-size: clamp(1.05rem, 4vw, 2rem);
          animation: improvePhrase ${PHRASE_MS}ms ease both;
        }
        .improve-preloader__logo {
          width: clamp(180px, 42vw, 340px);
          height: auto;
          filter: invert(1);
          animation: improveLogoIn ${LOGO_MS}ms ease both;
        }
        @keyframes improvePhrase {
          0%   { opacity: 0; transform: translateY(14px); }
          22%  { opacity: 1; transform: translateY(0); }
          78%  { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-14px); }
        }
        @keyframes improveLogoIn {
          0%   { opacity: 0; transform: scale(0.92); letter-spacing: 0; }
          100% { opacity: 1; transform: scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .improve-preloader__phrase,
          .improve-preloader__logo { animation-duration: 1ms; }
        }
      `}</style>
    </div>
  );
}
