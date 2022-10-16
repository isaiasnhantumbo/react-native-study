import { ReactNode } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";

export function Home() {
  const car = {
    brand: "Audio",
    name: "RS 250",
    rent: {
      period: "Ao dia",
      price: 250,
    },
    thumbnail:
      "https://www.pngkey.com/png/full/383-3833840_rs-5-coup-price-from-audi-rs5-png.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 26 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3,5,6,8,61,23,13]}
        keyExtractor={(item) => String(item)}
        renderItem={(item) => <Car data={car} />}
      />
    </Container>
  );
}
