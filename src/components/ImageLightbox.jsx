import { useEffect, useCallback } from 'react';

const ImageLightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  // Keyboard support
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (currentIndex === null || !images[currentIndex]) return null;

  const { src, caption } = images[currentIndex];
  const total = images.length;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/85 backdrop-blur-sm flex items-center justify-center animate-[fadeIn_300ms_ease]"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/50 text-xs font-medium tracking-widest uppercase">
        {currentIndex + 1} / {total}
      </div>

      {/* Prev arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 md:left-8"
        aria-label="Previous image"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200 md:right-8"
        aria-label="Next image"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Image container — stop propagation so clicking the image doesn't close */}
      <div
        className="relative flex flex-col items-center max-w-[90vw] max-h-[90vh] animate-[zoomIn_300ms_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={caption}
          className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl"
        />
        {caption && (
          <p className="mt-4 text-white/60 text-xs font-medium uppercase tracking-widest text-center">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageLightbox;
