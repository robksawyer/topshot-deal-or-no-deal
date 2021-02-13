/**
 * Global app store
 * @see https://github.com/pmndrs/zustand
 */
import create from 'zustand'

export const useStore = create((set) => ({
  showIntro: true,
  setShowIntro: (val) => set((state) => ({ showIntro: val })),
  images: null,
  setImages: (val) => set((state) => ({ images: val })),
  uploading: false,
  setUploading: (val) => set((state) => ({ uploading: val })),
}))
