const DOCUMENT = {
  DESCRIPTION: "Pronađite najboljeg dobavljača transfera novca",
  LANGUAGE_CODE: "bs",
};
const COUNTRIES = {
  FROM: [
    {
      value: "de",
      label: "Germany",
    },
    {
      value: "at",
      label: "Austria",
    },
    {
      value: "se",
      label: "Sweden",
    },
  ],
  TO: [
    {
      value: "ba",
      label: "Bosnia & Herzegovina",
    },
  ],
};
const FIXER_ACCESS_KEY = process.env.FIXER_ACCESS_KEY;
const FIXER_API_URL = "http://data.fixer.io/api";
const IS_PROD = process.env.NODE_ENV === "production";
const DEFAULT_EXCHANGE_RATE = 1.955499;
const PROVIDERS = {
  REMITLY: {
    NAME: "Remitly",
    TRUST_PILOT: 4.2,
    FEE: 2.99,
    URL: "https://www.remitly.com",
  },
  PAYPAL: {
    NAME: "Pay Pal",
    TRUST_PILOT: 1.6,
    FEE: 3.99,
    URL: "https://www.paypal.com",
  },
  SMALL_WORLD: {
    NAME: "Small World",
    TRUST_PILOT: 4.1,
    FEE: 3.19,
    URL: "https://www.smallworldfs.com",
  },
  WESTERN_UNION: {
    NAME: "Western Union",
    TRUST_PILOT: 3.5,
    FEE: 3.29,
    URL: "https://www.westernunion.com",
  },
  WISE: {
    NAME: "Wise",
    TRUST_PILOT: 4.6,
    FEE: 1.29,
    URL: "https://www.wise.com",
  },
};
const MAX_AMOUNT = 1000000;

const EXPORTS = {
  DOCUMENT,
  COUNTRIES,
  FIXER_ACCESS_KEY,
  FIXER_API_URL,
  IS_PROD,
  DEFAULT_EXCHANGE_RATE,
  PROVIDERS,
  MAX_AMOUNT,
};

export default EXPORTS;
