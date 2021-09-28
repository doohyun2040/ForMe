import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { Back } from '../Images';

//Button's fixed pixel
const Icon = styled.Image`
 width : 49px;
 height : 49px;
 margin : 16px;
`;

const BackButton = ({icon, onPress, item}) => {

    return (
        <TouchableOpacity onPress = {onPress}>
            <View>
                <Icon source = {Back} >
                </Icon>
            </View>
        </TouchableOpacity>
    );
}



export default BackButton