import React from "react";
import { Container, Link, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Link as IconLink } from "react-feather";
import { motion } from "framer-motion";
import { Cell } from "react-table";
import type { NextPage } from "next";

import Table from "../components/misc/Table";
import Search from "../components/Search";

const Home: NextPage = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Provider",
        accessor: "provider",
      },
      {
        Header: "Exchange rate",
        accessor: "exchangeRate",
      },
      {
        Header: "Transfer fee",
        accessor: "fee",
      },
      {
        accessor: "url",
        Cell: function idCell(props: Cell) {
          return (
            <Link href={props.value} isExternal>
              <Button
                as={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                size="sm"
                leftIcon={<IconLink size={16} />}
              >
                Send money
              </Button>
            </Link>
          );
        },
      },
    ],
    []
  );
  const data = [
    {
      provider: "Remitly",
      exchangeRate: "4.2",
      fee: "5.3 EUR",
      url: "https://www.remitly.com",
    },
    {
      provider: "Small World",
      exchangeRate: "2.2",
      fee: "2.3 EUR",
      url: "https://www.smallworldfs.com",
    },
    {
      provider: "PayPal",
      exchangeRate: "5.2",
      fee: "1.3 EUR",
      url: "https://www.paypal.com",
    },
  ];

  return (
    <div>
      <Container maxW="container.lg">
        <Box mb="8">
          <Search />
        </Box>
        <Table columns={columns} data={data} />
      </Container>
    </div>
  );
};

export default Home;
