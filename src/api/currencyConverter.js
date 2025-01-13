const getRate = () => {
    const storedRate = localStorage.getItem('currencyRate')
    const rateTimeStamp = localStorage.getItem('rateTimestamp')


    const currentTime = new Date().getTime()
    const rateExpiresin = 60 * 60 *1000


    if(storedRate && rateTimeStamp && (currentTime - rateTimeStamp < rateExpiresin) ){
        return JSON.parse(storedRate)
    }

    console.log(new Date().getDay())
    console.log(new Date(currentTime).toString())
    console.log(new Date(currentTime).toDateString())
    console.log(new Date(currentTime).toLocaleString())
    console.log(new Date(currentTime).toISOString())

    
}
  
  const converter = async ({ fromCurr = "usd", amount = 1, toCurr = "usd" }) => {
            const api = "https://api.coingecko.com/api/v3/exchange_rates";
            console.log(api)
            try {


                let currencyRates

                const storedRate = localStorage.getItem('currencyRate')
                const rateTimeStamp = localStorage.getItem('rateTimestamp')            
            
                const currentTime = new Date().getTime()
                const rateExpiresin = 3 * 60 *1000 //1 hour at 1000 millisec per second
            
            
                if(storedRate && rateTimeStamp && (currentTime - rateTimeStamp < rateExpiresin) ){
                    currencyRates =  JSON.parse(storedRate)
                }
                else{
                    const res = await fetch(api);

                    if (!res.ok) {
                        throw new Error(`Failed to fetch exchange rates: ${res.status}`);
                    }
    
                    const rawRates = await res.json();

                    currencyRates = rawRates.rates

                    // const currentTime = new Date().getTime()
    
    
                    localStorage.setItem('currencyRate', JSON.stringify(currencyRates));
                    localStorage.setItem('rateTimestamp', currentTime);
                    
                }
            
                

                // Ensure both currencies exist in the rates
                // if (!currencyRates.rates[fromCurr] || !currencyRates.rates[toCurr]) {
                //     throw new Error(`Currency not supported: ${fromCurr} or ${toCurr}`);
                // }


                console.log(currencyRates)
                const fromRate = currencyRates[fromCurr].value;
                const toRate =  currencyRates[toCurr].value;


                const calc = ((toRate / fromRate) * amount).toFixed(8);
                console.log(`Converted ${amount} ${fromCurr} to ${calc} ${toCurr}`);
                return {calc: Number(calc).toFixed(2), 
                    dollarRate: Number ( currencyRates["usd"].value/currencyRates["ngn"].value )?.toFixed(2),
                    nairaRate: Number(currencyRates["ngn"].value / currencyRates["usd"].value)?.toFixed(2)
                };
            } catch (error) {
                console.error("Error fetching exchange rates:", error.message);
                throw error;
            }

        };

export { converter };
