import { styled } from "styled-components";

export const Container = styled.div`
  background-color: var(--clr-200);
  width: 100%;
  min-height: 7.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--clr-700);
  position: relative;

  &:hover {
    color: var(--clr-100);
    background-color: var(--clr-300);
  }
`;

export const DropHere = styled.div<{ isDragging: boolean }>`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.isDragging ? "scale(1,1)" : "scale(1,0)")};
  background-color: var(--clr-700);
  color: var(--clr-200);
`;

export const FilePicker = styled.input`
  display: none;
`;

export const ImagePreview = styled.img``;
