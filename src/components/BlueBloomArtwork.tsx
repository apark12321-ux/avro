export function BlueBloomTop() {
  return (
    <div className="absolute top-0 left-0 w-72 sm:w-96 md:w-[480px] h-72 sm:h-96 md:h-[480px] pointer-events-none select-none -translate-x-1/4 -translate-y-1/4 opacity-90 overflow-hidden">
      <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
        <defs>
          <radialGradient id="bloom1" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#0070F3" stopOpacity="0.8" />
            <stop offset="80%" stopColor="#0F2860" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#060B19" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bloom2" cx="60%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#0051C8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#060B19" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Soft layered petals */}
        <path
          d="M 120,40 C 260,10 380,100 360,240 C 340,380 200,420 90,340 C -10,260 -20,120 120,40 Z"
          fill="url(#bloom1)"
        />
        <path
          d="M 160,80 C 280,60 340,160 320,280 C 300,380 180,390 110,300 C 40,220 50,110 160,80 Z"
          fill="url(#bloom2)"
        />
        <path
          d="M 80,120 C 180,90 260,180 230,290 C 200,380 90,360 40,270 C -10,190 0,140 80,120 Z"
          fill="#38BDF8"
          fillOpacity="0.3"
          className="blur-xl"
        />
      </svg>
    </div>
  );
}

export function BlueBloomBottom() {
  return (
    <div className="absolute bottom-0 right-0 w-80 sm:w-[420px] md:w-[540px] h-80 sm:h-[420px] md:h-[540px] pointer-events-none select-none translate-x-1/4 translate-y-1/4 opacity-90 overflow-hidden">
      <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
        <defs>
          <radialGradient id="bloomBottom1" cx="60%" cy="60%" r="65%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#0070F3" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#091B42" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#060B19" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bloomBottom2" cx="45%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#0066EE" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#060B19" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path
          d="M 380,440 C 220,480 110,380 130,240 C 150,110 290,70 410,150 C 510,230 520,380 380,440 Z"
          fill="url(#bloomBottom1)"
        />
        <path
          d="M 340,400 C 210,430 150,330 170,210 C 190,110 320,100 400,190 C 470,270 450,370 340,400 Z"
          fill="url(#bloomBottom2)"
        />
        <path
          d="M 400,370 C 310,400 230,310 260,200 C 290,110 400,130 450,220 C 500,300 480,350 400,370 Z"
          fill="#38BDF8"
          fillOpacity="0.35"
          className="blur-2xl"
        />
      </svg>
    </div>
  );
}
