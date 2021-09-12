export default (number, stringPadding = 2) => {
  const [integers, decimals = ''] = String(number).split('.');
  return `${integers},${decimals.padEnd(stringPadding, '0')}`;
};
