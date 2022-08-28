import { Container, Text } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { getPriceInUsd } from "../../helper/pricefeed";

export const PriceShow = () => {
  const [price, setPrice] = useState("0.00");

  useEffect(() => {
    (async () => setPrice((await getPriceInUsd(1)).toFixed(3)))();

    const intvl = setInterval(async () => {
      setPrice((await getPriceInUsd(1)).toFixed(3));
    }, 30000);

    return () => clearInterval(intvl);
  }, []);

  return (
    <Container>
      <Text>Price of Matic today ≈ ${price}</Text>
    </Container>
  );
};
