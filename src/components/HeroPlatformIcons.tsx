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
  const classes = className ? `${className} hero-platform-app-icon` : "hero-platform-app-icon";

  return (
    <img
      className={classes}
      src="/images/icons/apple-ios.png"
      alt=""
      width={64}
      height={64}
      draggable={false}
    />
  );
}

const ANDROID_ROBOT_PATH =
  "M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z";

export function AndroidIcon({ className }: IconProps) {
  const classes = className ? `${className} hero-platform-app-icon` : "hero-platform-app-icon";

  return (
    <svg className={classes} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="0" y="0" width="64" height="64" rx="14" fill="#ffffff" />
      <g transform="translate(8 8) scale(2)">
        <path fill="#3ddc84" d={ANDROID_ROBOT_PATH} />
      </g>
    </svg>
  );
}

export function AndroidStudioIcon({ className }: IconProps) {
  const classes = className ? `${className} hero-platform-app-icon` : "hero-platform-app-icon";

  return (
    <img
      className={classes}
      src="/images/icons/android-studio.png"
      alt=""
      width={64}
      height={64}
      draggable={false}
    />
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

export function CSharpIcon({ className }: IconProps) {
  const classes = className ? `${className} hero-csharp-icon` : "hero-csharp-icon";

  return (
    <img
      className={classes}
      src="/images/icons/csharp.png"
      alt=""
      width={64}
      height={64}
      draggable={false}
    />
  );
}

export function MauiIcon({ className }: IconProps) {
  const classes = className
    ? `${className} hero-platform-app-icon hero-maui-hex-icon`
    : "hero-platform-app-icon hero-maui-hex-icon";

  const hexPoints = "32,5 55,18.5 55,45.5 32,59 9,45.5 9,18.5";

  return (
    <svg className={classes} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="0" y="0" width="64" height="64" rx="14" fill="#ffffff" />
      <g transform="translate(32 32) scale(0.9) translate(-32 -32)">
        <polygon points={hexPoints} fill="#512bd4" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
        <text
          x="32"
          y="27"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="11"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, Segoe UI, sans-serif"
        >
          .NET
        </text>
        <text
          x="32"
          y="42"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="10.5"
          fontWeight="700"
          fontFamily="system-ui, -apple-system, Segoe UI, sans-serif"
          letterSpacing="0.04em"
        >
          MAUI
        </text>
      </g>
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
