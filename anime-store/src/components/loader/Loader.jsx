import { useEffect, useRef, useState } from "react";
import "./style.css";

export default function Loader() {
  const audioRef = useRef(null);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Play thunder
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch(() => {});
    }

    // Show logo after lightning strike
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader-overlay">

      {/* Sound */}
      <audio ref={audioRef} src="/thunder.mp3" preload="auto" />

      {/* Lightning Flash */}
      <div className="flash"></div>

      {/* Lightning Strike */}
      <div className="strike"></div>

      {/* Logo Reveal */}
      <div className={`logo-container ${showLogo ? "show" : ""}`}>
        <h1 className="logo-tet">ANIME⚡STORE</h1>
        <p className="tagline">Unleash Your Style</p>
      </div>

    </div>
  );
}