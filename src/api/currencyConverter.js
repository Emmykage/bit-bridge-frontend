const converter = async (curr, amount) => {
    const api = "https://api.exchangerate-api.com/v4/latest/USD";

    const res = await fetch(api)
    .then(result => result.json())


   const  rates = res.rates


   const fromRate = rates["NGN"]
   const toRate = rates[curr]


   const calc = ((toRate/fromRate) * amount).toFixed(2)
   console.log(rates)



   return calc
}

export {converter}