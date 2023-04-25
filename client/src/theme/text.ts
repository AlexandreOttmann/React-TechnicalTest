export const sizes = {
  "font-13": "13px",
  "font-15": "15px",
  "font-16": "16px",
  "font-26": "26px",
  "font-36": "36px",
  "font-48": "48px",
};

export type FontSize = keyof typeof sizes;

export const weights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export type FontWeight = keyof typeof weights;

export const families = {
  primary: "Rubik, sans-serif",
}

export type FontFamily = keyof typeof families;
