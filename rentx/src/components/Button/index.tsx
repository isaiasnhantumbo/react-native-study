import { useTheme } from "styled-components";

import { Loader } from "../Loader";
import { Container, Title } from "./styles";

interface ButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  isLoading?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  isLoading = false,
  enabled = true,
}: ButtonProps) {
  const theme = useTheme();
  return (
    <Container
      color={color ? color : theme.colors.main}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled === false || isLoading === true ?  0.5 :1 }}
    >
      {isLoading ? <Loader /> : <Title>{title}</Title>}
    </Container>
  );
}
