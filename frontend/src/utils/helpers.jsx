export const formatPrice = (price) => {
  let newNumber = Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price / 100);

  const result =
    newNumber.substr(newNumber.length - 1) +
    newNumber.substr(0, newNumber.length - 1);

  return result;
};
