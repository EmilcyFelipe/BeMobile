import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: #fff;
  padding: 0 5%;
`;

export const HeaderBanner = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
export const PictureWrapper = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;
export const UserPicture = styled.Image`
  width: 100%;
  height: 100%;
`;
export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
  font-family: Arial;
`;

export const Description = styled.View`
  width: 100%;
  background-color: #fff;
  padding: 40px 20px;
`;
export const DescriptionItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-style: dotted;
  border-color: #dfdfdf;
  border-bottom-width: 2px;
  margin-top: 10px;
`;
export const Label = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;
export const Value = styled.Text`
  font-size: 16px;
  color: #000;
`;
