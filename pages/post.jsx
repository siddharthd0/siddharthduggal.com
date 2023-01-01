import styles from "../styles/Home.module.css";
import {
  Image,
  Stack,
  Divider,
  Link,
  Heading,
  Flex,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Posting() {
  const [dateArray, setDateArray] = useState([]);
  const [descriptionArray, setDescriptionArray] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://brainy.ruiwenge2.repl.co/sid/mydata/json")
      .then((response) => response.json())
      .then((response) => {
        const respArray = Object.values(response);

        setData(respArray.reverse());
        

        const dates = data.map((element) => {
          return element.date;
        });
        setDateArray(dates);

        const descriptions = data.map((desc) => {
          return desc.description;
        });
        setDescriptionArray(descriptions);
      });
  }, [data]);

  return (
    <>
      {data &&
        data.map((item, i) => {
          return (
            <>
              <Flex px="1rem">
                <Flex mb="1rem" direction={"column"} border={"1px"} key={i}>
                  <Text>{item.date}</Text>
                  <br />
                 <Text> {item.description}</Text>
                  <Image width={"200px"} src={item.image} />
                </Flex>
              </Flex>
            </>
          );
        })}
    </>
  );
}
