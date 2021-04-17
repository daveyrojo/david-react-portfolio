import React from "react";
import { Image } from "react-bootstrap";

export function AboutMeCard(props) {
    return (
      <div style={{ marginLeft: "14em" }}>
        <Image
          variant="top"
          src={props.image}
          style={{ alignItems: "center", width: "50%"}}
          fluid
        />
        <p
          style={{
            width: "50%",
            textAlign: "center",
          }}
        >
          {props.text}
        </p>
      </div>
    );
}
