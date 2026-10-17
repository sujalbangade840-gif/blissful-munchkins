import React, { useState } from 'react';
import { WifiOff, CheckCircle2, ChevronUp, ChevronDown, RefreshCw } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

interface OfflineIndicatorProps {
  queuedCount?: number;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ queuedCount = 0 }) => {
  const isOnline = useOnlineStatus();
  const [expanded, setExpanded] = useState(false);

  if (isOnline && queuedCount === 0) return null;

  return (
    <aside
      aria-label="Network status banner"
      className="fixed top-20 right-4 z-40 max-w-sm w-[calc(100vw-2rem)] sm:w-auto transition-all duration-300"
    >
      <div
        className={`rounded-2xl p-3 shadow-xl backdrop-blur-md border text-xs sm:text-sm font-medium transition-all ${
          !isOnline
            ? 'bg-amber-500/95 text-white border-amber-400 shadow-amber-500/20'
            : 'bg-emerald-600/95 text-white border-emerald-500 shadow-emerald-500/20'
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {!isOnline ? (
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 animate-pulse">
                <WifiOff className="w-3.5 h-3.5 text-white" />
              </span>
            ) : (
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              </span>
            )}
            <div>
              <p className="font-semibold leading-tight">
                {!isOnline ? 'Offline Mode Active' : 'Back Online!'}
              </p>
              <p className="text-[11px] opacity-90 leading-tight">
                {!isOnline
                  ? 'All photos, themes & info are cached'
                  : `${queuedCount} inquiries synced successfully`}
              </p>
            </div>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1 rounded-lg hover:bg-white/20 transition-colors"
            title="Toggle offline details"
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {expanded && (
          <div className="mt-2.5 pt-2.5 border-t border-white/20 text-[11px] leading-relaxed space-y-1">
            <p>✓ Fast cached portfolio & themes</p>
            <p>✓ Offline booking queue enabled</p>
            <p>✓ Studio address, GPS & call lines ready</p>
            {queuedCount > 0 && (
              <p className="font-bold flex items-center gap-1 text-white">
                <RefreshCw className="w-3 h-3 animate-spin" /> {queuedCount} inquiry saved on this device
              </p>
            )}
          </div>
        )}
      </div>
    </aside>
  );
};
