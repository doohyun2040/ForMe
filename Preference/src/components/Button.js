import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
 background-color : #00becd;
 justify-content : center;
 align-items : center;
 border-radius : 4px;
`;

const Title = styled.Text`
 font-size : 24px;
 color : #ffffff;
`;

const Button = ({title,onPress, style, isFinished}) => {
    return isFinished ? (
        <TouchableOpacity onPress={onPress} >
            <Container style = {style}>
                <Title> {title} </Title>
            </Container>
        </TouchableOpacity>
    ) : (
        <TouchableOpacity onPress={onPress} >
            <Container style = {style, {height : style.height , width : style.width, backgroundColor : '#d5d5d5'}}>
                <Title> 건너뛰기 </Title>
            </Container>
        </TouchableOpacity>
    )
}

Button.defaultProps = {
    isFinished : 1,
}

export default Button;