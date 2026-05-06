import { useRef, useEffect } from 'react';

// ============================================================
// CanvasImage — Layer 2: Renders images on <canvas> instead of <img>
// Prevents right-click → Save Image
// ============================================================

export default function CanvasImage({ src, alt, width, height, className, style, onError }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !src) return;

    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
    };

    img.onerror = () => {
      if (onError) onError();
      // Draw placeholder on error
      canvas.width = width || 400;
      canvas.height = height || 250;
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#64748b';
      ctx.font = '14px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(alt || 'Image unavailable', canvas.width / 2, canvas.height / 2);
    };

    img.src = src;
  }, [src, alt, width, height, onError]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        ...style,
        userSelect: 'none',
        WebkitUserSelect: 'none',
        pointerEvents: 'auto',
      }}
      title={alt}
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    />
  );
}
