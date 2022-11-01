import { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";

import { Bullet } from "../Bullet";
import {
  CarImage,
  CarImagemWrapper,
  Container,
  ImageIndex,
  ImageIndexes,
} from "./styles";

interface ImageSliderProps {
  imagesUrl: {
    id: string;
    photo: string;
  }[];
}
interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}
export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0); 

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });
  
  return (
    <Container>
      <ImageIndexes>
      {
          imagesUrl.map((item, index) => (
            <Bullet 
              key={String(item.id)}
              active={index === imageIndex} 
            />        
          ))
        }
      </ImageIndexes>
      <FlatList
        data={imagesUrl}
        horizontal
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={indexChanged.current}
        renderItem={({ item }) => (
          <CarImagemWrapper>
            <CarImage resizeMode="contain" source={{ uri: item.photo }} />
          </CarImagemWrapper>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
