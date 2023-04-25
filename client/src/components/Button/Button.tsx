import styled, {
  DefaultTheme,
  CSSObject,
  ThemedStyledProps,
} from "styled-components";
import { ButtonProps, ButtonVariant } from "./types";

const getButtonColors = ({
  theme,
  variant = ButtonVariant.Grey,
  disabled = false,
  onClick,
}: ThemedStyledProps<ButtonProps, DefaultTheme>) => {
  const styles: CSSObject = {
    "background-color": theme.colors[`${variant}-300`],
    color: theme.colors[`${variant}-700`],
  };

  if (disabled || !onClick) {
    return styles;
  }

  return {
    ...styles,
    "&:hover": {
      "background-color": theme.colors[`${variant}-400`],
    },
    "&:active": {
      color: theme.colors[`${variant}-800`],
    },
  };
};

const ButtonEl = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacings["space-4"]};
  padding: ${({ theme }) => theme.spacings["space-6"]}
    ${({ theme }) => theme.spacings["space-12"]};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius["radius-8"]};
  font-size: ${({ theme }) => theme.text.sizes["font-15"]};
  cursor: ${({ onClick, disabled }) =>
    disabled || !onClick ? "default" : "pointer"};
  pointer-events: ${({ onClick, disabled }) =>
    disabled || !onClick ? "none" : "initial"};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  ${(props) => ({
    ...getButtonColors(props),
  })}
  user-select: none;
`;

const Button = ({ children, variant, disabled, onClick }: ButtonProps) => (
  <ButtonEl variant={variant} disabled={disabled} onClick={onClick}>
    {children}
  </ButtonEl>
);

export default Button;
