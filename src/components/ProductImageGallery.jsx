import React from "react";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProductImageGallery = () => {
  const { selectedColor } = useSelector((state) => state.product);

  // Mapping colors to images
  const colorImageMap = {
    "#ffcccc": "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-frontRG.jpg", // Rose Gold
    "#cccccc": "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-frontWG.jpg", // White Gold
    "#ffcc66": "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-frontYG.jpg", // Yellow Gold
  };

  const mainImage = colorImageMap[selectedColor] || colorImageMap["#ffcc66"]; // Default to Yellow Gold

  return (
    <div className="col-md-6 d-block">
      <div>
        <Image
          src={mainImage}
          alt="Main Product"
          fluid
          className="mb-4"
          style={{ height: "700px", objectFit: "cover", width: "700px" }}
        />
      </div>
      <div className="d-flex">
        {Object.values(colorImageMap).map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Thumbnail ${index + 1}`}
            rounded
            className="img-thumbnail me-2"
            style={{ width: "75px", height: "75px", objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;