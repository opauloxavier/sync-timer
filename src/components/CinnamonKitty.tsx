interface CinnamonKittyProps {
  size?: "sm" | "lg";
}

export default function CinnamonKitty({ size = "lg" }: CinnamonKittyProps) {
  const dimensions = size === "lg" ? "w-28 h-28 sm:w-36 sm:h-36" : "w-16 h-16 sm:w-20 sm:h-20";

  return (
    <div className={`${dimensions} animate-float drop-shadow-[0_0_15px_rgba(217,128,68,0.3)]`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Cinnamon roll body */}
        <circle cx="100" cy="110" r="70" fill="#C4855C" />
        <circle cx="100" cy="110" r="60" fill="#D4956C" />
        {/* Cinnamon swirl */}
        <path
          d="M100 70 C120 70, 140 90, 140 110 C140 130, 120 145, 105 145 C90 145, 75 135, 75 120 C75 105, 90 95, 100 95 C110 95, 118 103, 118 110 C118 117, 112 122, 105 122 C98 122, 94 117, 94 112"
          fill="none"
          stroke="#A36B44"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Icing drizzle */}
        <path
          d="M55 100 Q60 85, 70 90 Q80 95, 75 105"
          fill="#FFF5E6"
          opacity="0.8"
        />
        <path
          d="M120 80 Q130 75, 135 85 Q140 95, 130 100"
          fill="#FFF5E6"
          opacity="0.8"
        />
        {/* Hello Kitty face */}
        <circle cx="100" cy="100" r="30" fill="#FFF5E6" />
        {/* Ears */}
        <polygon points="78,72 68,48 88,65" fill="#FFF5E6" />
        <polygon points="122,72 132,48 112,65" fill="#FFF5E6" />
        <polygon points="80,70 72,52 87,66" fill="#FFB6C1" />
        <polygon points="120,70 128,52 113,66" fill="#FFB6C1" />
        {/* Eyes */}
        <ellipse cx="90" cy="97" rx="3" ry="3.5" fill="#333" />
        <ellipse cx="110" cy="97" rx="3" ry="3.5" fill="#333" />
        {/* Nose */}
        <ellipse cx="100" cy="103" rx="2.5" ry="2" fill="#F4A460" />
        {/* Whiskers */}
        <line x1="70" y1="95" x2="84" y2="98" stroke="#CCC" strokeWidth="1" />
        <line x1="70" y1="102" x2="84" y2="102" stroke="#CCC" strokeWidth="1" />
        <line x1="70" y1="109" x2="84" y2="106" stroke="#CCC" strokeWidth="1" />
        <line x1="130" y1="95" x2="116" y2="98" stroke="#CCC" strokeWidth="1" />
        <line x1="130" y1="102" x2="116" y2="102" stroke="#CCC" strokeWidth="1" />
        <line x1="130" y1="109" x2="116" y2="106" stroke="#CCC" strokeWidth="1" />
        {/* Bow */}
        <circle cx="75" cy="62" r="4" fill="#FF6B8A" />
        <ellipse cx="69" cy="58" rx="6" ry="4" fill="#FF6B8A" />
        <ellipse cx="81" cy="58" rx="6" ry="4" fill="#FF6B8A" />
      </svg>
    </div>
  );
}
