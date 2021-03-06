import { StatusBar} from 'react-native';
import React, { useState } from 'react';
import { Button, PrefButton, Indicator, BackButton } from '../components';
import { Container, StyledText, Box, Images } from '../theme';
import { Pref_3_image } from '../Images'

const Pref_3_country = ({navigation, route}) => {
    const Value1 = route.params.multisliderValue1
    const Value2 = route.params.multisliderValue2
    const [Selected,setSelected] = useState([false,false,false,false,false]);

    return (
        <>
        <StatusBar backgroundColor = '#fff' barStyle = "dark-content"/>
        <Box style = {{height : 60, width : '100%', flexDirection : 'row'}}>
            <Box style = {{height : 70, width : '33%'}}>
                <BackButton onPress = {() => navigation.navigate('diff')} />
            </Box>
            <Box style = {{height : 70, width : '33%', justifyContent : 'flex-end', alignItems : 'center'}}><Indicator page={3}/></Box>
            <Box style = {{height : 70, width : '33%'}}></Box>
        </Box>
        <Container >
            <Box style = {{height : 400, alignItems : 'center'}}>
                <Images source = {Pref_3_image} style = {{width : 245, height : 58, marginBottom : 25}} />
                <StyledText style = {{ fontWeight : 'bold', fontSize : 22, marginBottom : 0, color : '#363636'}}> {Value1}, {Value2} </StyledText>
                <StyledText style = {{ fontWeight : 'bold', fontSize : 22, marginBottom : 0, color : '#363636'}}> 좋아하는 나라 </StyledText>
                <StyledText style = {{ fontWeight : 'bold', fontSize : 22, marginBottom : 0, color : '#363636'}}> 요리를 선택해보세요! </StyledText>
                <StyledText style = {{ fontSize : 12, marginBottom : 20, color : '#ff7300'}}> 중복선택 가능 </StyledText>
                <Box style = {{flexDirection : 'row', justifyContent : 'center', marginBottom : 10}}>
                    <PrefButton title = '한식' onPress = {() => setSelected([!Selected[0],Selected[1],Selected[2],Selected[3],Selected[4]])} isSelected = {Selected[0]}></PrefButton>
                    <PrefButton title = '중식' onPress = {() => setSelected([Selected[0],!Selected[1],Selected[2],Selected[3],Selected[4]])} isSelected = {Selected[1]}></PrefButton>
                    <PrefButton title = '일식' onPress = {() => setSelected([Selected[0],Selected[1],!Selected[2],Selected[3],Selected[4]])} isSelected = {Selected[2]}></PrefButton>
                </Box>
                <Box style = {{flexDirection : 'row', justifyContent : 'center'}}>
                    <PrefButton title = '인도' onPress = {() => setSelected([Selected[0],Selected[1],Selected[2],!Selected[3],Selected[4]])} isSelected = {Selected[3]}></PrefButton>
                    <PrefButton title = '양식' onPress = {() => setSelected([Selected[0],Selected[1],Selected[2],Selected[3],!Selected[4]])} isSelected = {Selected[4]}></PrefButton>
                </Box>
            </Box>
            <Box style = {{ height : 100}}/>
        </Container>
        <Button 
            title = "다음"
            onPress={() => navigation.navigate('spicy', {Value1: Value1, Value2: Value2, Selected: Selected})}
            style = {{ height : 83, width : '100%'}}
            isFinished = {Selected[0]+Selected[1]+Selected[2]+Selected[3]+Selected[4]}
        >
        </Button>
        </>
    );

};

export default Pref_3_country;