/**
 * Do not sort alphabetically please ;)
 * The order is important for the color palette display in the storybook.
 */
export const colors: Record<string, string> = {
  "grey-800": "#17294D",
  "grey-700": "#455980",
  "grey-600": "#8090B2",
  "grey-500": "#B1BACC",
  "grey-400": "#EDEEF1",
  "grey-300": "#F3F5F6",
  "grey-200": "#F9FAFB",
  "grey-100": "#FCFDFE",

  "blue-800": "#0D5ABF",
  "blue-700": "#0C6CF3",
  "blue-600": "#5CA3FF",
  "blue-500": "#A8D4FF",
  "blue-400": "#D1E8FF",
  "blue-300": "#E2F0FD",
  "blue-200": "#F1F7FD",
  "blue-100": "#FAFDFF",

  "turquoise-800": "#068E70",
  "turquoise-700": "#07B58E",
  "turquoise-600": "#13F0C0",
  "turquoise-500": "#99FBE6",
  "turquoise-400": "#D3FDF3",
  "turquoise-300": "#E3FDF8",
  "turquoise-200": "#ECFDF9",
  "turquoise-100": "#FAFFFD",

  "green-800": "#3A8D42",
  "green-700": "#48B14E",
  "green-600": "#76ED7C",
  "green-500": "#BAFCBD",
  "green-400": "#DDFDDD",
  "green-300": "#E5FFE7",
  "green-200": "#F0FFF0",
  "green-100": "#FBFFFB",

  "yellow-800": "#B57C08",
  "yellow-700": "#E5B301",
  "yellow-600": "#FFD947",
  "yellow-500": "#FFEB9F",
  "yellow-400": "#FFF5CC",
  "yellow-300": "#FFF7DB",
  "yellow-200": "#FFFBEB",
  "yellow-100": "#FFFEF9",

  "orange-800": "#C26604",
  "orange-700": "#E38016",
  "orange-600": "#FFA238",
  "orange-500": "#FFD39F",
  "orange-400": "#FFEBD1",
  "orange-300": "#FFF2E0",
  "orange-200": "#FFF7F0",
  "orange-100": "#FFFDFB",

  "brown-800": "#B83A18",
  "brown-700": "#D95027",
  "brown-600": "#F77036",
  "brown-500": "#FBB59D",
  "brown-400": "#FFDACC",
  "brown-300": "#FFEBE0",
  "brown-200": "#FFF3F0",
  "brown-100": "#FFFCFB",

  "red-800": "#B52430",
  "red-700": "#DB394C",
  "red-600": "#F05B60",
  "red-500": "#F7ADAF",
  "red-400": "#FBD6D7",
  "red-300": "#FCE4E6",
  "red-200": "#FDF1F2",
  "red-100": "#FFFCFC",

  "pink-800": "#B31E50",
  "pink-700": "#DA2B65",
  "pink-600": "#F7578C",
  "pink-500": "#FBABC6",
  "pink-400": "#FDD7E3",
  "pink-300": "#FFE5EE",
  "pink-200": "#FDF1F5",
  "pink-100": "#FFFCFD",

  "magenta-800": "#9E1878",
  "magenta-700": "#C936A6",
  "magenta-600": "#E85FCC",
  "magenta-500": "#F3A9E4",
  "magenta-400": "#FBD7F4",
  "magenta-300": "#FFE5FF",
  "magenta-200": "#FFF0FD",
  "magenta-100": "#FFFCFF",

  "purple-800": "#7229B3",
  "purple-700": "#9343D9",
  "purple-600": "#B45EFF",
  "purple-500": "#DAB0FF",
  "purple-400": "#EDD9FF",
  "purple-300": "#F3E5FF",
  "purple-200": "#F7F0FF",
  "purple-100": "#FEFCFF",
};

export type Color = keyof typeof colors;

const colorNames = Object.keys(colors);

export const colorGroups = colorNames.reduce(
  (accu, name) => {
    const key = name.split('-')[0];
    if (!accu[key]) {
      accu[key] = {};
    }
    accu[key][name] = colors[name]

    return accu;
  },
    {} as Record<string, {[key:string]: string}>
);

