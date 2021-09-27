import { StatusBar ,Text} from 'react-native';
import React, { useState } from 'react';
import { Button, PrefButton, Indicator, BackButton } from '../../components';
import { Container, StyledText, Box, Images } from '../../theme';
import { Pref_4_image } from '../../Images'

const Pref_4_spicy = ({navigation}) => {
    const [Selected,setSelected] = useState([false,false,false,false]);
    const statusbarHeight = StatusBar.currentHeight;

    return (
        <>
        <Box style = {{height : statusbarHeight}}/>
        <Box style = {{height : 60, width : '100%', flexDirection : 'row'}}>
            <Box style = {{height : 70, width : '33%'}}>
                <BackButton onPress = {() => navigation.navigate('country')} />
            </Box>
            <Box style = {{height : 70, width : '33%', justifyContent : 'flex-end', alignItems : 'center'}}><Indicator page={4}/></Box>
            <Box style = {{height : 70, width : '33%'}}></Box>
        </Box>
        <Container >
            <Box style = {{height: 400, alignItems : 'center'}}>
                <Images source = {Pref_4_image} style = {{width : 52, height : 62, marginBottom : 24.5}} />
                <StyledText style = {{ fontWeight : 'bold', fontSize : 22, marginBottom : 0, color : '#363636'}}> 평소 버티는 맵기를 </StyledText>
                <StyledText style = {{ fontWeight : 'bold', fontSize : 22, marginBottom : 0, color : '#363636'}}> 선택해주세요! </StyledText>
                <StyledText style = {{ fontSize : 12, marginBottom : 20, color : '#ff7300'}}>  </StyledText>
                <Box style = {{width : '100%', flexDirection : 'row', justifyContent : 'space-evenly'}}>
                    <PrefButton title = '아기' onPress = {() => setSelected([!Selected[0],Selected[1],Selected[2],Selected[3]])} isSelected = {Selected[0]}></PrefButton>
                    <PrefButton title = '1단계' onPress = {() => setSelected([Selected[0],!Selected[1],Selected[2],Selected[3]])} isSelected = {Selected[1]}></PrefButton>
                </Box>
                <Box style = {{width : '100%', flexDirection : 'row', justifyContent : 'space-evenly'}}>
                    <Text style = {{width : 100, fontSize : 16, fontWeight : 'bold', color : '#707070', textAlign : 'center'}}>맵찔이</Text>
                    <Text style = {{width : 100, fontSize : 16, fontWeight : 'bold', color : '#707070', textAlign : 'center'}}>신라면</Text>
                </Box>
                <Box style = {{width : '100%', flexDirection : 'row', justifyContent : 'space-evenly'}}>
                    <PrefButton title = '2단계' onPress = {() => setSelected([Selected[0],Selected[1],!Selected[2],Selected[3]])} isSelected = {Selected[2]}></PrefButton>
                    <PrefButton title = '마스터' onPress = {() => setSelected([Selected[0],Selected[1],Selected[2],!Selected[3]])} isSelected = {Selected[3]}></PrefButton>
                </Box>
                <Box style = {{width : '100%', flexDirection : 'row', justifyContent : 'space-evenly'}}>
                    <Text style = {{width : 100, fontSize : 16, fontWeight : 'bold', color : '#707070', textAlign : 'center'}}>불닭</Text>
                    <Text style = {{width : 100, fontSize : 16, fontWeight : 'bold', color : '#707070', textAlign : 'center'}}>다 가능</Text>
                </Box>
            </Box>
            <Box style = {{ height : 100}}/>
        </Container>
        <Button 
            title = "다음"
            onPress={() => navigation.navigate('pref')}
            style = {{ height : 83, width : '100%'}}
            isFinished = {Selected[0]+Selected[1]+Selected[2]+Selected[3]}
        >
        </Button>
        </>
    );

};

export default Pref_4_spicy;