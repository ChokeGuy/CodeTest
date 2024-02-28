// Import the 'fetch' function from the 'node-fetch' package

const BASE_URL = import.meta.env.VITE_API_URL;

// Make the API call to get all products
// Use the 'fetch' function to make the API call to the '/products' endpoint
const getAllProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/v1/products`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { getAllProducts };
