import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { CartContext } from "../store/store"; // Import the CartContext
import { check } from "../assets/index";
import { getAllProducts } from "../lib/fetchClient"; // Import the getAllProducts function
// import jsonData from "../data/shoes.json"; // Import the jsonData object

function Product() {
  const [products, setProducts] = useState([]);
  const { cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    async function fetchData() {
      const data = await getAllProducts();
      setProducts(data[0].shoes);
    }
    fetchData();
  }, []);
  const handleAddToCart = (shoes) => {
    //Cast the Shoes type to CartItem type
    const newCartItems = {
      id: shoes.id,
      name: shoes.name,
      image: shoes.image,
      color: shoes.color,
      price: shoes.price,
      amount: 1,
    };

    //Add the new item to the cart
    const newCart = [...cartItems, newCartItems];
    setCartItems(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  const checkIfItemInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <Card title="our products">
      <div
        className="col-span-full flex flex-col justify-start items-center gap-y-20
      animate-fadeIn"
      >
        {products.length > 0 ? (
          products.map((shoes) => {
            return (
              <div className="grid place-items-center" key={shoes.id}>
                <div
                  className={`w-full rounded-4xl`}
                  style={{ backgroundColor: shoes.color }}
                >
                  <img
                    className="-rotate-30 size-72 sm:-translate-x-5 ssm:translate-x-2 max-ssm:-translate-x-3"
                    src={shoes.image}
                    alt="product-image"
                  />
                </div>
                <h1 className="w-full text-base font-bold py-4 text-black">
                  {shoes.name}
                </h1>
                <p className="w-full text-ssm leading-4 prose text-gray mb-3">
                  {shoes.description}
                </p>
                <div className="w-full flex justify-between items-center pb-3 text-ssm text-black">
                  <span className="font-bold text-base">{`$${shoes.price}`}</span>
                  {
                    // Check if the item is in the cart

                    <button
                      onClick={() => {
                        const check = checkIfItemInCart(shoes.id);
                        check ? null : handleAddToCart(shoes);
                      }}
                      className={`bg-yellow rounded-4xl font-bold ${
                        !checkIfItemInCart(shoes.id)
                          ? "px-4 cursor-pointer hover:opacity-70 transition-colors"
                          : "px-2 cursor-default"
                      } 
                    py-2 flex justify-center items-center transition-all`} // Add a transition effect
                    >
                      {!checkIfItemInCart(shoes.id) ? (
                        <span className="animate-fadeOut">ADD TO CART</span>
                      ) : (
                        <img
                          className="size-[18px] max-w-[18px] text-gray animate-fadeIn"
                          src={check}
                        ></img>
                      )}
                    </button>
                  }
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-left w-full animate-fadeIn">
            Your product is empty
          </div>
        )}
      </div>
    </Card>
  );
}

export default Product;
