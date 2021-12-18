function formatNumber(number: number): string {
  return Intl.NumberFormat().format(number);
}

const EXPORTS = {
  formatNumber,
};

export default EXPORTS;
