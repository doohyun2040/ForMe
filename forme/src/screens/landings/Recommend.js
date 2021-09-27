import React from 'react';
import { ScrollView, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Container, StyledText, Box, Images } from '../../theme';

const Recommend = ({width}) => {
    return(
        <ScrollView  horizontal showsHorizontalScrollIndicator={false} pagingEnabled = {true}>

            <TouchableWithoutFeedback onPress = {()=> alert('1')}>
                <View style = {{ backgroundColor : 'red', width:width, height :width+20, alignItems : 'center', justifyContent : 'flex-end'}}>
                    <StyledText style = {{marginBottom : 0, fontSize : 20, fontWeight : 'bold', color : '#ffffff'}}> 요리이름 </StyledText>
                    <StyledText style = {{marginBottom : 25, width : 50, height : 20, borderRadius : 10, backgroundColor : '#ffffff', fontSize : 15, fontWeight : 'bold', textAlign : 'center'}}> 1
                    <StyledText style = {{fontSize : 15, fontWeight : 'normal'}}>/3</StyledText>                        
                    </StyledText>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress = {()=> alert('2')}>
                <View style = {{ backgroundColor : 'green',width:width, height :width+20, alignItems : 'center', justifyContent : 'flex-end'}}>
                    <StyledText style = {{marginBottom : 0, fontSize : 20, fontWeight : 'bold', color : '#ffffff'}}> 요리이름 </StyledText>
                    <StyledText style = {{marginBottom : 25, width : 50, height : 20, borderRadius : 10, backgroundColor : '#ffffff', fontSize : 15, fontWeight : 'bold', textAlign : 'center'}}> 2
                    <StyledText style = {{fontSize : 15, fontWeight : 'normal'}}>/3</StyledText>
                    </StyledText>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress = {()=> alert('3')}>
                <View style = {{ backgroundColor : 'blue',width:width, height :width+20, alignItems : 'center', justifyContent : 'flex-end'}}>
                    <StyledText style = {{marginBottom : 0, fontSize : 20, fontWeight : 'bold', color : '#ffffff'}}> 요리이름 </StyledText>
                    <StyledText style = {{marginBottom : 25, width : 50, height : 20, borderRadius : 10, backgroundColor : '#ffffff', fontSize : 15, fontWeight : 'bold', textAlign : 'center'}}> 3
                    <StyledText style = {{fontSize : 15, fontWeight : 'normal'}}>/3</StyledText>
                    </StyledText>
                </View>
            </TouchableWithoutFeedback>

        </ScrollView>
    )
}

export default Recommend