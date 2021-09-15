import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
 background-color : ${({isSelected}) => (isSelected ? '#ff7300' : 'white')} ;
 justify-content : center;
 align-items : center;
 height : 85px;
 width : 85px;
 border-radius : 43px;
 margin : 10px;
 border : 3px solid ${({isSelected}) => (isSelected ?  '#707070' : '#e2e2e2')};
`;

const Title = styled.Text`
 font-size : 16px;
 font-weight : bold;
 color : ${({isSelected}) => (isSelected ?  'white' : '#9d9d9d')} ;;
`;

const PrefButton = ({title, onPress, isSelected, style}) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <Container style = {style} isSelected ={isSelected}>
                <Title isSelected ={isSelected}> {title} </Title>
            </Container>
        </TouchableOpacity>
    )
}

export default PrefButton;