import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

const CheckoutPage = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleConfirm = () => {
    setOrderConfirmed(true);
    clearCart();  // clears the cart after confirming
  };

  if (orderConfirmed) {
    return (
      <div className="p-8 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Thank you for your purchase!</h1>
        <p className="text-lg">Your order has been successfully confirmed.</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">Qty: {item.amount}</p>
                </div>
                <p className="font-medium">${(item.price * item.amount).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="text-right text-xl font-bold">
            Total: ${parseFloat(total).toFixed(2)}
          </div>

          <button
            onClick={handleConfirm}
            className="mt-6 w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition"
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;




//import React from 'react';

//const CheckoutPage = () => {
  //return (
    //<div className="p-8 max-w-2xl mx-auto">
      //<h1 className="text-2xl font-bold mb-4">Finalização da Compra</h1>
      //<p className="mb-2">Obrigado por sua compra! </p>
      //{/* Aqui você pode mostrar os itens do carrinho e total, se quiser */}
    //</div>
  //);
//};

//export default CheckoutPage;