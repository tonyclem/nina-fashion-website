import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { useProductsContext } from "../context/products_context";
import shoppingBag from "../assets/shoppingbag.svg";

import logo from "../assets/logo.svg";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="ul-nav">
          <li className="nav-hover underline">home</li>
          <li className="nav-hover underline">product</li>
          <li className="nav-hover underline">about us</li>
        </ul>
        <div className="nav-social ul-nav">
          <span className="icons">
            <FaUserAlt />
          </span>
          <span className="bag">
            <img src={shoppingBag} alt="shopping bag" />
          </span>

          <label className="switch-theme">
            <input type="checkbox" />

            <div className="slider round"></div>
          </label>
        </div>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }

  .show-sidebar {
    width: 100vw;
    position: fixed;
    transform: translate(0);
    z-index: 999;
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }

  .logo {
    justify-self: center;
    height: 45px;
  }

  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }

  .ul-nav {
    margin-top: 1rem;

    li {
      padding: 1rem 0;
      font-size: 2.1rem;
      font-weight: bold;
      margin-left: 1.5rem;
      text-transform: capitalize;
      position: relative;
    }

    .nav-hover::after {
      content: " ";
      position: absolute;
      width: 100%;
      height: 3px;
      left: 0;
      bottom: -2px;
      background: var(--clr-green-dark);
    }

    .underline::after {
      transform: scale(0, 1);
      transform-origin: 0% 100%;
      transition: transform 0.3s ease;
    }
    .underline:hover::after {
      transform: scale(1, 1);
    }
  }

  .nav-social {
    margin: 1rem 1.5rem;

    span {
      display: block;
    }

    .icons {
      font-size: 1.5rem;
      padding: 1.5rem 0;
    }

    .bag {
      padding: 1.5rem 0;
      img {
        width: 2rem;
        height: 2rem;
      }
    }

    .switch-theme {
      display: inline-block;
      height: 34px;
      position: relative;
      width: 60px;

      input {
        display: none;
      }

      .slider {
        background: #ccc;
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: 0.4s;
      }

      .slider::before {
        content: " ";
        position: absolute;
        background: #fff;
        bottom: 4px;
        height: 26px;
        left: 4px;
        transition: 0.4s;
        width: 26px;
      }

      input:checked + .slider.round {
        background: var(--on-primary);
      }

      input:checked + .slider::before {
        transform: translateX(26px);
      }

      .slider.round {
        border-radius: 45px;
      }

      .slider.round::before {
        border-radius: 50%;
      }


  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
