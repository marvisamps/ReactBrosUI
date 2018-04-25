import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

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

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render(){
        return (
            <Container>
                <WelcomeText>Welcome to Home Screen!</WelcomeText>
                <Button
                    title="Go to Test"
                    onPress={() => this.props.navigation.navigate('Test')}
                />
            </Container>
        );
    }
}

export default HomeScreen;
