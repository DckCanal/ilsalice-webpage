import React from "react";
import Image from "next/image";
import PhotoAlbum from "react-photo-album";
import type { RenderPhotoProps } from "react-photo-album";
import photos from "./photo";
function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className, onClick }}
      />
    </div>
  );
}

export default function PhotoGallery() {
  return (
    <div className="p-2 sm:p-4 lg:p-5 pb-6">
      <PhotoAlbum
        photos={photos}
        layout="rows"
        renderPhoto={NextJsImage}
        defaultContainerWidth={1200}
        sizes={{
          size: "calc(100vw - 40px)",
          sizes: [
            { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
            { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
            { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
          ],
        }}
      />
    </div>
  );
}
