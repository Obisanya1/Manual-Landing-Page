import React from "react";
import "./SecondSection.css";
import picture1 from "./hair-photo-1-2-x.png";
import picture2 from "./secnd manual.png";

const SecondSection = () => {
  return (
    <div>
      <center>
        <h2>What we can help with </h2>
      </center>

      <div className="Hero">
        <h1
          style={{
            position: "absolute",
            top: "650px",
            left: "20px",
            fontSize: "300px",
            zIndex: "-1",
            opacity: "0.1",
          }}
        >
          01
        </h1>

        <img
          src={picture1}
          alt="One"
          style={{
            height: "300px",
            display: "block",
            justifySelf: "center",
            marginLeft: "60px",
            marginRight: "auto",
          }}
        />
        <div className="box">
          <h4
            style={{
              color: "rgb(52, 179, 211)",
              fontSize: "15px",
            }}
          >
            HAIR LOSS
          </h4>
          <h5
            style={{
              fontSize: "20px",
              fontWeight: "400",
              color: "rgb(41, 38, 38)",
            }}
          >
            Hair loss needn’t be irreversible. We can help!
          </h5>
          <h5
            style={{
              fontSize: "18px",
              fontWeight: "400",
              color: "rgb(41, 38, 38)",
            }}
          >
            Hair loss needn’t be irreversible. There’s a scientifically proven
            way that’s most effective in keeping and regrowing your hair. It’s
            all to do with blocking a pesky hormone called DHT. That’s the bad
            guy behind hair loss. And you can keep him at bay. The choice is
            yours.
          </h5>
        </div>
      </div>
      <div>
        <div className="Hero1">
          <img
            src={picture2}
            alt="One"
            style={{
              height: "300px",
              display: "block",
              justifySelf: "center",
              marginRight: "auto",
            }}
          />
          <div className="box1">
            <h4
              style={{
                color: "rgb(52, 179, 211)",
                fontSize: "15px",
              }}
            >
              ERECTILE DYSFUNCTION
            </h4>
            <h5
              style={{
                fontSize: "20px",
                fontWeight: "400",
              }}
            >
              Erections can be a tricky thing. But no need to feel down!
            </h5>
            <h5
              style={{
                fontSize: "18px",
                fontWeight: "400",
              }}
            >
              There are plenty of reasons why you might be having difficulty in
              the erection department. We can help you figure out possible
              reasons why. And prescribe a pill if needed.
            </h5>
          </div>{" "}
          <h1
            style={{
              position: "absolute",
              top: "1350px",
              left: "20px",
              fontSize: "300px",
              zIndex: "-1",
              opacity: "0.1",
            }}
          >
            02
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
