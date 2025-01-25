import { toast } from "react-toastify"
import { converter } from "../api/currencyConverter";

export const getCartItems = () => {
  try {
      const stored = localStorage.getItem("G_BRIDGE_CART");
      
      // Check if stored is null or not a valid JSON
      if (!stored) {
          return []; // Return an empty array if there's no stored cart
      }

      const storedCart = JSON.parse(stored);

      // Optionally handle if storedCart is null or not an array
      if (!Array.isArray(storedCart)) {
          return []; // Return an empty array if the parsed cart isn't a valid array
      }

      return storedCart;

  } catch (error) {
      toast(error?.message || "An error occurred while fetching cart items");
      return [];
  }
}

export const processCart = (items) => {

    try {
        const itemsToSave = JSON.stringify(items)
        localStorage.setItem("G_BRIDGE_CART", itemsToSave)   

    } catch (error) {
        console.error(error)
        return []
    }
}
export const deleteCartItem = (id) => {


    try {
        const existingCartItems = getCartItems()
        const newItems = existingCartItems.filter(item => item.provision_id !== id)
       processCart(newItems)
       toast("Item deleted")

        
    } catch (error) {
        console.log(error)
        return []
    }
}

export const clearCartItems = () => {


  try {
      localStorage.removeItem("G_BRIDGE_CART")      
  } catch (error) {
      console.log(error)
      return []
  }
}

export const addToCartItems = (cartData) => {
    const existingCartItems = getCartItems();
  
    try {
      // If there are no existing items in the cart, initialize the cart with the new item.
      if (!existingCartItems || existingCartItems.length < 1) {
        const addedItems = [cartData];
        processCart(addedItems);
        toast('Added to cart');
        return;
      }
  
      // Check if the item already exists in the cart and update it, otherwise keep it unchanged.
      const updatedCartItems = existingCartItems.map((item) => {
        if (item.provision_id === cartData.provision_id) {
          return { ...item, ...cartData }; // Merge existing item with new data.
        }
        return item;
      });
  
      // Check if the item was updated; if not, add it to the cart.
      const isItemInCart = existingCartItems.some(item => item.provision_id === cartData.provision_id);

      if (!isItemInCart) {
        updatedCartItems.push(cartData);
      }
  
      processCart(updatedCartItems);
      toast(isItemInCart ? 'Cart updated' : 'Added to cart', {type: "success"});
    } catch (error) {
      console.error(error);
      toast(error?.message || 'An error occurred while adding to the cart');
    }
  };
  

  export const calculateTotal = () => {
    let amount = 0
    const cart_items = getCartItems()
    for(const item of cart_items){
       amount +=  item?.value ?? 0
    }

    return amount
  }

  export const calculateTotalUSD = async() => {
    let convertedAmount = 0
    const cart_items = getCartItems()


    for(const item of cart_items){
      const res = await converter({fromCurr: item?.currency, toCurr: "usd", amount: item?.value ?? 0})
      convertedAmount += Number(res.calc);   
    }

   console.log("hggjggjgjggjgg =>", convertedAmount)
    return convertedAmount
  }