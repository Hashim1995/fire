import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  const [isSubActive, setSubIsActive] = useState({
    status: false,
    key: "",
  });

  const handleSubClick = (key) => {
    if (isSubActive.key === key) {
      setSubIsActive({
        status: false,
      });
    } else {
      setSubIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <ul className="navigation clearfix">
        <li className="current dropdown">
          <Link href="">Home</Link>
          <ul className={isActive.key === 1 ? "d-block" : "d-none"}>
            <li>
              <Link href="/">Home Layout 1</Link>
            </li>
            <li>
              <Link href="/index-2">Home Layout 2</Link>
            </li>
            <li>
              <Link href="/index-3">Home Layout 3</Link>
            </li>
            <li className="dropdown">
              <Link href="/#">Header Styles</Link>
              <ul className={isSubActive.key === 17 ? "d-block" : "d-none"}>
                <li>
                  <Link href="">Header Style 1</Link>
                </li>
                <li>
                  <Link href="/index-2">Header Style 2</Link>
                </li>
              </ul>
              <div className={isSubActive.key === 17 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(17)}>
                <i className="fa fa-angle-down"></i>
              </div>
            </li>
          </ul>
          <div className={isActive.key === 1 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(1)}>
            <i className="fa fa-angle-down"></i>
          </div>
        </li>
        <li className="dropdown">
          <Link href="/page-about">Pages</Link>
          <ul className={isActive.key === 2 ? "d-block" : "d-none"}>
            <li>
              <Link href="/page-about">About</Link>
            </li>
            <li className="dropdown">
              <Link href="/#">Team</Link>
              <ul className={isSubActive.key === 12 ? "d-block" : "d-none"}>
                <li>
                  <Link href="/page-team">Team List</Link>
                </li>
                <li>
                  <Link href="/page-team-details">Team Details</Link>
                </li>
              </ul>
              <div className={isSubActive.key === 12 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleSubClick(12)}>
                <i className="fa fa-angle-down"></i>
              </div>
            </li>
            <li>
              <Link href="/page-testimonial">Testimonial</Link>
            </li>
            <li>
              <Link href="/page-faq">FAQ</Link>
            </li>
            <li>
              <Link href="/page-404">Page 404</Link>
            </li>
          </ul>
          <div className={isActive.key === 2 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(2)}>
            <i className="fa fa-angle-down"></i>
          </div>
        </li>
        <li className="dropdown">
          <Link href="/page-visa">Visa</Link>
          <ul className={isActive.key === 3 ? "d-block" : "d-none"}>
            <li>
              <Link href="/page-visa">Visa Grid</Link>
            </li>
            <li>
              <Link href="/page-visa-details">Visa Details</Link>
            </li>
          </ul>
          <div className={isActive.key === 3 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(3)}>
            <i className="fa fa-angle-down"></i>
          </div>
        </li>
        <li className="dropdown">
          <Link href="/page-training">Training</Link>
          <ul className={isActive.key === 4 ? "d-block" : "d-none"}>
            <li>
              <Link href="/page-training">Training Grid</Link>
            </li>
            <li>
              <Link href="/page-training-details">Training Details</Link>
            </li>
          </ul>
          <div className={isActive.key === 4 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(4)}>
            <i className="fa fa-angle-down"></i>
          </div>
        </li>
        <li className="dropdown">
          <Link href="/page-country">Country</Link>
          <ul className={isActive.key === 5 ? "d-block" : "d-none"}>
            <li>
              <Link href="/page-country">Country Grid</Link>
            </li>
            <li>
              <Link href="/page-country-details">Country Details</Link>
            </li>
          </ul>
          <div className={isActive.key === 5 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(5)}>
            <i className="fa fa-angle-down"></i>
          </div>
        </li>
        <li className="dropdown">
          <Link href="/news-grid">News</Link>
          <ul className={isActive.key === 6 ? "d-block" : "d-none"}>
            <li>
              <Link href="/news-grid">News Grid</Link>
            </li>
            <li>
              <Link href="/news-details">News Details</Link>
            </li>
          </ul>
          <div className={isActive.key === 6 ? "dropdown-btn active" : "dropdown-btn"} onClick={() => handleClick(6)}>
            <i className="fa fa-angle-down"></i>
          </div>
        </li>
        <li>
          <Link href="/page-contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default MobileMenu;
