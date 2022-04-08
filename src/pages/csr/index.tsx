import React, { useState, useEffect } from "react";
import {
  Select,
  Link,
  Image,
  Grid,
  Flex,
  Text,
  VStack,
  HStack,
  useBreakpointValue,
  Button,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import {
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import axios from "axios";

const SERVICE_URL = "http://localhost:8080/function/list-assets";

interface Asset {
  id: string;
  type: "video" | "image";
  url: string;
  createdAt: string;
}

interface SpiderProps {
  data: {
    assets: Array<Asset>;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
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
      align="center"
      backgroundColor="transparent"
      as={Link}
      isExternal={true}
      href={url}
      direction="column"
    >
      <Flex
        p={12}
        bg="white"
        direction="column"
        h="300px"
        w="300px"
        rounded="24px"
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
      <Text fontSize="14px" color="gray.600" isTruncated={true} maxW="300px">
        {url}
      </Text>
    </Flex>
  );
};

const fetchAssets = (
  pageNumber: number,
  filterType: string,
  searchText: string
) => {
  let queryParams = `page=${pageNumber}`;
  if (["video", "image"].includes(filterType)) {
    queryParams += `&type=${filterType}`;
  }
  if (searchText !== "") {
    queryParams += `&search=${searchText}`;
  }
  return axios.get(`${SERVICE_URL}?${queryParams}`);
};

const SpiderCSR = () => {
  const [data, setData] = useState({});
  const sort = "asc";
  const [pageNumber, setPageNumber] = useState(1);
  const [filterType, setFilterType] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetchAssets(pageNumber, filterType, searchText);
      const { data } = response;
      setData(data);
    };
    getData();
  }, [pageNumber, filterType, searchText]);
  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
    lg: "repeat(2, minmax(10rem, 1fr))",
    xl: "repeat(3, minmax(10rem, 1fr))",
  });
  return (
    <VStack>
      <Flex w="100%" direction="column" gap={2}>
        <HStack>
          <Input
            w="100px"
            h="24px"
            isTruncated={true}
            size="sm"
            type="text"
            fontSize="12px"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </HStack>
        <HStack spacing={2} alignSelf="flex-end">
          <Select
            rounded="md"
            defaultValue="all"
            paddingY={2}
            fontSize="12px"
            size="xs"
            placeholder="Select option"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
          </Select>
          <Button
            rounded="md"
            aria-label="prev-page"
            paddingX="4"
            paddingY="1"
            size="xsm"
            fontSize="0.75em"
            variant="outline"
            leftIcon={<ChevronLeftIcon />}
            isDisabled={!data.hasPrevPage}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Prev
          </Button>
          <Button
            rounded="md"
            aria-label="next-page"
            paddingX="4"
            paddingY="1"
            size="xsm"
            fontSize="0.75em"
            variant="outline"
            rightIcon={<ChevronRightIcon />}
            isDisabled={!data.hasNextPage}
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Next
          </Button>
        </HStack>
      </Flex>
      {data && data.assets && data.assets.length > 0 ? (
        <Grid gap={10} templateColumns={gridTemplateColumns} mb="5">
          {data.assets.map((asset) => {
            return (
              <AssetCard key={asset.id} url={asset.url} type={asset.type} />
            );
          })}
        </Grid>
      ) : (
        <Text fontSize="lg" color="gray.700">
          No assets found. The spiders are working hard
        </Text>
      )}
    </VStack>
  );
};

export default SpiderCSR;
