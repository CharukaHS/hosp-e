import React from "react";
import Head from "next/head";
import { Box, Container, Flex, Text } from "@chakra-ui/react";

import AppointmentBlock from "../components/dashboard/appointment-card";
import NotificationBlock from "../components/dashboard/alert-card";
import PrescriptionsBlock from "../components/dashboard/prescriptions-card";
import ImageBlock from "../components/dashboard/promotion-card";
import PeopleHstackBlock from "../components/dashboard/schedule-again-card";

const DashboardPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>hospe dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container overflowY="auto" maxW="6xl">
        <Flex direction={{ base: "column", md: "row" }} w="100%">
          <Box w={{ base: "100%", md: "50%" }} pr="7px" backgroundColor="white">
            <Text
              m="15px"
              color="GrayText"
              fontWeight="medium"
              fontSize="large"
            >
              Upcoming appoinments
            </Text>

            <AppointmentBlock />
            <AppointmentBlock />

            <Text
              m="15px"
              color="GrayText"
              fontWeight="medium"
              fontSize="large"
            >
              Upcoming examinations
            </Text>

            <NotificationBlock />
            <AppointmentBlock />

            <Text
              m="15px"
              color="GrayText"
              fontWeight="medium"
              fontSize="large"
            >
              Prescriptions
            </Text>

            <PrescriptionsBlock />
            <PrescriptionsBlock />
          </Box>

          <Box w={{ base: "100%", md: "50%" }} pr="7px" backgroundColor="white">
            <ImageBlock />

            <Text
              m="15px"
              color="GrayText"
              fontWeight="medium"
              fontSize="large"
            >
              Schedule again
            </Text>

            <PeopleHstackBlock />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default DashboardPage;
