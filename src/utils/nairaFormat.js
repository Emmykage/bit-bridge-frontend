// const NGNaira = new Intl.NumberFormat('en-NG', {
//   style: 'currency',
//   currency: 'NGN',
// });
// const nairaFormat = (amount, currency="NGN") => NGNaira.format(amount);
// export { nairaFormat, NGNaira };



const nairaFormat = (amount, currency="NGN") => {
const curr =  new Intl.NumberFormat("en-NG", {
    style: 'currency',
    currency: currency,
    currencyDisplay: "narrowSymbol"
  })
  return curr.format(amount);
}

export { nairaFormat };


