import React from 'react';
import { ScrollView, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, StyledText, Box, Images } from '../../theme';
import Recommend from './Recommend';

const landing = () => {
    const width = Dimensions.get('window').width;

    return(
        <Container>
            <ScrollView>
                
                <Recommend width = {width}/>
                
                <StyledText style = {{fontSize : 20, width: 310, height : 40, marginLeft : 25, marginRight : 25, marginTop : 20}}> 추천 요리 </StyledText>
                <Box style = {{height : 400, width : 400}}/>

                <StyledText style = {{fontSize : 20, fontWeight : 'bold', color : '#ff7300', marginLeft : 25}} > 10분 컷 
                <StyledText style = {{fontSize : 20, fontWeight : 'bold',color : '#363636'}} > 레시피 </StyledText> 
                </StyledText>

                <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                    <View style = {{ borderWidth:2, width:width-60, height :width-110,  marginLeft : 25, marginRight : 20}}/>
                    <View style = {{ borderWidth:2, width:width-60, height :width-110,  marginRight : 20}}/>
                    <View style = {{ borderWidth:2, width:width-60, height :width-110,  marginRight : 20}}/>
                </ScrollView>
                
                <StyledText style = {{fontSize : 20, fontWeight : 'bold', color : '#ff7300', marginTop : 40, marginLeft : 25}} > 편의점 
                <StyledText style = {{fontSize : 20, fontWeight : 'bold',color : '#363636'}} > 조합 레시피 </StyledText> 
                </StyledText>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style = {{ borderWidth:2, width:width-60, height :width-110,  marginLeft : 25, marginRight : 20}}/>
                    <View style = {{ borderWidth:2, width:width-60, height :width-110,  marginRight : 20}}/>
                    <View style = {{ borderWidth:2, width:width-60, height :width-110,  marginRight : 20}}/>
                </ScrollView>

                <StyledText style = {{fontSize : 20, fontWeight : 'bold', color : '#363636', marginTop : 40, marginLeft : 25}} > 커뮤니티 
                <StyledText style = {{fontSize : 20, fontWeight : 'bold',color : '#ff7300'}} > HOT </StyledText>
                <StyledText style = {{fontSize : 20, fontWeight : 'bold',color : '#363636'}} > 게시글 </StyledText>
                </StyledText>

                <Box style = {{height : 400, width : 400}}/>

                <StyledText style = {{fontSize : 20, fontWeight : 'bold', color : '#ff7300', marginLeft : 25}} > 건강식 
                <StyledText style = {{fontSize : 20, fontWeight : 'bold',color : '#363636'}} > 추천 </StyledText>
                </StyledText> 

                <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                    <View style = {{ borderWidth:2, width:width-160, height :width-190,  marginLeft : 25, marginRight : 20}}/>
                    <View style = {{ borderWidth:2, width:width-160, height :width-190,  marginRight : 20}}/>
                    <View style = {{ borderWidth:2, width:width-160, height :width-190,  marginRight : 20}}/>
                </ScrollView>

            </ScrollView>
        </Container>
    )
}

export default landing