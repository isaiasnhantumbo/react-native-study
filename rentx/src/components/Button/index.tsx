import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";

import { Loader } from "../Loader";
import { Container, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
  light?: boolean;
  enabled?: boolean;
  isLoading?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  isLoading = false,
  light = false,
  enabled = true,
}: ButtonProps) {
  const theme = useTheme();
  return (
    <Container
      color={color ? color : theme.colors.main}
      onPress={onPress}
      enabled={enabled}
      style={{ opacity: enabled === false || isLoading === true ? 0.5 : 1 }}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.colors.shape} />
      ) : (
        <Title light={light}>{title}</Title>
      )}
    </Container>
  );
}
