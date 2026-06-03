import React, { useRef, useState } from 'react';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  key?: any;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function TiltCard({ children, className = '', ...props }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable on mobile touch
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    
    // Calculate rotation (-4deg to 4deg max for professional editorial feel)
    const rotX = ((y - cy) / cy) * -3;
    const rotY = ((x - cx) / cx) * 3;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`,
      transition: 'transform 0.1s ease',
      ['--mx' as any]: `${x}px`,
      ['--my' as any]: `${y}px`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)',
      transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`relative overflow-hidden group transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Light spotlight shine layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(circle 200px at var(--mx, 50%) var(--my, 50%), rgba(212, 255, 58, 0.08) 0%, transparent 60%)`
        }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
