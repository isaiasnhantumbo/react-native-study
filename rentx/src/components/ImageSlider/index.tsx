import {
  CarImage,
  CarImagemWrapper,
  Container,
  ImageIndex,
  ImageIndexes,
} from "./styles";

interface ImageSliderProps {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={true} />
        <ImageIndex active={false} />
      </ImageIndexes>
      <CarImagemWrapper>
        <CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </CarImagemWrapper>
    </Container>
  );
}
