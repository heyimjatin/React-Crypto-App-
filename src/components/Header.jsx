import { Button, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const headerHeight = 50;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setHideHeader(false);
      } else {
        setHideHeader(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <HStack
      p={"4"}
      shadow={"base"}
      bgColor={"blackAlpha.900"}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="999"
      transition="top 0.3s"
      sx={{
        top: hideHeader ? `-${headerHeight}px` : "0",
      }}
    >
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
