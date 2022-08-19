import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const SummerSales = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/products");
      setProducts(result.data);
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <h1>Summer Sales</h1>
      <div className="container-wrapper">
        {products.map((product) => (
          <div className="container" key={product.slug}>
            <div className="row">
              <img src={product.image} alt={product.name} />
              <div className="row-footer">
                <h4>{product.name}</h4>
                <p>{product.slug}</p>
                <h6>$79,30</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-align: center;
    padding: 4rem;
    font-size: 3rem;
  }
  .container-wrapper {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 1rem;

    .container {
      padding-bottom: 3.5rem;
    }

    h1 {
      text-align: center;
    }

    .row {
      text-align: center;

      img {
        width: 200px;
        height: 300px;
        padding: 1.5rem 1rem;
      }

      .row-footer {
        text-align: center;

        h4 {
          font-size: 1.5rem;
        }

        p {
          font-size: 1.4rem;
        }

        h6 {
          font-size: 1.3rem;
        }
      }
    }
  }
`;

export default SummerSales;
