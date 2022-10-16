import React from "react";
import { SvgProps } from "react-native-svg";

import { Container, Name } from "./styles";

interface AccessoryProps {
  accessoryName: string;
  icon: React.FC<SvgProps>;
}

export function Accessory({ accessoryName, icon: Icon }: AccessoryProps) {
  return (
    <Container>
      <Icon width={32} height={32} />
      <Name>{accessoryName}</Name>
    </Container>
  );
}
