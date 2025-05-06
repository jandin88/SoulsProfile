// src/components/WaveSeparator.tsx
import React from 'react';

export const WaveSeparator: React.FC<{ flip?: boolean }> = ({ flip }) => (
  <svg
    width="100%" height="80"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
    style={{ transform: flip ? 'rotate(180deg)' : undefined }}
  >
    <path
      d="M0,0 C600,120 600,-120 1200,0 L1200,120 L0,120 Z"
      fill="rgba(5, 201, 172, 0.45)"
    />
  </svg>
);
