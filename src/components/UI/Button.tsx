"use client";

import{ styled }from "styled-components";

interface IButtonProps {
  variant?: "outline" | "contained";
}

const Button = styled.button<IButtonProps>`
  color: ${(props) =>
    props.variant === "contained" ? "var(--clr-700)" : "var(--clr-100)"};

  background-color: ${(props) =>
    props.variant === "contained" ? "var(--clr-100)" : "transparent"};

  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border: 1px solid var(--clr-100);
  border-radius: var(--br-200);
  appearance: none;
  padding: 0.375rem 1rem;
  font-size: 0.875rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: var(--fw-bold);
  letter-spacing: 0.02857em;

  &:hover {
    color: ${(props) =>
      props.variant === "contained" ? "var(--clr-100)" : "var(--clr-700)"};

    background-color: ${(props) =>
      props.variant === "contained" ? "transparent" : "var(--clr-100)"};
  }
`;

export default Button;
