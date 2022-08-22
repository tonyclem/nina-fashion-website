import React from "react";
import styled from "styled-components";

export const Loading = () => {
  return (
    <Wrapper>
      <div className="section section-center">
        <div className="sbl-circ-ripple"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;

  .sbl-circ-ripple {
    width: 10rem;
    height: 10rem;
    margin: 0 auto;
    margin-top: 10rem;
    color: var(--clr-primary-5);
    border-radius: 50%;
    position: relative;
    display: inline-block;
  }

  .sbl-circ-ripple::after,
  .sbl-circ-ripple::before {
    content: "";
    height: 0;
    width: 0;
    border: 50%;
    border: 5px solid;
    border-radius: 50%;
    position: absolute;
    left: 40%;
    top: 40%;
    animation: circle-ripple 1s linear infinite;
  }
  .sbl-circ-ripple::before {
    animation-delay: -0.5s;
  }

  @keyframes circle-ripple {
    0% {
      height: 0;
      width: 0;
      left: 20px;
      top: 20px;
    }
    100% {
      height: 48px;
      width: 48px;
      left: -5px;
      top: -5px;
      opacity: 0;
    }
  }
`;
