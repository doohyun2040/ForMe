import { StatusBar, TouchableWithoutFeedback} from 'react-native';
import React, { useState } from 'react';
import { Button, BackButton } from '../../components';
import { Container, StyledText, Box, Images } from '../../theme';
import styled from 'styled-components/native';
import { PrefSel_1_1, PrefSel_1_2,PrefSel_2_1,PrefSel_2_2 } from '../../Images';

const Circle = styled.View`
 background-color : ${({isSelected}) => (isSelected ? '#ff7300' : 'white')} ;
 justify-content : center;
 align-items : center;
 height : 85px;
 width : 85px;
 border-radius : 43px;
 margin : 10px;
 border : 3px solid ${({isSelected}) => (isSelected ?  '#363636' : '#e2e2e2')};
`;

const Title = styled.Text`
 font-size : 16px;
 font-weight : bold;
 color : ${({isSelected}) => (isSelected ?  '#ff7300' : '#9d9d9d')} ;;
`;

const SelectButton = ({title, onPress, isSelected, style, image_1, image_2, imageSize}) => {
    return (
        <Box style = {{alignItems : 'center', margin : 20}}>
        <TouchableWithoutFeedback onPress={onPress} >
            <Circle style = {style} isSelected ={isSelected}>
                <Images style = {imageSize} source = {isSelected? image_1 : image_2}/>
            </Circle>
        </TouchableWithoutFeedback>
        <Title isSelected ={isSelected}> {title} </Title>
        </Box>
    )
}

const PrefSel = ({navigation}) => {
    const statusbarHeight = StatusBar.currentHeight;
    const [Selected, setSelected] = useState([false,false]);

    return (
        <>
        <Box style = {{height : statusbarHeight}}/>
        <Box style = {{height : 60, width : '100%', flexDirection : 'row'}}>
            <Box style = {{height : 70, width : '33%'}}>
                <BackButton onPress = {() => navigation.navigate('diff')} />
            </Box>
        </Box>
        <Container >
            <StyledText style = {{fontSize : 22, fontWeight : 'bold', color : '#2b2a2a'}} > 정확한 요리 추천을 위해 </StyledText>
            <StyledText style = {{fontSize : 22, fontWeight : 'bold', color : '#2b2a2a'}} > 질문을 받습니다. </StyledText>
        
        <Box style = {{flexDirection : 'row'}}>
            <SelectButton title = '다음에 할래요' onPress = {() => setSelected([!Selected[0], false])} isSelected = {Selected[0]} image_1 = {PrefSel_1_1} image_2 = {PrefSel_1_2} imageSize = {{height : 41, width : 50}} />
            <SelectButton title = '네 해볼게요' onPress = {() => setSelected([false, !Selected[1]])} isSelected = {Selected[1]} image_1 = {PrefSel_2_1} image_2 = {PrefSel_2_2} imageSize = {{height : 39, width : 61, marginTop : 15}}/>
        </Box>
        </Container>
        <Button 
            title = "시작하기"
            title_2 = " "
            onPress={Selected[1]? () => navigation.navigate('time') : () => navigation.navigate('landing')}
            onPress_2 = {() => alert('선택해주세요')}
            style = {{ height : 83, width : '100%'}}
            isFinished = {Selected[0]+Selected[1]}
        >
        </Button>
        </>
    );
}

export default PrefSel