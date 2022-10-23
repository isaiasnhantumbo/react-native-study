import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import AccelarationSvg from "../../assets/accelaration.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import PeopleSvg from "../../assets/people.svg";
import ForceSvg from "../../assets/power.svg";
import SpeedSvg from "../../assets/speed.svg";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { ImageSlider } from "../../components/ImageSlider";
import {
  About,
  Accessories,
  Brand,
  CalendarIcon,
  CarImages,
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Description,
  Details,
  Header,
  Name,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
  Footer
} from "./styles";

export function SchedulingDetails() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("SchedulingComplete");
  }
  return (
    <Container>
      <Header>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://www.pngkey.com/png/full/383-3833840_rs-5-coup-price-from-audi-rs5-png.png",
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>RS 450 Coupe </Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>580 Mt</Price>
          </Rent>
        </Details>
        <Accessories>
          <Accessory accessoryName="380 Km/h" icon={SpeedSvg} />
          <Accessory accessoryName="3.2s" icon={AccelarationSvg} />
          <Accessory accessoryName="800 HP" icon={ForceSvg} />
          <Accessory accessoryName="Gasolina" icon={GasolineSvg} />
          <Accessory accessoryName="Auto" icon={ExchangeSvg} />
          <Accessory accessoryName="2 pessoas" icon={PeopleSvg} />
        </Accessories>
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2022</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />
          <DateInfo>
            <DateTitle>ATE</DateTitle>
            <DateValue>18/06/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>500 Mt x3 Diários</RentalPriceQuota>
            <RentalPriceTotal>1500 Mt</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button title="Alugar agora" color={theme.colors.success} onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  );
}
