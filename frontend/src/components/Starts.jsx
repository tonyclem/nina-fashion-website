import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
export const Stars = ({ stars, reviews }) => {
  const tempStarts = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <Wrapper>
      <div className="stars">{tempStarts}</div>
      <p className="reviews">{reviews}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    font-size: 0.2rem;
    margin-left: 0.5rem;
    margin-bottom: 0;
    padding-top: 1rem;
  }

  margin-bottom: 0.5rem;

  @media (max-width: 720px) {
    stars {
      font-size: 12px;
    }
  }
  @media (min-width: 620px) {
    stars {
      font-size: 12px;
    }
  }
`;
