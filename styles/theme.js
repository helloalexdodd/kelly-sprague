const colors = {
  primary: '#eea000', // Orange
  secondary: '#e50087', // Pink
  tertiary: '#205d89', // Light Orange
  quaternary: '#617657', // Green
  white: '#f3f1ec', // White
  black: '#000', // Black
  whiteTransparent: '#f3f1ecE6',
  secondaryDark: '#CC006E',
};

colors.focus = colors.quaternary;

const fontWeights = {
  regular: 400,
  light: 300,
  bold: 700,
};

const fontSizes = [
  '0.64rem',
  '0.8rem',
  '1rem',
  '1.563rem',
  '1.953rem',
  '2.441rem',
  '3.052rem',
];

const breakpoints = ['1101px', '930px', '500px'];

const sizes = {
  maxWidth: '1100px',
};

const borders = [0, '2px solid', '10px solid'];

const radii = {
  button: '5px',
  modal: '2px',
};

const shadows = {
  box: {
    modal: `0 0 5px 5px ${colors.blackTransparent}`,
  },
  text: `-0.5px -0.5px 1px ${colors.black}`,
};

const theme = {
  breakpoints,
  colors,
  fontWeights,
  fontSizes,
  borders,
  sizes,
  shadows,
  radii,
};

export default theme;
