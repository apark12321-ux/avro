import { useEffect, useRef } from 'react';

const PARTICLE_COLORS = ['#00ffd5', '#22d3ee', '#38bdf8', '#818cf8', '#c084fc', '#f0abfc'];

export default function AICanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const particles: Particle[] = [];
    const maxParticles = Math.min(96, Math.floor((width * height) / 10500));
    const connectionDistance = 140;
    const pointer = { x: -1000, y: -1000, radius: 210 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.36;
        this.vy = (Math.random() - 0.5) * 0.36;
        this.radius = Math.random() * 1.6 + 0.7;
        this.alpha = Math.random() * 0.42 + 0.28;
        this.color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        const dx = pointer.x - this.x;
        const dy = pointer.y - this.y;
        const dist = Math.hypot(dx, dy) || 1;

        if (dist < pointer.radius) {
          const force = (pointer.radius - dist) / pointer.radius;
          this.x -= (dx / dist) * force * 0.42;
          this.y -= (dy / dist) * force * 0.42;
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.shadowBlur = 12;
        c.shadowColor = this.color;
        c.globalAlpha = this.alpha;
        c.fill();
        c.restore();
      }
    }

    const seedParticles = () => {
      particles.length = 0;
      const nextCount = Math.min(96, Math.floor((width * height) / 10500));
      for (let i = 0; i < nextCount; i++) particles.push(new Particle());
    };

    seedParticles();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
        seedParticles();
      }
    });
    resizeObserver.observe(canvas);

    const updatePointer = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        pointer.x = x;
        pointer.y = y;
      } else {
        pointer.x = -1000;
        pointer.y = -1000;
      }
    };

    const handleMouseMove = (e: MouseEvent) => updatePointer(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) updatePointer(touch.clientX, touch.clientY);
    };
    const resetPointer = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('mouseleave', resetPointer);
    document.addEventListener('touchend', resetPointer);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.13;
            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(0, p1.color);
            grad.addColorStop(1, p2.color);

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.7;
            ctx.globalAlpha = alpha;
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseleave', resetPointer);
      document.removeEventListener('touchend', resetPointer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'screen', opacity: 0.72 }}
    />
  );
}
