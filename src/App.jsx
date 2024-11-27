import React from "react";
import NavigationBar from "./components/Navbar";
import ProductImageGallery from "./components/ProductImageGallery";
import ProductDetails from "./components/ProductDetails";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container my-4">
        <div className="row">
          <ProductImageGallery />
          <ProductDetails />
        </div>
      </div>
    </div>
  );
};

export default App;