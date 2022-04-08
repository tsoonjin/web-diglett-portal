import React, { useState, useEffect } from "react";
import {
  Link,
  Image,
  Grid,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import axios from "axios";

interface Asset {
  id: string;
  type: "video" | "image";
  url: string;
  createdAt: string;
}

interface SpiderProps {
  assets: Array<Asset>;
}

type AssetCardProps = {
  url: string;
  title?: string;
  imgUrl?: string;
  type: "image" | "video";
};

const AssetCard: React.VFC<AssetCardProps> = ({ url, title, type }) => {
  const imgUrl = type === "image" ? url : "video_block.png";
  return (
    <Flex
      as={Link}
      isExternal={true}
      href={url}
      p={12}
      bg="white"
      direction="column"
      h="300px"
      w="300px"
      rounded="24px"
      border="1px solid"
      borderColor="#D7DBEC"
      backgroundSize="cover"
      backgroundImage={`url(${imgUrl})`}
      _focus={{
        borderColor: "brand.gray",
        boxShadow: "0px 2px 15px #D7DBEC",
      }}
      _hover={{
        borderColor: "brand.gray",
        boxShadow: "0px 2px 15px #D7DBEC",
      }}
    ></Flex>
  );
};

const SpiderSSG = (payload: SpiderProps) => {
  const { assets } = payload;
  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
    lg: "repeat(2, minmax(10rem, 1fr))",
    xl: "repeat(3, minmax(10rem, 1fr))",
  });
  return (
    <Grid gap={10} templateColumns={gridTemplateColumns} mb="5">
      {assets.map((asset) => {
        return <AssetCard key={asset.id} url={asset.url} type={asset.type} />;
      })}
    </Grid>
  );
};

export async function getStaticProps() {
  const response = await axios.get(
    "http://localhost:8080/function/list-assets"
  );
  const { data } = response;
  return {
    props: {
      assets: data,
    },
  };
}

export default SpiderSSG;
