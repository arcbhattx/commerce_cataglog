import { useEffect, useState } from "react";
import { TrashIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const rawCart = JSON.parse(localStorage.getItem("cart")) || [];

    const grouped = rawCart.reduce((acc, item) => {
      const existing = acc.find((i) => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);

    setCartItems(grouped);
  }, []);

  const updateStorage = (items) => {
    const expanded = items.flatMap((item) =>
      Array(item.quantity).fill({ ...item, quantity: undefined })
    );
    localStorage.setItem("cart", JSON.stringify(expanded));
  };

  const increase = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
    updateStorage(updated);
  };

  const decrease = (id) => {
    const updated = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCartItems(updated);
    updateStorage(updated);
  };

  const remove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    updateStorage(updated);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-mono">
      {/* Back Arrow */}
      <Link
        to="/"
        className="flex items-center mb-6 text-gray-600 hover:text-black transition"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-1" />
        <span>Back to Home</span>
      </Link>

      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b pb-4 justify-between"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover border border-black"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-700">${item.price}</p>
                <p className="text-sm text-gray-500">x {item.quantity}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decrease(item.id)}
                  className="px-2 py-1 border border-black"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increase(item.id)}
                  className="px-2 py-1 border border-black"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => remove(item.id)}
                className="text-red-500 hover:text-red-700"
                title="Remove item"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          ))}

          {/* Total and Checkout Button */}
          <div className="mt-6 flex flex-col items-start space-y-4">
            <div className="text-xl font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </div>

            <button
              onClick={() => alert("Proceeding to checkout...")}
              className="px-6 py-2 bg-black text-white font-bold border-2 border-black hover:bg-white hover:text-black transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
