import React from "react";

function ProductInfo({ product }) {

    if (!product) {
        return null;
    }

    return (
        <div className="product-info">

            <h2>Product Information</h2>

            <div className="product-details">

                <h3>{product.name || "Product Name"}</h3>

                <p>
                    <strong>Price:</strong>{" "}
                    {product.price || "Not available"}
                </p>

                <p>
                    <strong>Rating:</strong>{" "}
                    {product.rating || "Not available"}
                </p>

                <p>
                    <strong>Platform:</strong>{" "}
                    {product.platform || "Not available"}
                </p>

            </div>

        </div>
    );
}

export default ProductInfo;