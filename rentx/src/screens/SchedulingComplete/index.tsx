import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatusBar, useWindowDimensions } from "react-native";

import DoneSvg from "../../assets/done.svg";
import LogoSvg from "../../assets/logo-background-gray.svg";
import { ConfirmButton } from "../../components/ConfirmButton";
import { Container, Content, Footer, Message, Title } from "./styles";

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate("Home");
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
        <Title>Carro alugado!</Title>
        <Message>
          Agora voce so precisa ir {"\n"}
          ir a uma concessionaria da rentX {"\n"}levar o seu carro
        </Message>
      </Content>
      <Footer>
        <ConfirmButton title="Ok" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
