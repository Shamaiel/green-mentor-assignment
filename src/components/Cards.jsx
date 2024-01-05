import {
  SimpleGrid,
  Card,
  Button,
  Text,
  Heading,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Center,
} from "@chakra-ui/react";
import React from "react";

const Cards = () => {
  return (
    <Flex
    direction={{ base: "column", md: "row" }}  // Stack on small screens, display in row on medium and larger screens
    justifyContent="space-around"
    alignItems={{ base: "stretch", md: "center" }} 
    m={35} // Align items in the center on medium and larger screens
  >
    <Card mr="9" className={{ base: "h-32", md: "h-32" }}>
      <CardHeader>
        <Heading size="sm" fontWeight="bold">
          Purchased goods and services
        </Heading>
      </CardHeader>
  
      <CardFooter alignItems="center">
        <Button borderColor="rgba(255, 0, 0, 0.5)">
          44145567 CO2 20%YOY
        </Button>
      </CardFooter>
    </Card>
  
    <Card  mr="9" className={{ base: "h-32", md: "h-32" }}>
      <CardHeader>
        <Heading size="sm" fontWeight="bold">
          Categeory-1
        </Heading>
      </CardHeader>
  
      <CardFooter alignItems="center">
        <Button borderColor="rgba(255, 0, 0, 0.5)">22% of Scope3</Button>
      </CardFooter>
    </Card>
  
    <Card  mr="9" className={{ base: "h-32", md: "h-32" }}>
      <CardHeader>
        <Heading size="sm" fontWeight="bold">
          Purchased goods and services to reverse ratio
        </Heading>
      </CardHeader>
  
      <CardFooter alignItems="center">
        <Button borderColor="rgba(255, 0, 0, 0.5)">321457 CO2 24%YOY</Button>
      </CardFooter>
    </Card>
  
    <Card bg="green.500" color="white" height={{ base: "auto", md: "32" }}>
      <CardBody>
        <Text className="text-white">Total number of reached suppliers</Text>
      </CardBody>
      <Heading>
        143
      </Heading>
    </Card>
  </Flex>
  );
};

export default Cards;
