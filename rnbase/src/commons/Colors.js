export const Colors = {
  white: '#ffffff',
  black: '#000000',
  cerulean: '#00A0E9',
  textTepapa: '#203040',
  textPaleSky: '#657380',
  textRegentGray: '#8495a6',
  statusShamRock: '#41d98d',
  statusSunglow: '#ffbb33',
  statusPersimmon: '#FF5959',
  bgEbonyClay: '#222d33',
  bgAthensGray: '#f2f4f7',
  purple: '#5F68DD',
  grey: '#CED5DB',
};

const percentToHex = (p) => {
  const intValue = ~~(p / 100 * 255); // map percent to nearest integer (0 - 255)
  const hexValue = intValue.toString(16); // get hexadecimal representation
  return hexValue.padStart(2, '0').toUpperCase(); // format with leading 0 and upper case characters
}

export const colorOpacityMaker = (color, opacity) => `${color}${percentToHex(opacity)}`
