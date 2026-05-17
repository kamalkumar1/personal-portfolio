interface IconProps {
  className?: string;
}

export function XcodeIcon({ className }: IconProps) {
  return (
    <img
      className={className}
      src="/images/icons/xcode.png"
      alt=""
      width={64}
      height={64}
      draggable={false}
    />
  );
}

export function ApplePlatformIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="apple-bg" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3a3a3c" />
          <stop offset="100%" stopColor="#1c1c1e" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="13" fill="url(#apple-bg)" />
      <path
        fill="#ffffff"
        d="M39.2 33.8c-.1 2.4 2.1 4.6 2.9 5.5-.5.7-2.4 3.3-4.8 3.3-1.3 0-2.2-.8-3.8-.8s-2.7.8-4 .8c-2.4 0-4.6-2.5-5.9-4.9-3.2-5.6-5.6-15.8-2.3-22.7 1.6-3.1 4.6-5.1 7.8-5.1 1.5 0 2.9.9 3.9.9 1 0 2.7-1.1 4.6-1 1.9.1 4.6 1 6.4 3.8-5.6 3-4.7 10.8.3 13.3zm-5.8-24.3c.8-1 1.4-2.4 1.2-3.8-1.2.1-2.6.8-3.5 1.8-.8.9-1.5 2.4-1.3 3.8 1.4.1 2.8-.7 3.6-1.8z"
      />
    </svg>
  );
}

export function AndroidStudioIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="4" y="4" width="56" height="56" rx="14" fill="#3ddc84" />
      <path
        d="M22 26c0-5.5 4.5-10 10-10s10 4.5 10 10v2h-3v-2c0-3.9-3.1-7-7-7s-7 3.1-7 7v2h-3v-2zm-2 6h26v14c0 2.2-1.8 4-4 4H24c-2.2 0-4-1.8-4-4V32zm6 4v6h3v-6h-3zm14 0v6h3v-6h-3z"
        fill="#1b4332"
      />
      <circle cx="27" cy="28" r="1.8" fill="#1b4332" />
      <circle cx="37" cy="28" r="1.8" fill="#1b4332" />
    </svg>
  );
}

export function SwiftIcon({ className }: IconProps) {
  return (
    <img
      className={className}
      src="/images/icons/swift.png"
      alt=""
      width={64}
      height={64}
      draggable={false}
    />
  );
}

export function KotlinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="kotlin-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7f52ff" />
          <stop offset="50%" stopColor="#c711e1" />
          <stop offset="100%" stopColor="#ff6b35" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#kotlin-grad)" />
      <path d="M18 44L32 20l8 12 10-8v20H18z" fill="#fff" />
    </svg>
  );
}

export function SwiftUIIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="swiftui-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5ac8fa" />
          <stop offset="100%" stopColor="#007aff" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="14" fill="url(#swiftui-grad)" />
      <circle cx="32" cy="32" r="14" fill="none" stroke="#fff" strokeWidth="3" />
      <path d="M32 18v6M32 40v6M18 32h6M40 32h6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="32" r="4" fill="#fff" />
    </svg>
  );
}

export function MauiIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="4" y="4" width="56" height="56" rx="14" fill="#512bd4" />
      <path
        d="M20 42l12-22 12 22h-6l-2.5-5h-7l-2.5 5H20zm9-11h5l-2.5-5-2.5 5z"
        fill="#fff"
      />
    </svg>
  );
}

export function XamarinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="4" y="4" width="56" height="56" rx="14" fill="#3498db" />
      <path
        d="M20 20l12 12 12-12v8L32 40 20 28v-8zm0 24v-8l12 12 12-12v8L32 52 20 44z"
        fill="#fff"
      />
    </svg>
  );
}
