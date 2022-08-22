import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import AmountButtons from "./AmountButton";
import { useCartContext } from "../context/cart_context";

export const AddToCart = ({ products }) => {
  const { addToCart } = useCartContext();
  const { id, countInStock, colors } = products;

  const [mainColor, setMainColor] = React.useState(colors[0]);
  const [amount, setAmount] = React.useState(1);

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > countInStock) {
        tempAmount = countInStock;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>Colors:</span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                className={`${
                  mainColor === color ? "color-btn active" : "color-btn"
                }`}
                style={{ background: color }}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          increase={increase}
          amount={amount}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, mainColor, amount, products)}
        >
          Add To cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;

  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: uppercase;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }

  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }

  .btn-container {
    margin-top: 2rem;

    .btn {
      margin-top: 1rem;
      width: 140px;
    }
  }
`;
