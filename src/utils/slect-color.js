const pickColorStyle = (biller) => {
    switch (biller) {
        case "MTN":
            return "bg-alt/10 border border-alt text-alt"
            
         case "GLO":
            return "bg-green-500/10 border border-green-500 text-green-600"
    
        default:
            return "bg-alt/10 border border-alt text-alt"    }

}

export default pickColorStyle