import { useNavigation } from "@react-navigation/native";
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

interface CarDetailsProps {}

export function CarDetails({}: CarDetailsProps) {
  const navigation = useNavigation();
  function handleConfirmRental() {
    navigation.navigate("Scheduling");
  }
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
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
        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
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
