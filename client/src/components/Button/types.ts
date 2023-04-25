
export enum ButtonVariant {
  Grey = 'grey',
  Blue = 'blue',
  Green = 'green',
  Orange = 'orange',
  Red = 'red',
}

export interface ButtonProps {
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}