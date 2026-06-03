import { useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const startGlitch = () => {
    if (isGlitching) return;
    setIsGlitching(true);
    
    const glitchChars = '!<>-_\\/[]{}—=+*^?#0123456789ABCDEF%&';
    let iter = 0;
    const original = text;
    
    const interval = setInterval(() => {
      setDisplayText(
        original
          .split('')
          .map((c, i) => {
            if (i < iter) return original[i];
            if (c === ' ') return ' ';
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('')
      );
      
      if (iter >= original.length) {
        clearInterval(interval);
        setDisplayText(original);
        setIsGlitching(false);
      }
      iter += 0.5;
    }, 25);
  };

  return (
    <span 
      onMouseEnter={startGlitch} 
      className={`${className} cursor-default select-none transition-colors duration-150`}
    >
      {displayText}
    </span>
  );
}
