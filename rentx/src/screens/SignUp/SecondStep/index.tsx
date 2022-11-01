import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { InputPassword } from '../../../components/InputPassword';
import { KeyboardAvoid } from '../../../components/KeyboardAvoid';
import api from '../../../services/api';
import { Container, Form, FormTitle, Header, PasswordInputsWrapper, Steps, Subtitle, Title } from './styles';

interface Params {
  user: {
    name: string;
    email: string;
    driver_license: string;
  };
};

export function SignUpSecondStep() {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const navigation = useNavigation();
  const theme = useTheme();
  const { user } = useRoute().params as Params;
  
  async function handleRegister() {
    if (!password || !confirmPassword) {
      return Alert.alert('Informe a senha e a confirmação');
    };
    if (password != confirmPassword) {
      return Alert.alert('As senhas não são iguais');
    };
    console.log(user);
    
    await api.post('/users', {
      name: user.name,
      email: user.email,
      driver_license: user.driverlicense,
      password,
    }).then(() => {
      navigation.navigate('Confirmation', {
        message: 'Agora é só fazer login\ne aproveitar',
        title: 'Conta criada!',
        nextScreen: 'SignIn',
      });
    }).catch((error) => {
      console.log(error);
      Alert.alert('Opa', 'Não foi possível cadastrar');
    });
  };

  return(
    <KeyboardAvoid>
      <Container>
        <Header>
          <BackButton onPress={() => navigation.goBack()} />
          <Steps>
            <Bullet />
            <Bullet active />
          </Steps>
        </Header>
        <Title>Crie sua{'\n'}conta</Title>
        <Subtitle>Faça seu cadastro de{'\n'}forma rápida e fácil</Subtitle>
        <Form>
          <FormTitle>2. Senha</FormTitle>
          <PasswordInputsWrapper>
            <InputPassword
              iconName='lock'
              onChangeText={setPassword}
              placeholder='Senha'
              value={password}
            />
            <InputPassword
              iconName='lock'
              onChangeText={setConfirmPassword}
              placeholder='Repetir senha'
              value={confirmPassword}
            />
          </PasswordInputsWrapper>
        </Form>
        <Button color={theme.colors.success} title='Cadastrar' onPress={handleRegister} />
      </Container>
    </KeyboardAvoid>
  );
};
