import React from 'react';

interface AdPlaceholderProps {
  slotId: string;
  className?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ slotId, className = '' }) => {
  return (
    <div className={`my-8 flex flex-col items-center justify-center ${className}`}>
      {/* AD_SLOT: ${slotId} — real AdSense unit injected here by backend pass */}
      <div className="w-full max-w-[728px] min-h-[90px] sm:min-h-[100px] rounded-lg border border-dashed border-accentViolet/30 bg-bgPanel/40 backdrop-blur-sm p-4 flex flex-col items-center justify-center text-center transition-all hover:border-accentViolet/50">
        <span className="font-mono text-xs uppercase tracking-widest text-textMuted/70 mb-1">
          Advertisement Placeholder
        </span>
        <span className="text-xs text-textMuted/50 font-mono">
          Slot ID: {slotId} (320x100 Mobile / 728x90 Desktop)
        </span>
      </div>
    </div>
  );
};
