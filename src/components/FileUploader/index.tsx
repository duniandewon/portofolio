import { ChangeEvent, DragEvent, useCallback, useRef, useState } from "react";
import { Container, DropHere, FilePicker, ImagePreview } from "./styled";

interface Props {
  onUpload: (image: File) => Promise<string | undefined>;
  featuredImage?: string
}

function FileUploder({ onUpload, featuredImage }: Props) {
  const [isDragging, setIsDragging] = useState(false);
  const [previewImage, setPreviewImage] = useState(featuredImage);

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

  const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);

    const { files } = e.dataTransfer;

    if (files.length !== 1) return;

    const image = files[0];

    if (!image.type.includes("image")) return;

    const imageUrl = await onUpload(image);

    if (imageUrl) setPreviewImage(imageUrl);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files?.length) return;

    const image = files[0];

    if (!image.type.includes("image")) return;

    const imageUrl = await onUpload(image);

    if (imageUrl) setPreviewImage(imageUrl);
  };

  return (
    <Container
      ref={dropZoneRef}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <DropHere isDragging={isDragging}>Drop here to upload</DropHere>
      {previewImage ? (
        <ImagePreview src={previewImage} />
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
