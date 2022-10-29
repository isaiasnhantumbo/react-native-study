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
        {imagesUrl.map((image) => (
          <CarImage
            key={image.id}
            source={{ uri: image.photo }}
            resizeMode="contain"
          />
        ))}
      </CarImagemWrapper>
    </Container>
  );
}
