import { useNavigation } from "@react-navigation/native";
import { ReactNode, useState } from "react";
import { Alert, StatusBar, Text } from "react-native";
import * as Yup from "yup";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { KeyboardAvoid } from "../../components/KeyboardAvoid";
import { useAuth } from "../../hooks/useAuth";
import theme from "../../styles/theme";
import { Container, Footer, Form, Header, Subtitle, Title } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const {signIn} = useAuth()
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("E-mail obrigatório")
      .email("Digite um email valido"),
    password: Yup.string().required("A senha e' obrigatório"),
  });

  async function handleSignIn() {
    try {
      await schema.validate({ email, password });
      
      signIn({ email, password });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Eitaa", error.message);
      } else {
        Alert.alert(
          "Error na autenticação",
          "Ocorreu um erro ao fazer login, verifiquei as credenciais"
        );
      }
    }
  }
  function handleCreateAccount() {
    navigation.navigate('SignUpFistStep')
  }
  return (
    <KeyboardAvoid>
      <Container>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Header>
          <Title>Estamos{"\n"}quase lá.</Title>
          <Subtitle>
            Faça seu login para começar{"\n"}uma experiência incrível.
          </Subtitle>
        </Header>
        <Form>
          <Input
            iconName="mail"
            placeholder="E-mail"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />
          <InputPassword
            iconName="lock"
            placeholder="Senha"
            onChangeText={setPassword}
            value={password}
          />
        </Form>
        <Footer>
          <Button title="Login" onPress={handleSignIn} isLoading={false} />
          <Button
            title="Criar conta gratuita"
            onPress={handleCreateAccount}
            isLoading={false}
            color={theme.colors.background_secondary}
            light
          />
        </Footer>
      </Container>
    </KeyboardAvoid>
  );
}
