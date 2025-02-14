// const NGNaira = new Intl.NumberFormat('en-NG', {
//   style: 'currency',
//   currency: 'NGN',
// });
// const nairaFormat = (amount, currency="NGN") => NGNaira.format(amount);
// export { nairaFormat, NGNaira };


const nairaFormat = (amount, currency = "NGN") => {
  try {
    const curr = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: currency,
      currencyDisplay: "narrowSymbol",
    });

    return curr.format(amount);
  } catch (error) {
    console.error(`Invalid currency code: ${currency}. Defaulting to NGN.`);
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "narrowSymbol",
    }).format(amount);
  }
};

export { nairaFormat };
