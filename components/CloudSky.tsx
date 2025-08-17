// app/components/VideoBackground.tsx
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
type VideoBackgroundProps = {
  className?: string;
};

export function CloudSky({ className }: VideoBackgroundProps) {
  return (
    <video
      className={cn(
        'fixed inset-0 w-full h-full object-cover -z-10 pointer-events-none',
        className,
      )}
      src="/driftcloud.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
  );
}