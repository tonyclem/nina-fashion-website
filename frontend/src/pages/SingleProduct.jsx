import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { reducer } from "../reducers/product_reducer";
import { formatPrice } from "../utils/helpers";
import initialState from "../initialState/initialState";
import ProductImages from "../components/ProductImages";
import { Stars } from "../components/Starts";
import { AddToCart } from "../components/AddToCart";
import { Loading } from "../components/Loading";

export const SingleProduct = () => {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, products }, dispatch] = React.useReducer(
    reducer,
    initialState
  );

  const fetchSingleProduct = async (slug) => {
    dispatch({ type: "FETCH_REQUEST" });
    try {
      const result = await axios.get(`/api/products/slug/${slug}`);
      const singleProducts = result.data;
      dispatch({ type: "FETCH_SUCCESS", payload: singleProducts });
    } catch (error) {
      dispatch({ type: "FETCH_FAIL", payload: error.message });
    }
  };

  React.useEffect(() => {
    fetchSingleProduct(`${slug}`);
  }, [slug]);

  const {
    name,
    price,
    description,
    company,
    id,
    images,
    countInStock,
    rating,
    colors,
    numReviews,
  } = products;

  return loading ? (
    <Loading />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/products" className="btn">
          Back to products
        </Link>

        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={rating} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="description">{description}</p>
            <p className="info">
              <span>Available:</span>{" "}
              <span className="available">
                {countInStock > 0 ? (
                  <span className="in-stock">In Stock</span>
                ) : (
                  <span className="out-of-stock">Out of Stock</span>
                )}
              </span>
            </p>
            <p className="info">
              <span>Brand:</span>
              {company}
            </p>
            <hr />
            {countInStock > 0 && <AddToCart products={products} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }

  p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-3);
  }

  .price {
    color: var(--clr-primary-5);
  }

  .description {
    line-height: 1.5;
    max-width: 50em;
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;

    span {
      font-weight: 700;
    }

    .in-stock {
      color: var(--on-primary-color);
      background-color: var(--clr-primary-7);
      border-radius: 0.25rem;
      width: 75px;
      padding: 0.15rem;
    }

    .out-of-stock {
      color: var(--on-primary-color);
      background-color: var(--clr-error);
      border-radius: 0.25rem;
      padding: 0.15rem;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
    }

    .price {
      font-size: 1.25rem;
    }
  }
`;
