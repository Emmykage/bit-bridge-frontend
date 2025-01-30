const dateFormater = (date) =>{ 
   const d =  new Date(date)
   // const tn = new Date()

   // console.log(tn.setUTCDate(), date)
   return  d.toDateString()
}

export default dateFormater