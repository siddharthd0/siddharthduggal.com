import { useState, useEffect } from "react";
import { Flex, Text,Tooltip } from "@chakra-ui/react";
import { DateTime } from "luxon";
import { BsClock } from "react-icons/bs";

function Clock() {
  const [time, setTime] = useState(getFormattedDate(DateTime.local()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getFormattedDate(DateTime.local()));
    }, 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  function getFormattedDate(date) {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
    };
    const mdtDate = date.setZone("America/Denver");
    return mdtDate.toLocaleString(options);
  }

  return (
    <>
      {" "}
      <Tooltip label="Current time in Idaho (MDT)" bg="gray.800" borderRadius="md">
      <Flex color="whiteAlpha.700" fontSize="sm" alignItems="center">
        <BsClock />
        <Text pl="8px" fontSize="sm" color="whiteAlpha.700">
          {time}
        </Text>
      </Flex>
      </Tooltip>
    </>
  );
}

export default Clock;
