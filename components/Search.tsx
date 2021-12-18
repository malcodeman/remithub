import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Grid } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { map } from "ramda";
import { InputGroup, InputRightAddon } from "@chakra-ui/input";
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/number-input";

import constants from "../lib/constants";

type props = {
  amount: string;
  setAmount: (amount: string) => void;
};

const Search = (props: props) => {
  const { amount, setAmount } = props;
  return (
    <Grid
      paddingY="8"
      gridGap="4"
      gridTemplateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
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
          <NumberInput
            width="100%"
            value={amount}
            onChange={(value) => setAmount(value)}
          >
            <NumberInputField borderLeftRadius="md" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <InputRightAddon borderEndRadius="md">EUR</InputRightAddon>
        </InputGroup>
      </FormControl>
    </Grid>
  );
};

export default Search;
