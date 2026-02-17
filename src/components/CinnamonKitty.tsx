/* eslint-disable @next/next/no-img-element */

interface CinnamonKittyProps {
  size?: "sm" | "lg";
}

export default function CinnamonKitty({ size = "lg" }: CinnamonKittyProps) {
  const dimensions =
    size === "lg"
      ? "w-36 h-36 sm:w-48 sm:h-48"
      : "w-20 h-20 sm:w-24 sm:h-24";

  const sparkleSize = size === "lg" ? "text-sm" : "text-[10px]";

  return (
    <div className="relative">
      {/* Sparkles around the character */}
      <div
        className={`absolute -top-2 -left-3 animate-sparkle ${sparkleSize} text-sky-300/50`}
        style={{ animationDelay: "0s" }}
      >
        &#10022;
      </div>
      <div
        className={`absolute -top-1 -right-3 animate-sparkle ${sparkleSize} text-blush-300/50`}
        style={{ animationDelay: "0.8s" }}
      >
        &#10022;
      </div>
      <div
        className={`absolute -bottom-1 -left-2 animate-sparkle ${sparkleSize} text-blush-300/40`}
        style={{ animationDelay: "1.4s" }}
      >
        &#9829;
      </div>
      <div
        className={`absolute -bottom-2 -right-2 animate-sparkle ${sparkleSize} text-sky-300/40`}
        style={{ animationDelay: "0.5s" }}
      >
        &#9829;
      </div>

      <div
        className={`${dimensions} animate-float drop-shadow-[0_4px_24px_rgba(91,168,245,0.2)]`}
      >
        <img
          src="/cinnamoroll.svg"
          alt="Cinnamoroll"
          className="w-full h-full object-contain"
          draggable={false}
        />
      </div>
    </div>
  );
}
