import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";

import DoneSvg from "../../assets/done.svg";
import LogoSvg from "../../assets/logo-background-gray.svg";
import { ConfirmButton } from "../../components/ConfirmButton";
import { Container, Content, Footer, Message, Title } from "./styles";

interface Params {
  title: string;
  message: string;
  nextScreen: string;
}
export function Confirmation() {
  const { width } = useWindowDimensions();
  const { message, nextScreen, title } = useRoute ().params as Params;
  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate(nextScreen);
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
      <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>
      <Footer>
        <ConfirmButton title="Ok" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
