"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type FigurePlaceholderProps = {
  src: string;
  label: string;
  title: string;
  description: string;
  className?: string;
};

export default function FigurePlaceholder({
  src,
  label,
  title,
  description,
  className = "",
}: FigurePlaceholderProps) {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete) {
      setLoaded(image.naturalWidth > 0);
    }
  }, [src]);

  return (
    <figure className={`figure-placeholder ${className}`}>
      <div className={`placeholder-canvas${loaded ? " has-image" : ""}`}>
        <Image
          ref={imageRef}
          className="figure-slot-image"
          src={src}
          alt={`${label}: ${title}`}
          fill
          sizes="(max-width: 720px) 100vw, (max-width: 1200px) 80vw, 60vw"
          unoptimized
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
        />
        {!loaded && (
          <>
            <span>IMAGE SPACE RESERVED</span>
            <b>{label}</b>
          </>
        )}
      </div>
      <figcaption>
        <span>{label}</span>
        <strong>{title}</strong>
        <p>{description}</p>
      </figcaption>
    </figure>
  );
}
