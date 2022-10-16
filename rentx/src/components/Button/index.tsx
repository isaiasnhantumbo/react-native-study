import { Container, Title } from "./styles";

interface ButtonProps {
  title: string;
  color?: string;
}

export function Button({ title, color }: ButtonProps) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
    </Container>
  );
}
