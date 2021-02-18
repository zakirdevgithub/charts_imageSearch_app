import React from "react";
import { Container, Image } from "react-bootstrap";
import "../index.css";
type Props = {
  imageWidth: any;
  imageHeight: any;
  name: any;
};
export const SearchResult = ({ imageWidth, imageHeight, name }: Props) => {
  const img = `https://source.unsplash.com/${imageWidth}x${imageHeight}/?${name}`;
  return (
    <>
      <Container>
        <Image src={img} fluid />
      </Container>
    </>
  );
};
