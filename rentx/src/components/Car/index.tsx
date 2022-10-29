import React from "react";
import { Image, TouchableOpacityProps } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

import GasolineSvg from "../../assets/gasoline.svg";
import { CarDTO } from "../../Dtos/ICar";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import {
  About,
  Brand,
  CarImage,
  Container,
  Details,
  Name,
  Period,
  Price,
  Rent,
  Type,
} from "./styles";

interface CarProps {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface Props extends TouchableOpacityProps {
  data: CarDTO;
  onPress: () => void;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{data.rent.price} Mt</Price>
          </Rent>
          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>
      <CarImage
        resizeMode="contain"
        source={{
          uri: data.thumbnail,
        }}
      />
    </Container>
  );
}
