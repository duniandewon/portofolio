"use client";

import { ChangeEvent, DragEvent, useCallback, useRef, useState } from "react";
import { Container, DropHere, FilePicker, ImagePreview } from "./styled";

function FileUploder() {
  const [isDragging, setIsDragging] = useState(false);
  const [previewImage, setPreviewImage] = useState<{
    name: string;
    ulr: string;
  } | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const handleDragOver = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      setIsDragging(true);

      if (isDragging) e.dataTransfer.dropEffect = "copy";
    },
    [isDragging]
  );

  const handleDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setIsDragging(false);
  }, []);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);

    const { files } = e.dataTransfer;

    const image = files[0];

    if (!image.type.includes("image")) return;

    setPreviewImage({ name: image.name, ulr: URL.createObjectURL(image) });
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files?.length) return;

    const image = files[0];

    if (!image.type.includes("image")) return;

    setPreviewImage({ name: image.name, ulr: URL.createObjectURL(image) });
  };

  return (
    <Container
      ref={dropZoneRef}
      onClick={handleClick}
      // onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <DropHere isDragging={isDragging}>Drop here to upload</DropHere>
      {previewImage ? (
        <ImagePreview src={previewImage.ulr} />
      ) : (
        <span>Set Featured Image</span>
      )}
      <FilePicker
        type="file"
        ref={inputRef}
        accept="image/*"
        onChange={handleFileSelect}
      />
    </Container>
  );
}

export default FileUploder;
