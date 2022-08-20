import React from "react";
import styled from "styled-components";
import baner from "../assets/baner.webp";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-container">
        <div
          className="hero-content"
          style={{
            backgroundImage: `url(${baner})`,
          }}
        >
          <div className="hero-text">
            <h1>Welcome 2 Fashion</h1>
            <h2>Home</h2>
            <h4>we Love Fashion </h4>
            <p>Style is a way to say who you are without having to speak!!!</p>
            <button>Shop now</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .hero-container {
    width: 100%;
    height: 100vh;

    .hero-content {
      width: 100vw;
      height: 100vh;
      background-size: cover;
      background-position: center;

      .hero-text {
        margin: 0 5rem;
        align-items: right;
        font-family: "irishGrover", cursive;

        h1 {
          font-size: 3rem;
          padding-top: 4rem;
        }

        h2 {
          padding: 0.5rem 0;
          font-size: 2rem;
        }

        h4 {
          padding: 0.5rem 0;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        p {
          font-size: 1.2rem;
        }

        button {
          width: 14rem;
          background-color: #a3ea9c;
          border-radius: 0.5rem;
          height: 3.5rem;
          font-size: 1.2rem;
          border: none;
          padding: 0.5rem 1rem;
          margin-top: 10rem;
        }
      }
    }
  }

  @media (max-width: 550px) {
    .hero-content {
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 100vh;

      h1 {
        font-size: 1rem;
      }

      button {
        color: #fff;
        width: 8rem;
      }
    }
  }
`;

export default Hero;
