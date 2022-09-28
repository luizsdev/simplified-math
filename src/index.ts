/**
* @param  decimals Amount of decimals after the comma, like below:
*/
export const pi = (decimals?: number) => {
  if (decimals) return Number(Math.PI.toFixed(decimals));
  return Math.PI;
};
