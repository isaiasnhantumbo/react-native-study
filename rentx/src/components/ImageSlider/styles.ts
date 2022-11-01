import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
`;

export const ImageIndexes = styled.View`
  align-self: flex-end;
  flex-direction: row;
  padding-right: 24px;
`;

export const ImageIndex = styled.View`
  width: 6px;
  height: 6px;
  margin-left: 8px;
  border-radius: 3px;
`;

export const CarImagemWrapper = styled.View`
 align-items: center;
  height: 132px;
  justify-content: center;
  width: ${Dimensions.get('window').width}px;
`;

export const CarImage = styled.Image`
  height: 132px;
  width: 280px;
`;
