"use client";
import {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type CartContextType = {
  cart: Partial<IProduct>[];
  total: number;
  priceTotal: number;
  addToCart: (product: Partial<IProduct>) => void;
  removeFromCart: (productId: number) => void;
  resetCart: () => void;
  isProductInCart: (productId: number) => boolean;
};

const CART_LOCAL_STORAGE_KEY = "cart";
const CART_TOTAL_LOCAL_STORAGE_KEY = "cartTotal";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Partial<IProduct>[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [isInitialized, setIsInitialized] = useState(false); // 👈 NUEVO

  // 🔢 Precio total calculado automáticamente
  const priceTotal = useMemo(() => {
    return cart.reduce((acc, product) => acc + (product.price || 0), 0);
  }, [cart]);

  // ✅ Agregar al carrito
  const addToCart = (product: Partial<IProduct>) => {
    if (!product || product.id === undefined)
      return prevCart => prevCart;

    setCart((prevCart) => {
      const alreadyInCart = prevCart.some((item) => item.id === product.id);
      if (alreadyInCart) return prevCart;

      const updatedCart = [...prevCart, product];
      setTotal(updatedCart.length);
      return updatedCart;
    });
  };

  // 🗑️ Eliminar del carrito
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    setTotal((prevTotal) => (prevTotal > 0 ? prevTotal - 1 : 0));
  };

  // 🧼 Resetear carrito
  const resetCart = () => {
    setCart([]);
    setTotal(0);
  };

  // 🔍 Verificar si un producto ya está en el carrito
  const isProductInCart = (productId: number | undefined) => {
    if (productId === undefined) return false;
    return cart.some((item) => item.id === productId);
  };

  // 💾 Guardar en localStorage — solo si ya se restauró antes
  useEffect(() => {
    if (!isInitialized) return;

    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
    localStorage.setItem(
      CART_TOTAL_LOCAL_STORAGE_KEY,
      JSON.stringify(total || 0)
    );
  }, [cart, total, isInitialized]); // 👈 se agrega isInitialized

  // ♻️ Restaurar desde localStorage al iniciar
  useEffect(() => {
    const storedCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
    const storedTotal = localStorage.getItem(CART_TOTAL_LOCAL_STORAGE_KEY);

    if (!storedCart || !storedTotal) {
      setCart([]);
      setTotal(0);
      setIsInitialized(true); // 👈 importante
      return;
    }

    try {
      setCart(JSON.parse(storedCart));
      setTotal(JSON.parse(storedTotal));
    } catch (err) {
      console.error("Error al parsear carrito desde localStorage", err);
      setCart([]);
      setTotal(0);
    }

    setIsInitialized(true); // 👈 después del intento de restaurar
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        priceTotal,
        addToCart,
        removeFromCart,
        resetCart,
        isProductInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext debe usarse dentro de un CartProvider");
  }
  return context;
};
