
import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { getLocalStorageData, setLocalStorageData } from "../utils/localStorage";
import { LOCAL_STORAGE } from "../utils/constants";

type ShoppingCartProviderProps = {
    children: ReactNode;
  };
  
  type CartItem = {
    id: number;
    quantity: number;
  };

  type WishlistItem = {
    id: number;
};
  
  type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartQuantity: number;
    cartItems: CartItem[];
    wishlistItems?: WishlistItem[];
    addToWishlist?: (id: number) => void;
    removeFromWishlist?: (id: number) => void;
  };
  
  const ShoppingCartContext = createContext({} as ShoppingCartContext);
  
  export function useShoppingCart() {
    return useContext(ShoppingCartContext);
  }
  
  export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

    
    useEffect(() => {
      const storedCartItems = getLocalStorageData(LOCAL_STORAGE.SHOPPING_CART) as CartItem[];
      setCartItems(storedCartItems);
    }, []);
  
    useEffect(() => {
      setLocalStorageData(LOCAL_STORAGE.SHOPPING_CART, cartItems);
    }, [cartItems]);

    useEffect(() => {
        const storedWishListItems = getLocalStorageData(LOCAL_STORAGE.WISHLIST) as WishlistItem[];
        setWishlistItems(storedWishListItems);
      }, []);
      
      useEffect(() => {
        if (wishlistItems !== undefined) {
          setLocalStorageData(LOCAL_STORAGE.WISHLIST, wishlistItems);
        }
      }, [wishlistItems]);
    
    const addToWishlist = (id: number) => {
        setWishlistItems((prevItems) => [...prevItems, { id }]);
    };

    const removeFromWishlist = (id: number) => {
        setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };
  
  
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
  
    function getItemQuantity(id: number) {
      return cartItems.find((item) => item.id === id)?.quantity || 0;
    }
  
    function increaseCartQuantity(id: number) {
      setCartItems((currentItems) => {
        if (!currentItems.find((item) => item.id === id)) {
          return [...currentItems, { id, quantity: 1 }];
        } else {
          return currentItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
      });
    }
  
    function decreaseCartQuantity(id: number) {
      setCartItems((currentItems) => {
        if ((currentItems.find((item) => item.id === id)?.quantity || 1) === 1) {
          return currentItems.filter((item) => item.id !== id);
        } else {
          return currentItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          );
        }
      });
    }
  
    function removeFromCart(id: number) {
      setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
    }
  
    return (
      <ShoppingCartContext.Provider
        value={{
          getItemQuantity,
          increaseCartQuantity,
          decreaseCartQuantity,
          removeFromCart,
          cartItems,
          cartQuantity,
          wishlistItems,
            addToWishlist,
            removeFromWishlist,
        }}
      >
        {children}
      </ShoppingCartContext.Provider>
    );
  }