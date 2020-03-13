export const Numbers = (length: Number): Number[] => {
  return [...Array(length).map((_, i) => i + 1)];
};
