import { StatusBar} from 'react-native';
import React, { useState } from 'react';
import { Button, PrefButton, Indicator, BackButton } from '../components';
import { Container, StyledText, Box, Images } from '../theme';
import { Pref_5_image } from '../Images'

const Pref_5_pref = ({navigation}) => {
    const [Selected,setSelected] = useState([false,false,false,false,false,false,false,false,false]);
    
    return (

        <>
        <StatusBar backgroundColor = '#fff' barStyle = "dark-content"/>
        <Box style = {{height : 60, width : '100%', flexDirection : 'row'}}>
            <Box style = {{height : 70, width : '33%'}}>
                <BackButton onPress = {() => navigation.navigate('spicy')} />
            </Box>
            <Box style = {{height : 70, width : '33%', justifyContent : 'flex-end', alignItems : 'center'}}><Indicator page={5}/></Box>
            <Box style = {{height : 70, width : '33%'}}></Box>
        </Box>
        <Container >
            <Box style = {{height: 400, alignItems : 'center'}}>
                <Images source = {Pref_5_image} style = {{width : 177, height : 49, marginBottom : 24.5}} />
                <StyledText style = {{ fontWeight : 'bold', fontSize : 22, marginBottom : 0, color : '#363636'}}> 선호하는 재료를 </StyledText>
                <StyledText style = {{ fontWeight : 'bold', fontSize : 22, marginBottom : 0, color : '#363636'}}> 선택해주세요! </StyledText>
                <StyledText style = {{ fontSize : 12, marginBottom : 20, color : '#ff7300'}}> 중복선택 가능 </StyledText>
                <Box style = {{flexDirection : 'row', justifyContent : 'center', marginBottom : 10}}>
                    <PrefButton title = '닭고기' onPress = {() => setSelected([!Selected[0],Selected[1],Selected[2],Selected[3],Selected[4],Selected[5],Selected[6],Selected[7],Selected[8]])} isSelected = {Selected[0]}></PrefButton>
                    <PrefButton title = '돼지고기' onPress = {() => setSelected([Selected[0],!Selected[1],Selected[2],Selected[3],Selected[4],Selected[5],Selected[6],Selected[7],Selected[8]])} isSelected = {Selected[1]}></PrefButton>
                    <PrefButton title = '계란' onPress = {() => setSelected([Selected[0],Selected[1],!Selected[2],Selected[3],Selected[4],Selected[5],Selected[6],Selected[7],Selected[8]])} isSelected = {Selected[2]}></PrefButton>
                </Box>
                <Box style = {{flexDirection : 'row', justifyContent : 'center', marginBottom : 10}}>
                    <PrefButton title = '김치' onPress = {() => setSelected([Selected[0],Selected[1],Selected[2],!Selected[3],Selected[4],Selected[5],Selected[6],Selected[7],Selected[8]])} isSelected = {Selected[3]}></PrefButton>
                    <PrefButton title = '마늘' onPress = {() => setSelected([Selected[0],Selected[1],Selected[2],Selected[3],!Selected[4],Selected[5],Selected[6],Selected[7],Selected[8]])} isSelected = {Selected[4]}></PrefButton>
                    <PrefButton title = '양파' onPress = {() => setSelected([Selected[0],Selected[1],Selected[2],Selected[3],Selected[4],!Selected[5],Selected[6],Selected[7],Selected[8]])} isSelected = {Selected[5]}></PrefButton>
                </Box>
                <Box style = {{flexDirection : 'row', justifyContent : 'center', marginBottom : 10}}>
                    <PrefButton title = '참치' onPress = {() => setSelected([Selected[0],Selected[1],Selected[2],Selected[3],Selected[4],Selected[5],!Selected[6],Selected[7],Selected[8]])} isSelected = {Selected[6]}></PrefButton>
                    <PrefButton title = '스팸' onPress = {() => setSelected([Selected[0],Selected[1],Selected[2],Selected[3],Selected[4],Selected[5],Selected[6],!Selected[7],Selected[8]])} isSelected = {Selected[7]}></PrefButton>
                    <PrefButton title = '라면' onPress = {() => setSelected([Selected[0],Selected[1],Selected[2],Selected[3],Selected[4],Selected[5],Selected[6],Selected[7],!Selected[8]])} isSelected = {Selected[8]}></PrefButton>
                </Box>
            </Box>
            <Box style = {{ height : 100}}/>
        </Container>
        <Button 
            title = "다음"
            onPress={() => navigation.navigate('time')}
            style = {{ height : 83, width : '100%'}}
            isFinished = {Selected[0]+Selected[1]+Selected[2]+Selected[3]+Selected[4]+Selected[5]+Selected[6]+Selected[7]+Selected[8]}
        >
        </Button>
        </>
    );

};

export default Pref_5_pref;