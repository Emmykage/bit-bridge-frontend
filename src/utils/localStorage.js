import { toast } from "react-toastify"

export const getCartItems = () => {

    try {
        const stored = localStorage.getItem("G_BRIDGE_CART")
        const storedCart = JSON.parse(stored)
        return storedCart

        
    } catch (error) {
        console.log(error)

        toast(error?.message)
        return []
    }
}

export const processCart = (items) => {

    try {
        const itemsToSave = JSON.stringify(items)
        localStorage.setItem("G_BRIDGE_CART", itemsToSave)   

    } catch (error) {
        console.log(error)
        return []
    }
}
export const deleteCartItem = (id) => {


    try {
        const existingCartItems = getCartItems()
        const newItems = existingCartItems.filter(item => item.id !== id)
       processCart(newItems)
       toast("Item deleted")

        
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
        if (item.id === cartData.id) {
          return { ...item, ...cartData }; // Merge existing item with new data.
        }
        return item;
      });
  
      // Check if the item was updated; if not, add it to the cart.
      const isItemInCart = existingCartItems.some(item => item.id === cartData.id);
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
       amount += item?.value ?? 0
    }
    return amount
  }