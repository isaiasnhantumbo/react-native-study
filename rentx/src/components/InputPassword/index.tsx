import { Feather } from "@expo/vector-icons";
import React, { ReactNode, useState } from "react";
import { Text, TextInputProps } from "react-native";

import theme from "../../styles/theme";
import {
  ChangePasswordVisibilityButton,
  Container,
  IconContainer,
  InputText,
} from "./styles";

interface InputPasswordProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

export function InputPassword({
  iconName,
  value,
  ...rest
}: InputPasswordProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  function handleSetPasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  function handleInputFocus() {
    setIsFocused(true);
  }
  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }
  return (
    <Container  >
      <IconContainer >
        <Feather name={iconName} size={24} 
         color={
          isFocused || isFilled
            ? theme.colors.main
            : theme.colors.text_detail
        }
     />
      </IconContainer>
      <InputText
        secureTextEntry={isPasswordVisible}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        {...rest}
      />
      <ChangePasswordVisibilityButton onPress={handleSetPasswordVisibility}>
        <IconContainer isFocused={isFocused}>
          <Feather
            name={isPasswordVisible ? "eye" : "eye-off"}
            size={24}
            color={theme.colors.text_detail}
          />
        </IconContainer>
      </ChangePasswordVisibilityButton>
    </Container>
  );
}
