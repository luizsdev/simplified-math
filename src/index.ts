/**
* @param  decimals Amount of decimals after the comma
*/
export const pi = (decimals?: number) => {
  if (decimals) return Number(Math.PI.toFixed(decimals));

  return Math.PI;
};
