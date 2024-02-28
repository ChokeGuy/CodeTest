import { useContext } from "react";
import Card from "./Card";
import { plus, minus, trash } from "../assets/index";
import { CartContext } from "../store/store";
function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  //Remove shoes from cart base on id
  const handleRemoveFromCart = (shoes) => {
    const newCart = cartItems.filter((item) => item.id !== shoes.id);
    // Apply zoom-out animation to the cart item
    const cartItem = document.getElementById(`cart-item-${shoes.id}`);
    if (cartItem) {
      cartItem.classList.add("animate-zoomOut");
    }
    setTimeout(() => {
      setCartItems(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }, 800); // Adjust the delay to match the animation duration
  };

  //Update the amount of shoes in cart base on id
  const handleUpdateAmount = (shoes, amount) => {
    //Get the shoes amount from the cart
    const shoesInCart = cartItems.find((item) => item.id === shoes.id);

    if (shoesInCart?.amount === 1 && amount == -1)
      return handleRemoveFromCart(shoes);

    const newCart = cartItems.map((item) => {
      if (item.id === shoes.id) {
        return { ...item, amount: item.amount + amount };
      }
      return item;
    });
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const getTotalCost = () => {
    const totalCost = cartItems.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);
    return totalCost.toFixed(2);
  };

  return (
    <Card title="your cart" cost={getTotalCost()}>
      <div className="col-span-full flex flex-col justify-start items-center gap-y-10">
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (
              <div
                id={`cart-item-${item.id}`}
                className="w-full grid grid-flow-col grid-cols-12 space-x-2 md:space-x-3 lg:space-x-2"
                key={item.id}
              >
                <div
                  className={`rounded-full size-[70px] col-span-4 animate-zoomIn`}
                  style={{ backgroundColor: item.color }}
                >
                  <img
                    className="-rotate-30 size-[90px] min-w-24 -translate-y-6 -translate-x-3"
                    src={item.image}
                    alt="product-image"
                  />
                </div>
                <div className="col-span-8">
                  <h1 className="text-ssm font-bold text-black pb-2 animate-appearFromRight animate-delay-[1250ms] opacity-0">
                    {item.name}
                  </h1>
                  <div className="font-bold text-base animate-appearFromRight animate-delay-[1750ms] opacity-0">{`$${item.price}`}</div>
                  <div className="flex items-center justify-between animate-fadeIn animate-delay-[2250ms] opacity-0">
                    <div className="flex items-center py-2 text-ssm text-black">
                      <button
                        onClick={() => handleUpdateAmount(item, -1)}
                        className="size-7 rounded-full p-2 grid place-content-center bg-[#E1E7ED] 
                        cursor-pointer hover:opacity-70 transition-colors"
                      >
                        <img
                          className="size-2 max-w-2 text-gray"
                          src={minus}
                        ></img>
                      </button>
                      <span className="min-w-8 flex justify-center items-center">
                        {item.amount}
                      </span>
                      <button
                        onClick={() => handleUpdateAmount(item, 1)}
                        className="size-7 rounded-full p-2 grid place-content-center bg-[#E1E7ED] 
                        cursor-pointer hover:opacity-70 transition-colors"
                      >
                        <img
                          className="size-2 max-w-2 text-gray "
                          src={plus}
                        ></img>
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item)}
                      className="size-7 rounded-full p-2 grid place-content-center bg-yellow 
                      cursor-pointer hover:opacity-70 transition-colors"
                    >
                      <img
                        className="size-4 max-w-4 text-gray"
                        src={trash}
                      ></img>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-full text-left">Your cart is empty</div>
        )}
      </div>
    </Card>
  );
}

export default Cart;
