import React, { useEffect, useState } from "react";
import headerlogo from "../../assets/logo.svg";
import ClickAwayListener from "react-click-away-listener";
import { NavLink } from "react-router-dom";
import { Menu, X } from "react-feather";
import AOS from "aos";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function changeNavState() {
    if (window.innerWidth < 1000) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  useEffect(() => {
    changeNavState();
    window.addEventListener("resize", changeNavState);
    window.addEventListener("scroll", () => {
      changeNavState();
    });
  }, []);

  return (
    <div
      className="header"
      style={
        isOpen && window.innerWidth < 1000
          ? { backgroundColor: "#fffff" }
          : null
      }
    >
      <div className="header__content">
        <NavLink to="/" className="header__content__logo">
          <img src={headerlogo} alt="logo" />
        </NavLink>

        {isOpen ? (
          <ClickAwayListener
            onClickAway={() => {
              if (window.innerWidth < 1000) {
                setIsOpen(false);
              }
            }}
          >
            <div className="header__content__nav">
              <NavLink
                to="/"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Demo
              </NavLink>

              <NavLink
                to="/"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Features
              </NavLink>

              <NavLink
                to="/"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Pricing
              </NavLink>

              <NavLink
                to="/"
                activeclassname="active"
                className="header__content__nav__link"
                onClick={() => {
                  if (window.innerWidth < 1000) {
                    setIsOpen(false);
                  }
                }}
              >
                Packages
              </NavLink>
            </div>
          </ClickAwayListener>
        ) : null}

        <div className="header__content__cta">
          <button
            className="header__content__menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            title={isOpen ? "Close" : "Open"}
          >
            {isOpen ? (
              <X size={20} color="currentColor" />
            ) : (
              <Menu size={20} color="currentColor" />
            )}
          </button>

          <button title="Sign Up" className="header__content__cta__button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
