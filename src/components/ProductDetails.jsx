import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setColor, setPurity, setRingSize } from "../store/actions/productActions";
import { incrementCartCount } from "../store/actions/cartActions";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const { selectedColor, selectedPurity, ringSize } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [price, setPrice] = useState(120943); // Default price

  // Base prices for purities
  const basePrices = {
    "14kt": 100000,
    "18kt": 120000,
  };

  // Ring size-based adjustment (you can customize this)
  const sizeAdjustments = {
    6: -500, // Discount for smaller size
    7: -300,
    8: 0,
    9: 0,
    10: 500, // Additional cost for larger size
    11: 700,
    12: 1000,
  };

  // Function to calculate the price dynamically
  const calculatePrice = () => {
    const purityPrice = basePrices[selectedPurity || "18kt"]; // Default to 18kt
    const sizeAdjustment = sizeAdjustments[ringSize || 8] // Default adjustment is 0
    setPrice(purityPrice + sizeAdjustment);
  };

  // Recalculate price when purity or ring size changes
  useEffect(() => {
    calculatePrice();
  }, [selectedPurity, ringSize]);

  return (
    <div className="col-md-6" style={{ fontFamily: "Roboto, sans-serif" }}>
      <h1 style={{ fontFamily: "Manrope, sans-serif", fontWeight: "500", fontSize: "1.5rem", color: "black", marginBottom: "1rem", textTransform: "capitalize", marginBottom: "1rem", lineHeight: "1.3", textAlign: "left", letterSpacing: "0.5px", wordSpacing: "1px"}}>Unwavering Devotion Diamond Band Ring</h1>
      <h2 style={{ fontFamily: 'Jost, sans-serif', fontSize: '32px', fontWeight: '400' }}>₹{price.toLocaleString()}</h2>
      <p style={{fontFamily: 'Jost, sans-serif', fontSize: '16px', fontWeight: '400', paddingTop: '10px'}}>
        Price inclusive of taxes. See the full <a href="#" className="text-decoration-none" style={{color: '#3d8dbe'}}>price breakup</a>.<br/>
        <a href="#" className="text-decoration-none" style={{color: '#3d8dbe', fontSize: '11px'}}>loyalty and special offer for you</a>
      </p>

      {/* Color Options */}
      <div className="mb-3 d-flex">
        <h5 style={{fontFamily: 'Jost, sans-serif', fontSize: '13px'}} className="me-5">Color:</h5>
        <div className="d-flex">
          {["#ffcccc", "#cccccc", "#ffcc66"].map((color) => (
            <div
              key={color}
              className={`rounded-circle border me-2 ${selectedColor === color ? "border-primary" : ""}`}
              style={{ width: "20px", height: "20px", backgroundColor: color }}
              onClick={() => dispatch(setColor(color))}
            ></div>
          ))}
        </div>
      </div>

      {/* Purity Options */}
      <div className="mb-3 d-flex">
        <h5 style={{ fontFamily: "Jost, sans-serif", fontSize: "13px" }} className="me-5">
          Purity:
        </h5>
        {["14kt", "18kt"].map((purity) => (
          <Button
            key={purity}
            variant={selectedPurity === purity ? "dark" : "light"}
            className="me-2"
            onClick={() => dispatch(setPurity(purity))}
          >
            {purity}
          </Button>
        ))}
      </div>

      {/* Ring Size */}
      <div className="mb-3 d-flex">
        <h5 style={{ fontFamily: "Jost, sans-serif", fontSize: "13px" }} className="me-4">
          Ring Size:
        </h5>
        <Form.Select
          className="w-50"
          value={ringSize}
          onChange={(e) => dispatch(setRingSize(parseInt(e.target.value)))}
        >
          {[6, 7, 8, 9, 10, 11, 12].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </Form.Select>
      </div>

      {/* Action Buttons */}
      <div className="mb-3 pt-4">
        <Button
          variant="dark"
          className="me-2 text-uppercase"
          style={{
            backgroundColor: "#8097a4",
            border: "none",
            fontFamily: "Jost, sans-serif",
            fontSize: "16px",
            margin: "0 8px 0 5px",
            padding: "10px 16px",
          }}
          onClick={() => dispatch(incrementCartCount())}
        >
          Add to Cart
        </Button>
        <Button variant="success" className="me-2 text-uppercase" style={{ backgroundColor: "#8097a4", border: 'none', fontFamily: 'Jost, sans-serif', fontSize: '16px', margin: '0 8px 0 5px', padding: '10px 16px'}}>Buy Now</Button>
      </div>

      <p className="mt-3 text-decoration-underline" style={{color: '#212529', fontSize: '14px', fontFamily: 'Jost, sans-serif', fontWeight: '500'}}>
        <a href="#" style={{color: '#012f49', fontSize: '12px', fontFamily: 'Jost, sans-serif'}}>Delivery & Cancellation</a>
        <br />
        Estimated Delivery by 21st Dec 2024
      </p>

      {/* Pincode */}
      <div className="mb-3">
        <h5 style={{fontFamily: 'Jost, sans-serif', fontSize: '14px'}} className="me-4">Enter your pincode:</h5>
        <div>
          <Form.Control type="text" className="w-50 me-2 border-dark mb-3" />
          <Button variant="secondary" className="text-uppercase" style={{ backgroundColor: "#012f49", border: 'none', fontFamily: 'Jost, sans-serif', fontSize: '16px', margin: '0 8px 0 5px', padding: '12px 25px'}}>view in stock</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;