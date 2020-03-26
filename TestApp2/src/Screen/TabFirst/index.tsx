import React from 'react';
import Styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';

import ModalButton from '~/Component/ModalButton';

const Container = Styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #8CD3C5;
  padding-top: 24px;
  padding-bottom: 24px;
`;
const BackContainer = Styled.View`
  width: 80%;
  background-color: #FCFCFC;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 12px;
  border-width: 1px;
  border-color: #DDD;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.3);
`;
const LabelContainer = Styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;
const Label = Styled.Text`
  color: #000;
  font-size: 24px;
`;
const Text = Styled.Text`
  color: #555;
  font-size: 16px;
  padding-left: 8px;
  padding-right: 8px;
`;
const BR:string = '\n';

type NavigationProp = StackNavigationProp<TabFirstStackNaviParamList, 'Modal'>;

interface Props {
  navigation: NavigationProp;
}

const TabFirst = ({navigation}: Props) => {
  return (
    <Container>
      <BackContainer>
        <LabelContainer>
          <Label>회원 정보</Label>
          <ModalButton label="상세 보기" onPress={() => navigation.navigate('Modal')} />
        </LabelContainer>
        <Text>
          김영진
          {BR}
          010-0000-0000
        </Text>
      </BackContainer>
      <BackContainer>
        <LabelContainer>
          <Label>비상연락망</Label>
          <ModalButton label="정보 수정" onPress={() => navigation.navigate('Modal')} />
        </LabelContainer>
      </BackContainer>
      <BackContainer>
        <LabelContainer>
          <Label>의료 정보</Label>
          <ModalButton label="상세 보기" onPress={() => navigation.navigate('Modal')} />
        </LabelContainer>
        <Text>
          병력 : 당뇨
          {BR}
          복용 약 : 인슐린
          {BR}
          수술여부 : 유
        </Text>
      </BackContainer>
      <BackContainer>
        <LabelContainer>
          <Label>손해보험사</Label>
          <ModalButton label="정보 수정" onPress={() => navigation.navigate('Modal')} />
        </LabelContainer>
        <Text>
          OO손해보험
          {BR}
          1588 - 1588
          {BR}
          가입일 : 20XX. XX. XX
          {BR}
          만료일 : 20XX. XX. XX
        </Text>
      </BackContainer>
      {/* <Button label="Open Full Modal" onPress={() => navigation.navigate('FullModal')} /> */}
    </Container>
  );
};

export default TabFirst;
