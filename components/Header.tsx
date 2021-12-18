import {
  Text,
  Flex,
  Box,
  Container,
  LayoutProps,
  Select,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { map } from "ramda";
import { Moon, Sun } from "react-feather";
import { IconButton } from "@chakra-ui/button";

import constants from "../lib/constants";

import Logo from "./Logo";
import NavLink from "./misc/NavLink";

function Header(props: LayoutProps) {
  const backgroundColor = useColorModeValue("white", "gray.800");
  const boxShadow = useColorModeValue(
    "rgba(0, 0, 0, 0.03) 0px 2px 0px 0px",
    "rgba(255, 255, 255, 0.03) 0px 2px 0px 0px"
  );
  const { t } = useTranslation("common");
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const { locale } = router;

  function onChangeLocale(e: React.ChangeEvent<HTMLSelectElement>) {
    const { pathname, asPath, query } = router;
    const nextLocale = e.target.value;
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  }

  return (
    <Box
      {...props}
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}
      as="header"
      paddingY="2"
      position="fixed"
      left="0"
      top="0"
      right="0"
      zIndex="1"
    >
      <Container maxW="container.lg">
        <Flex as="nav" justifyContent="space-between">
          <Flex alignItems="center">
            <Box mr="4">
              <Logo href="/" />
            </Box>
            <NavLink href="/">
              <Text mr="4">{t("home")}</Text>
            </NavLink>
            <NavLink href="/reviews">
              <Text mr="4">{t("reviews")}</Text>
            </NavLink>
            <NavLink href="/about">
              <Text mr="4">{t("about")}</Text>
            </NavLink>
          </Flex>
          <Flex>
            <IconButton
              size="sm"
              aria-label="Color mode"
              mr="2"
              icon={colorMode === "dark" ? <Sun /> : <Moon />}
              onClick={toggleColorMode}
            />
            <Select
              size="sm"
              borderRadius="md"
              value={locale}
              onChange={onChangeLocale}
            >
              {map(
                (item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ),
                constants.LANGUAGES
              )}
            </Select>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
