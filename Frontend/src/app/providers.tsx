"use client";

import { PhotosContext } from "@/contexts/photos";

export default function Providers({ children, data }: { children: React.ReactNode; data: any }) {
  return (
    <PhotosContext.Provider value={data}>
      {children}
    </PhotosContext.Provider>
  );
}
