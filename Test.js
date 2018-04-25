import React from 'react';
import styled from 'styled-components/native';
import Tooltip from './utils/Tooltip';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
  padding: 15px;
`;

const WelcomeText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: black;
`;

class TestScreen extends React.Component {
    static navigationOptions = {
        title: 'Test',
    };

    render(){
        return (
            <Container>
                <WelcomeText>This is a tooltip. Try it out!</WelcomeText>
                <Tooltip side='up' text='Content of the tooltip when clicked... It can be a veeeeery long text, it doesnt matter :)' />
            </Container>
        );
    }
}

export default TestScreen;
