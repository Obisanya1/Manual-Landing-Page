import React from "react";
import logo from "./manual-symblol@3x.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footeritems">
        <img
          src={logo}
          alt=""
          style={{
            paddingTop: "10px",
            paddingLeft: "100px",
            height: "80px",
          }}
        />

        <div className="list">
          <ul>
            <li>
              <b>
                <h3>PRODUCT</h3>
              </b>
            </li>
            <li>Popular</li>
            <br />
            <li>Trending</li>
            <br />
            <li>Guided</li>
            <br />
            <li>Products</li>
            <br></br>
          </ul>

          <ul>
            <li>
              <b>
                <h3>COMPANY</h3>
              </b>
            </li>
            <li>Press Releases</li>
            <br />
            <li>Mission</li>
            <br />
            <li>Strategy</li>
            <br />
            <li>About</li>
            <br></br>
          </ul>

          <ul>
            <li>
              <b>
                <h3>INFO</h3>
              </b>
            </li>
            <li>Support</li>
            <br />
            <li>Customer Service</li>
            <br />
            <li>Get started guide</li>
            <br />
          </ul>
        </div>
      </div>{" "}
      <br />
      <br />
      <hr />
      <center>
        <h6>(c) 2019 Manual. All rights reserved.</h6>
      </center>
    </div>
  );
};

export default Footer;
