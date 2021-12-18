import React from "react";
import {
  Container,
  Link,
  Box,
  Text,
  Flex,
  Badge,
  Center,
  Heading,
  Divider,
} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Link as IconLink } from "react-feather";
import { motion } from "framer-motion";
import { Cell } from "react-table";
import axios from "axios";
import { useQuery } from "react-query";
import { isEmpty } from "ramda";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import type { NextPage } from "next";

import constants from "../lib/constants";
import utils from "../lib/utils";

import PayPal from "../icons/PayPal";
import Remitly from "../icons/Remitly";
import WesternUnion from "../icons/WesternUnion";
import SmallWorld from "../icons/SmallWorld";
import Wise from "../icons/Wise";
import NotFoundIllustrations from "../illustrations/NotFound";
import SearchIllustrations from "../illustrations/Search";

import Table from "../components/misc/Table";
import Search from "../components/Search";
import Layout from "../components/Layout";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const columns = React.useMemo(
    () => [
      {
        Header: t("provider"),
        accessor: "icon",
      },
      {
        Header: t("transfer-fee"),
        accessor: "fee",
        Cell: function scoreCell(props: Cell) {
          return (
            <Text fontWeight="bold">{utils.formatNumber(props.value)} EUR</Text>
          );
        },
      },
      {
        Header: "Trust pilot",
        accessor: "trustPilotScore",
        Cell: function scoreCell(props: Cell) {
          return getScoreBadge(props.value);
        },
      },
      {
        Header: t("recipient-gets"),
        accessor: "recipientGets",
        Cell: function recipientGetsCell(props: {
          value: number;
          row: { original: { url: string } };
        }) {
          return (
            <Flex flexDirection="column">
              <Text mb="2" fontWeight="bold" fontSize="md">
                {utils.formatNumber(props.value)} BAM
              </Text>
              <Link href={props.row.original.url} isExternal>
                <Button
                  as={motion.button}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  size="sm"
                  leftIcon={<IconLink size={16} />}
                >
                  {t("send-money")}
                </Button>
              </Link>
            </Flex>
          );
        },
      },
    ],
    [t]
  );
  const exchangeRatesQuery = useQuery("rates", () => axios.get("/api/latest"), {
    enabled: constants.IS_PROD,
  });
  const [amount, setAmount] = React.useState("");

  const exchangeRate =
    exchangeRatesQuery.data?.data.rates.BAM || constants.DEFAULT_EXCHANGE_RATE;

  function calculateRecipientGets(fee: number) {
    return parseFloat(amount) * exchangeRate - fee;
  }

  function getScoreBadge(score: number) {
    if (score >= 4) {
      return <Badge colorScheme="green">{score}</Badge>;
    } else if (score >= 3) {
      return <Badge colorScheme="yellow">{score}</Badge>;
    }
    return <Badge colorScheme="red">{score}</Badge>;
  }

  const data = [
    {
      icon: (
        <Box maxWidth="8em">
          <Wise />
        </Box>
      ),
      provider: constants.PROVIDERS.WISE.NAME,
      trustPilotScore: constants.PROVIDERS.WISE.TRUST_PILOT,
      fee: constants.PROVIDERS.WISE.FEE,
      recipientGets: calculateRecipientGets(constants.PROVIDERS.WISE.FEE),
      url: constants.PROVIDERS.WISE.URL,
    },
    {
      icon: (
        <Box maxWidth="8em">
          <Remitly />
        </Box>
      ),
      provider: constants.PROVIDERS.REMITLY.NAME,
      trustPilotScore: constants.PROVIDERS.REMITLY.TRUST_PILOT,
      fee: constants.PROVIDERS.REMITLY.FEE,
      recipientGets: calculateRecipientGets(constants.PROVIDERS.REMITLY.FEE),
      url: constants.PROVIDERS.REMITLY.URL,
    },
    {
      icon: (
        <Box maxWidth="8em">
          <SmallWorld />
        </Box>
      ),
      provider: constants.PROVIDERS.SMALL_WORLD.NAME,
      trustPilotScore: constants.PROVIDERS.SMALL_WORLD.TRUST_PILOT,
      fee: constants.PROVIDERS.SMALL_WORLD.FEE,
      recipientGets: calculateRecipientGets(
        constants.PROVIDERS.SMALL_WORLD.FEE
      ),
      url: constants.PROVIDERS.SMALL_WORLD.URL,
    },
    {
      icon: (
        <Box maxWidth="8em">
          <WesternUnion />
        </Box>
      ),
      provider: constants.PROVIDERS.WESTERN_UNION.NAME,
      trustPilotScore: constants.PROVIDERS.WESTERN_UNION.TRUST_PILOT,
      fee: constants.PROVIDERS.WESTERN_UNION.FEE,
      recipientGets: calculateRecipientGets(
        constants.PROVIDERS.WESTERN_UNION.FEE
      ),
      url: constants.PROVIDERS.WESTERN_UNION.URL,
    },
    {
      icon: (
        <Box maxWidth="8em">
          <PayPal />
        </Box>
      ),
      provider: constants.PROVIDERS.PAYPAL.NAME,
      trustPilotScore: constants.PROVIDERS.PAYPAL.TRUST_PILOT,
      fee: constants.PROVIDERS.PAYPAL.FEE,
      recipientGets: calculateRecipientGets(constants.PROVIDERS.PAYPAL.FEE),
      url: constants.PROVIDERS.PAYPAL.URL,
    },
  ];
  const ref = React.useRef<HTMLInputElement>(null);

  function handleOnEnterAmount() {
    if (ref.current) {
      ref.current.focus();
    }
  }

  function renderBody() {
    if (isEmpty(amount)) {
      return (
        <Container maxW="container.sm">
          <Center mb="4">
            <Box maxW="sm" width="100%">
              <SearchIllustrations />
            </Box>
          </Center>
          <Center>
            <Button colorScheme="blue" onClick={handleOnEnterAmount}>
              {t("enter-amount")}
            </Button>
          </Center>
        </Container>
      );
    }
    if (parseFloat(amount) > 1000000) {
      return (
        <Container maxW="container.sm">
          <Center mb="4">
            <Box maxW="sm" width="100%">
              <NotFoundIllustrations />
            </Box>
          </Center>
          <Text mb="2" textAlign="center">
            {t("we-are-sorry-we-dont-have-comparisons-for-large-amount")}
          </Text>
          <Text mb="2" textAlign="center">
            {t("we-are-sorry-we-dont-have-comparisons-for-large-amount-desc", {
              amount: constants.MAX_AMOUNT,
            })}
          </Text>
          <Center>
            <Button onClick={() => setAmount(String(constants.MAX_AMOUNT))}>
              {t("compare-sending", { amount: constants.MAX_AMOUNT })}
            </Button>
          </Center>
        </Container>
      );
    }
    return <Table columns={columns} data={data} />;
  }

  return (
    <Layout>
      <Box minHeight="calc(100vh - 80px)">
        <Center>
          <Heading mb="4">{t("compare-and-save")}</Heading>
        </Center>
        <Search amount={amount} amountInputRef={ref} setAmount={setAmount} />
        {renderBody()}
      </Box>
      <Features />
      <Divider marginY="16" />
      <Faq />
      <Footer />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
