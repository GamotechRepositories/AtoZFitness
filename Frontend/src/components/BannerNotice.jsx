import React, { useState } from 'react';
import { Info, X } from 'lucide-react';
import { brandInfo } from '../data/gymData';

export default function BannerNotice() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside className="preview-notice-bar" aria-label="Client Notice">
      <Info size={16} color="#ffc107" />
      <span>
        <strong>{brandInfo.name} Preview:</strong> {brandInfo.previewNotice}
      </span>
      <button
        onClick={() => setVisible(false)}
        style={{
          background: 'none',
          border: 'none',
          color: '#9ca3af',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          marginLeft: '0.5rem'
        }}
        aria-label="Dismiss preview notice"
      >
        <X size={15} />
      </button>
    </aside>
  );
}
