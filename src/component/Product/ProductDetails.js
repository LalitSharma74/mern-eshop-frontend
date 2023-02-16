import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { getProductDetails } from "../../actions/productAction";

import "./ProductDetails.css";
import Loader from "../layout/Loader/Loader";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id);

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="ProductDetails">
          <div>
            <Carousel>
              {product.images &&
                product.images.map((item, i) => (
                  <img
                    className="CarouselImage"
                    key={item.url}
                    src={item.url}
                    alt={`${i} Slide`}
                  />
                ))}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
