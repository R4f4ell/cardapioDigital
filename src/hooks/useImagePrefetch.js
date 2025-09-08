import { useCallback } from "react";

export default function useImagePrefetch() {
  return useCallback((src) => {
    if (!src) return;
    const img = new Image();
    img.decoding = "async";
    img.src = src;
  }, []);
}