import { X, ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryImage {
  id: number | string;
  name: string;
  imageSrc: string;
}

interface ImageGalleryModalProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ImageGalleryModal({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: ImageGalleryModalProps) {
  const image = images[currentIndex];

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-10 right-0 text-white hover:text-red-800 transition"
          onClick={onClose}
        >
          <X size={32} />
        </button>

        <img
          src={image.imageSrc}
          alt={image.name}
          className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
        />
        <button
          className="absolute top-1/2 -left-20 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-indigo-500/70 transition"
          onClick={onPrev}
        >
          <ChevronLeft size={32} className="text-white" />
        </button>

        <button
          className="absolute top-1/2 -right-20 transform -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-indigo-500/70 transition"
          onClick={onNext}
        >
          <ChevronRight size={32} className="text-white" />
        </button>

        <p className="text-center text-white mt-3 text-lg">{image.name}</p>
      </div>
    </div>
  );
}
