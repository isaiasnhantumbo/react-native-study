import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import { Loader } from "../../components/Loader";
import { CarDTO } from "../../Dtos/ICar";
import api from "../../services/api";
import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  function handleGoToCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car });
  }
  useEffect(() => {
    async function fetchCars() {
      try {
        setIsLoading(true);
        const response = await api.get("/cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCars();
  }, []);

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
      {isLoading ? (
        <Loader />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car
              data={item}
              onPress={() => {
                handleGoToCarDetails(item);
              }}
            />
          )}
        />
      )}
    </Container>
  );
}
