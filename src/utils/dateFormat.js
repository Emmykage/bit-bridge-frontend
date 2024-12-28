const dateFormater = (date) =>{ 
   const d =  new Date(date)

   const month = String(d.getMonth() + 1)
   const day = String(d.getDate())
   const year = String(d.getFullYear())
   return  `${month}-${day}-${year}`
}

export default dateFormater