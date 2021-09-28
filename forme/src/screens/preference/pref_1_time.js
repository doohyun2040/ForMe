import { StatusBar} from 'react-native';
import React, { useState } from 'react';
import { Button, Indicator, BackButton } from '../../components';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { Container, StyledText, Box, Images } from '../../theme';
import { Pref_1_image } from '../../Images'
import styled from 'styled-components/native';

const Circle = styled.View`
 height : 16px;
 width : 16px;
 border-radius : 8px;
 background-color : #ff7300;
`;

const Pref_1_time = ({navigation, route}) => {
    const email = route.params.email;
    const password = route.params.password;
    const [multisliderValue, setMultisliderValue] = useState([1,5]);
    const multisliderValuesChange = values => setMultisliderValue(values);
    const statusbarHeight = StatusBar.currentHeight;

    return (
        <>
        <Box style = {{height : statusbarHeight}}/>
        <Box style = {{height : 60, width : '100%', flexDirection : 'row'}}>
            <Box style = {{height : 70, width : '33%'}}>
                <BackButton onPress = {() => navigation.navigate('PrefSel',{email: email, password: password})} />
            </Box>
            <Box style = {{height : 70, width : '33%', justifyContent : 'flex-end', alignItems : 'center'}}><Indicator page={1}/></Box>
            <Box style = {{height : 70, width : '33%'}}></Box>
        </Box>
        <Container >
            <Box style = {{height : 400, alignItems : 'center'}}>
                <Images source = {Pref_1_image} style = {{width : 64.6, height : 61.5, marginBottom : 24.5}} />
                <StyledText style = {{ fontWeight : 'bold', fontSize : 22, marginBottom : 0, color : '#363636'}}> 요리 시간이 </StyledText>
                <StyledText style = {{ fontWeight : 'bold', fontSize : 22, marginBottom : 0, color : '#363636'}}> 얼만큼 걸리면 좋을까요? </StyledText>
                <StyledText style = {{ fontSize : 12, marginBottom : 20, color : '#ff7300'}}> 범위선택 </StyledText>
                <MultiSlider
                        values = {[multisliderValue[0], multisliderValue[1]]}
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
                <Box style = {{width : 320, flexDirection : 'row', justifyContent : 'space-evenly'}}>
                <StyledText style = {{ fontSize : 12, fontWeight : 'bold', color : '#707070' }}>5분  </StyledText>
                <StyledText style = {{ fontSize : 12, fontWeight : 'bold', color : '#707070' }}>10분 </StyledText>
                <StyledText style = {{ fontSize : 12, fontWeight : 'bold', color : '#707070' }}>20분 </StyledText>
                <StyledText style = {{ fontSize : 12, fontWeight : 'bold', color : '#707070' }}>30분 </StyledText>
                <StyledText style = {{ fontSize : 12, fontWeight : 'bold', color : '#707070' }}>전부 다</StyledText>
                </Box>
            </Box>
            <Box style = {{ height : 100}}/>
        </Container>
        <Button 
            title = "다음"
            onPress={() => navigation.navigate('diff', {email: email, password: password, time: multisliderValue})}
            style = {{ height : 83, width : '100%'}}
        >
        </Button>
        </>
    );

};

export default Pref_1_time;