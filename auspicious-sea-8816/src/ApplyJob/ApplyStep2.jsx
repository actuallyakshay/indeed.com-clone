import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Progress,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import DataForBox1 from "../Components/DataForBox1";
import Box1 from "../Components/SearchBox1";
import Box2 from "../Components/SingleBox2";
import SinglejobData from "../Components/SingleJobData";
import { EXP_ACTION } from "../JobContext/action";
import { JobContext } from "../JobContext/JobContext";

export default function ApplyStep2() {
  const [exp, setExp] = useState("");
  const { state, dispatch } = useContext(JobContext);

  const handleExp = (exp) => {
    dispatch(EXP_ACTION(exp));
  };
  console.log("final", state.exp);
  return (
    <Box bg="gray.50">
      <Flex
        width="80%"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "10", md: "flex" }}
        m="auto"
        mt="10"
      >
        <Container>
          <CircularProgress value={60} color="blue.300">
            <CircularProgressLabel>60%</CircularProgressLabel>
          </CircularProgress>
          <Heading size="sm" mt="2">
            Application step 3 of 5
          </Heading>
          <br />
          <Heading size="lg" color="blackAlpha.800">
            Questions from The New Ways B.V.
          </Heading>
          <br />
          <FormControl isRequired>
            <FormLabel
              isRequired
              fontSize="md"
              color="blackAlpha.700"
              fontWeight="600"
            >
              How many years of total work experience do you have?
            </FormLabel>
            <Input
              type="number"
              htmlSize={4}
              width="auto"
              borderColor="black"
              mt="2"
              value={exp}
              onChange={(e) => setExp(e.target.value)}
              isRequired
            />
          </FormControl>
          <br />
          <br />
          <Heading fontSize="md" color="blackAlpha.700" fontWeight="600">
            Please list 2-3 dates and time ranges that you could do an
            interview.{" "}
            <span color="grey" fontSize="12px">
              (optional)
            </span>
          </Heading>
          <Textarea borderColor="black" mt="2" resize="none" />
          <Flex mt="4">
            <Link to="/step3">
              <Button
                colorScheme="facebook"
                rightIcon={<ArrowRightIcon />}
                onClick={() => handleExp(exp)}
              >
                Continue
              </Button>
            </Link>
          </Flex>
        </Container>
        <Container
          ml={{ base: "0", md: "20" }}
          w={{ base: "full", md: "50vw" }}
          boxShadow="md"
          borderRadius="5px"
          pt="2"
          h="auto"
        >
          <DataForBox1 />
          <br />
          <hr />
          <Box2 />
        </Container>
      </Flex>
    </Box>
  );
}
