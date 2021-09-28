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

const Button = ({title,onPress, onPress_2, style, isFinished, title_2}) => {
    {onPress_2 ? (onPress_2 = onPress_2) : (onPress_2 = onPress)}
    return isFinished ? (
        <TouchableOpacity onPress={onPress} >
            <Container style = {style}>
                <Title> {title} </Title>
            </Container>
        </TouchableOpacity>
    ) : (
        <TouchableOpacity onPress={onPress_2} >
            <Container style = {style, {height : style.height , width : style.width, backgroundColor : '#d5d5d5'}}>
                <Title> {title_2} </Title>
            </Container>
        </TouchableOpacity>
    )
}

Button.defaultProps = {
    isFinished : 1,
    title_2 : '건너뛰기',
}

export default Button;