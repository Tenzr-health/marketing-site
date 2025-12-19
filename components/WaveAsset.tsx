/**
 * Wave decorative assets based on Tenzr Health design guidelines
 */

interface WaveAssetProps {
  className?: string;
  variant?: 'top' | 'bottom';
}

export default function WaveAsset({ className = '', variant = 'top' }: WaveAssetProps) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        width="600"
        height="400"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id={`waveGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E6E1F4" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#C6BBEB" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#A794E0" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          d="M0,200 Q150,150 300,200 T600,200 L600,400 L0,400 Z"
          fill={`url(#waveGradient-${variant})`}
          opacity="0.5"
        />
        <path
          d="M0,250 Q150,200 300,250 T600,250 L600,400 L0,400 Z"
          fill={`url(#waveGradient-${variant})`}
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
