import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export const AddToCart = ({ products }) => {
  const { id, countInStock, colors } = products;

  const [mainColor, setMainColor] = React.useState(colors[0]);
  const [amount, setAmount] = React.useState(1);

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
        <Link to="/" className="btn">
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
