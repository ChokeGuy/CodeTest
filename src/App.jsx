import Cart from "./components/Cart.jsx";
import Product from "./components/Product.jsx";
import { CartProvider } from "./store/store.jsx";

function App() {
  return (
    <CartProvider>
      <div className="ssm:h-full sm:h-screen flex items-center justify-center container">
        <div className="grid gap-4 grid-flow-col place-content-center">
          <div className="w-full grid grid-cols-12 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 max-md:gap-y-10 sm:gap-x-8">
            <div className="sm:col-span-1 lg:col-span-2 xl:col-span-3"></div>
            <Product />
            <Cart />
            <div className="md:col-span-2"></div>
          </div>
        </div>
      </div>
      <div className="fixed -z-10 -left-[13%] bottom-0 right-0 h-[60%] bg-yellow rounded-[100%_0%_0%_0%] animate-upDown"></div>
    </CartProvider>
  );
}

export default App;
