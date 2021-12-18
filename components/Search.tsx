import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Grid } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { map } from "ramda";
import { InputGroup, InputRightAddon } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Search as IconSearch } from "react-feather";
import { motion } from "framer-motion";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";

import constants from "../lib/constants";

const Search = () => {
  return (
    <Grid
      paddingY="8"
      gridGap="4"
      gridTemplateColumns={["1fr", "1fr", "repeat(4, 1fr)"]}
    >
      <FormControl>
        <FormLabel>Country from</FormLabel>
        <Select size="sm" borderRadius="md">
          {map(
            (item) => (
              <option value={item.value}>{item.label}</option>
            ),
            constants.COUNTRIES.FROM
          )}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Country to</FormLabel>
        <Select size="sm" borderRadius="md">
          {map(
            (item) => (
              <option value={item.value}>{item.label}</option>
            ),
            constants.COUNTRIES.TO
          )}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Amount</FormLabel>
        <InputGroup size="sm">
          <NumberInput>
            <NumberInputField borderLeftRadius="md" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <InputRightAddon borderEndRadius="md">EUR</InputRightAddon>
        </InputGroup>
      </FormControl>
      <Button
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        colorScheme="blue"
        size="sm"
        alignSelf="flex-end"
        borderRadius="md"
        isFullWidth
        leftIcon={<IconSearch size={16} />}
      >
        Search
      </Button>
    </Grid>
  );
};

export default Search;
