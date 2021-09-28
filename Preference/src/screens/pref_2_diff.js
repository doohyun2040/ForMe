import { StatusBar} from 'react-native';
import React, { useState } from 'react';
import { Text,Button, Indicator,BackButton } from '../components';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { Container, StyledText, Box, Images } from '../theme';
import { Pref_2_image } from '../Images'
import styled from 'styled-components/native';

const Circle = styled.View`
 height : 16px;
 width : 16px;
 border-radius : 8px;
 background-color : #ff7300;
`;

const Pref_2_diff = ({navigation, route}) => {
    const multisliderValue1 = route.params.multisliderValue1
    const [multisliderValue2, setMultisliderValue2] = useState([1,5]);
    const multisliderValuesChange = values => setMultisliderValue2(values);

    return (
        <>
        <StatusBar backgroundColor = '#fff' barStyle = "dark-content"/>
        <Box style = {{height : 60, width : '100%', flexDirection : 'row'}}>
            <Box style = {{height : 70, width : '33%'}}>
            <BackButton onPress = {() => navigation.navigate('time')} />
            </Box>
            <Box style = {{height : 70, width : '33%', justifyContent : 'flex-end', alignItems : 'center'}}><Indicator page={2}/></Box>
            <Box style = {{height : 70, width : '33%'}}></Box>
        </Box>
        <Container >
            <Box style = {{height : 400, alignItems : 'center'}}>
                <Images source = {Pref_2_image} style = {{width : 58, height : 54, marginBottom : 24.5}} />
                <StyledText style = {{ fontWeight : 'bold', fontSize : 22, marginBottom : 0, color : '#363636'}}> {multisliderValue1[0]}, {multisliderValue1[1]} </StyledText>
                <StyledText style = {{ fontWeight : 'bold', fontSize : 22, marginBottom : 0, color : '#363636'}}> 어떤 난이도의 </StyledText>
                <StyledText style = {{ fontWeight : 'bold', fontSize : 22, marginBottom : 0, color : '#363636'}}> 요리를 원하시나요? </StyledText>
                <StyledText style = {{ fontSize : 12, marginBottom : 20, color : '#ff7300'}}> 범위선택 </StyledText>
                <MultiSlider
                        values = {[multisliderValue2[0], multisliderValue2[1]]}
                        sliderLength = {250}
                        onValuesChange = {multisliderValuesChange}
                        min = {1}
                        max = {5}
                        step = {1}
                        selectedStyle={{
                            backgroundColor: '#ff7300',
                          }}
                        allowOverlap
                        snapped
                        customMarker = {Circle}
                        >
                </MultiSlider>
                <Box style = {{marginLeft : 5, width : 310, flexDirection : 'row', justifyContent : 'space-evenly'}}>
                <StyledText style = {{ fontSize : 12, fontWeight : 'bold', color : '#707070' }}>라면</StyledText>
                <StyledText style = {{ fontSize : 12, fontWeight : 'bold', color : '#707070' }}>스파게티</StyledText>
                <StyledText style = {{ fontSize : 12, fontWeight : 'bold', color : '#707070' }}>된장찌개</StyledText>
                <StyledText style = {{ fontSize : 12, fontWeight : 'bold', color : '#707070' }}>닭볶음탕</StyledText>
                <StyledText style = {{ fontSize : 12, fontWeight : 'bold', color : '#707070' }}>전부 다</StyledText>
                </Box>    
            </Box>
            <Box style = {{ height : 100}}/>
        </Container>
        <Button 
            title = "다음"
            onPress={() => navigation.navigate('country', {multisliderValue1:multisliderValue1, multisliderValue2: multisliderValue2})}
            style = {{ height : 83, width : '100%'}}
        >
        </Button>
        </>
    );

};

export default Pref_2_diff;