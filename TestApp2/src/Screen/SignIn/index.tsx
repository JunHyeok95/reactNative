import React, {useContext} from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {UserContext} from '~/Context/User';
import Button from '~/Component/Button';
import Input from '~/Component/Input';

//https://oblador.github.io/react-native-vector-icons/
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Platform} from 'react-native';

const TouchableWithoutFeedback = Styled.TouchableWithoutFeedback``;
const Container = Styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #8CD3C5;
  justify-content: center;
  align-items: center;
`;
const FormContainer = Styled.View`
  width: 80%;
  height: 200px;
  justify-content: center;
  align-items: center;
`;
const ButtonContainer = Styled.View`
  flex: 1;
  flex-direction: row;
`;
const ImageContainer = Styled.View`
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;
const Image = Styled.Image``;
const IconContainer = Styled.View`
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;
const ButtonMargin = Styled.View`
  width: 16px;
`;

import {PermissionsAndroid} from "react-native";
const requestPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "App GPS Permission",
        message:
          "App needs access to your GPS ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the GPS");
    } else {
      console.log("GPS permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

type NavigationProp = StackNavigationProp<LoginStackNaviParamList, 'SignIn'>;

interface Props {
  navigation: NavigationProp;
}

import {Keyboard} from "react-native";

const SignIn = ({navigation}: Props) => {
  const {login} = useContext<IUserContext>(UserContext);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container behavior={Platform.OS == "ios" ? "padding" : "height"}>
        <ImageContainer>
          <Image source={require('~/Assets/Images/kuru.png')} />
        </ImageContainer>
        <IconContainer>
          <Icon name="account-circle" color={'#888'} size={200} />
        </IconContainer>
        <FormContainer>
          <Input
            style={{ marginBottom: 8 }}
            placeholder={'이메일'}
            keyboardType={'email-address'}
          />
          <Input
            style={{ marginBottom: 8 }}
            secureTextEntry={true}
            placeholder={'비밀번호'}
          />
          <Button
            // label="Sign In"
            style={{ marginBottom: 8 }}
            label="로그인"
            onPress={() => login('WDJ@YJU', 'password')} // 이 동작이 setUserInfo 실행 -> NavigationContainer 의 함수로 인해서 MainNavi 스택으로 이동
            />
          <ButtonContainer>
            <Button
              label="회원가입"
              onPress={() => navigation.navigate('SignUp')}
            />
            <ButtonMargin />
            <Button
              label="비밀번호 재설정"
              onPress={() => navigation.navigate('ResetPassword')}
            />
          </ButtonContainer>
        </FormContainer>
        <Button
            // label="Sign In"
            style={{ marginBottom: 8 }}
            label="블루투스"
            onPress={() => requestPermission()}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;