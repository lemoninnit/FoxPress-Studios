interface ImagePlaceholderProps {
  title: string
  category?: string
  index?: number
  className?: string
  hideText?: boolean
}

const THEMES = [
  {
    // Gold/Bronze theme (Film & Video / Ethereal Ascension)
    glowColor: 'rgba(201, 162, 39, 0.15)',
    accentColor: '#c9a227',
    gradient: 'from-amber-950/40 via-neutral-950 to-neutral-950',
    gridColor: 'rgba(201, 162, 39, 0.08)',
  },
  {
    // Blue/Cyan theme (CGI & Animation / Crimson Skies)
    glowColor: 'rgba(14, 116, 144, 0.15)',
    accentColor: '#0e7490',
    gradient: 'from-cyan-950/40 via-neutral-950 to-neutral-950',
    gridColor: 'rgba(14, 116, 144, 0.08)',
  },
  {
    // Purple/Violet theme (Publicity / The Frost King)
    glowColor: 'rgba(109, 40, 217, 0.15)',
    accentColor: '#6d28d9',
    gradient: 'from-violet-950/40 via-neutral-950 to-neutral-950',
    gridColor: 'rgba(109, 40, 217, 0.08)',
  },
  {
    // Red/Orange theme (Events & Campaigns / Battle of the Ancients)
    glowColor: 'rgba(185, 28, 28, 0.15)',
    accentColor: '#b91c1c',
    gradient: 'from-red-950/40 via-neutral-950 to-neutral-950',
    gridColor: 'rgba(185, 28, 28, 0.08)',
  }
]

export default function ImagePlaceholder({
  title,
  category,
  index = 0,
  className = '',
  hideText = false
}: ImagePlaceholderProps) {
  const theme = THEMES[index % THEMES.length]

  return (
    <div 
      className={`relative w-full h-full bg-gradient-to-br ${theme.gradient} flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ${className}`}
    >
      {/* Abstract Grid Background */}
      <div 
        className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"
      />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at center, ${theme.gridColor} 1px, transparent 1px)`,
          backgroundSize: '16px 16px'
        }}
      />

      {/* Decorative Cybernetic Circle lines */}
      <div 
        className="absolute w-64 h-64 rounded-full border border-white/5 opacity-20 scale-75 md:scale-100"
        style={{ borderColor: `${theme.accentColor}15` }}
      />
      <div 
        className="absolute w-48 h-48 rounded-full border border-dashed border-white/5 opacity-10 scale-75 md:scale-100 animate-[spin_120s_linear_infinite]"
        style={{ borderColor: `${theme.accentColor}10` }}
      />

      {/* Glowing center */}
      <div 
        className="absolute w-40 h-40 rounded-full blur-3xl opacity-60"
        style={{ backgroundColor: theme.glowColor }}
      />
      
      {/* Icon/Logo/Text badge in the center */}
      <div className="relative z-10 flex flex-col items-center gap-2 text-center p-4">
        {/* Futuristic Graphic Element */}
        <div 
          className="w-10 h-10 rounded-full border bg-neutral-900/80 flex items-center justify-center transition-transform duration-700 group-hover:scale-110"
          style={{ 
            borderColor: `${theme.accentColor}30`,
            boxShadow: `0 0 15px ${theme.glowColor}`
          }}
        >
          <span 
            className="font-display font-semibold text-xs tracking-wider"
            style={{ color: theme.accentColor }}
          >
            FP
          </span>
        </div>
        
        {!hideText && (
          <div className="mt-1 flex flex-col items-center">
            {category && (
              <p 
                className="text-[8px] tracking-[0.2em] uppercase font-bold opacity-60"
                style={{ color: theme.accentColor }}
              >
                {category}
              </p>
            )}
            <h4 className="text-[10px] text-cream/40 font-display tracking-widest uppercase mt-0.5 max-w-[160px] truncate">
              {title}
            </h4>
          </div>
        )}
      </div>

      {/* Subtle border shine line */}
      <div className="absolute inset-0 border border-white/5 pointer-events-none" />
    </div>
  )
}
