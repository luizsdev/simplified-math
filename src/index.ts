  /**
   *
   * @param decimals Amount of decimals after the comma, `defaults` to 2
   *
   */
  export const pi = (decimals = 2) => {
    if (decimals) return Math.PI.toFixed(decimals);

    return Math.PI;
  };
