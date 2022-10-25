import { useNavigation, useRoute } from "@react-navigation/native";
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
import { CarDTO } from "../../Dtos/ICar";
import {
  About,
  Accessories,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
} from "./styles";

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation();
  const { car } = useRoute().params as Params;
  function handleConfirmRental() {
    navigation.navigate("Scheduling");
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
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{car.rent.price} Mt</Price>
          </Rent>
        </Details>
        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory accessoryName={accessory.name} icon={SpeedSvg} />
          ))}
          {/* <Accessory accessoryName="3.2s" icon={AccelarationSvg} />
          <Accessory accessoryName="800 HP" icon={ForceSvg} />
          <Accessory accessoryName="Gasolina" icon={GasolineSvg} />
          <Accessory accessoryName="Auto" icon={ExchangeSvg} />
          <Accessory accessoryName="2 pessoas" icon={PeopleSvg} /> */}
        </Accessories>
        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button
          title="Escolher período de aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
