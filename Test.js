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
  font-family: 'Open Sans';
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: black;
`;

const ExplanationText = styled.Text`
  font-family: 'Open Sans';
  font-size: 13px;
  text-align: center;
  margin: 10px;
  color: blue;
`;

class TestScreen extends React.Component {
    static navigationOptions = {
        title: 'Test',
    };

    render(){
        return (
            <Container>
                <WelcomeText>This is a tooltip. Try it out!</WelcomeText>
                <ExplanationText>Pass one of these values ("down", "up", "left", "right") on the side attribute to see the magic! The default value is: "down".</ExplanationText>
                <Tooltip side="down" text="Content of the tooltip when clicked/pressed... It can be a veeeeery long text, it doesn't matter :)" />
            </Container>
        );
    }
}

export default TestScreen;
