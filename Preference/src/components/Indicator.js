import React from 'react';
import styled from 'styled-components/native';

const Circle = styled.View`
 height : 16px;
 width : 16px;
 border-radius : 8px;
 background-color : #e2e2e2;
`;

const Bar = styled.View`
 width : 10px;
 height : 2px;
 background-color : #e2e2e2;
`;

const Box = styled.View`
 margin : 10px;
`;

const Indicator = ({page}) => {
    return(
        <Box style = {{ flexDirection : 'row', alignItems : 'center', marginBottom : 20}} >
            <Circle style = {(page==1) ? {backgroundColor : '#ff7300'} : {backgroundColor : '#e2e2e2'}}/><Bar/>
            <Circle style = {(page==2) ? {backgroundColor : '#ff7300'} : {backgroundColor : '#e2e2e2'}}/><Bar/>
            <Circle style = {(page==3) ? {backgroundColor : '#ff7300'} : {backgroundColor : '#e2e2e2'}}/><Bar/>
            <Circle style = {(page==4) ? {backgroundColor : '#ff7300'} : {backgroundColor : '#e2e2e2'}}/><Bar/>
            <Circle style = {(page==5) ? {backgroundColor : '#ff7300'} : {backgroundColor : '#e2e2e2'}}/>
        </Box>
    )
}

export default Indicator;