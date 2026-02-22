import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3,
      speedY: Math.random() * 1 + 0.5,
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.y -= p.speedY;
        if (p.y < 0) p.y = canvas.height;
        ctx.fillStyle = "#ff1e56";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} style={{ position:"fixed", inset:0, zIndex:-1 }} />;
}