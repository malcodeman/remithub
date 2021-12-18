import {
  Heading,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { map } from "ramda";
import { useTranslation } from "next-i18next";

const FAQ = [
  {
    question: "faq-is-it-possible-to-send-money-with-remithub",
    answer: "faq-remithub-is-not-a-money-transfer-company",
  },
  {
    question: "faq-can-i-trust-a-company-i-found-on-remithub",
    answer:
      "faq-we-only-list-money-transfer-companies-that-are-fully-authorized",
  },
];

const Faq = () => {
  const { t } = useTranslation("common");
  return (
    <Box as="section" mb="16">
      <Heading mb="4">{t("frequently-asked-questions")}</Heading>
      <Accordion allowMultiple>
        {map(
          (item) => (
            <AccordionItem key={item.question}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {t(item.question)}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{t(item.answer)}</AccordionPanel>
            </AccordionItem>
          ),
          FAQ
        )}
      </Accordion>
    </Box>
  );
};

export default Faq;
