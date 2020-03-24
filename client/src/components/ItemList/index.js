import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";


export function ItemList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function ItemList({
  thumbnail = "https://placehold.it/300x300",
  title,
  product,
  href
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Product Description {product}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to item!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
