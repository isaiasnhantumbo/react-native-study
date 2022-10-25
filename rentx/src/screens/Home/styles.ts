import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { CarDTO } from "../../Dtos/ICar";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  flex: 1;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.header};
  width: 100%;
  height: 113px;
  justify-content: flex-end;
  padding: 32px 24px;
`;
export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(FlatList as new()=> FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;
