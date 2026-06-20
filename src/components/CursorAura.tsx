import { useEffect, useRef } from 'react';

export default function CursorAura() {
  const auraRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const aura = auraRef.current;
    if (!aura) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let tx = mx;
    let ty = my;
    let isMoving = false;

    const handleMouseMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!isMoving) {
        isMoving = true;
        aura.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      aura.style.opacity = '0';
      isMoving = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let animFrameId: number;
    const update = () => {
      mx += (tx - mx) * 0.11;
      my += (ty - my) * 0.11;
      aura.style.transform = `translate3d(${mx}px, ${my}px, 0) translate3d(-50%, -50%, 0)`;
      animFrameId = requestAnimationFrame(update);
    };
    update();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={auraRef}
      className="fixed left-0 top-0 w-[520px] h-[520px] rounded-full pointer-events-none z-[2] opacity-0 transition-opacity duration-300 hidden md:block"
      style={{
        background: 'radial-gradient(circle, rgba(0,255,213,0.15) 0%, rgba(34,211,238,0.07) 28%, rgba(129,140,248,0.045) 48%, transparent 72%)',
        mixBlendMode: 'screen',
        willChange: 'transform',
      }}
    />
  );
}
