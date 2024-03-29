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
import { useTranslation } from "next-i18next";

import constants from "../lib/constants";

type props = {
  amount: string;
  amountInputRef: any;
  setAmount: (amount: string) => void;
};

const Search = (props: props) => {
  const { amount, amountInputRef, setAmount } = props;
  const { t } = useTranslation("common");
  return (
    <Grid
      paddingY="8"
      gridGap="4"
      gridTemplateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
    >
      <FormControl>
        <FormLabel>{t("country-from")}</FormLabel>
        <Select size="sm" borderRadius="md">
          {map(
            (item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ),
            constants.COUNTRIES.FROM
          )}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>{t("country-to")}</FormLabel>
        <Select size="sm" borderRadius="md">
          {map(
            (item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ),
            constants.COUNTRIES.TO
          )}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>{t("amount")}</FormLabel>
        <InputGroup size="sm">
          <NumberInput
            width="100%"
            value={amount}
            onChange={(value) => setAmount(value)}
          >
            <NumberInputField borderLeftRadius="md" ref={amountInputRef} />
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
