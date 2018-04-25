import React from 'react';
import { Platform, View } from 'react-native';
import styled, { css } from 'styled-components/native';

const Main = styled.View`
  justify-content: center;
  align-items: center;
`;

const ContainerIcon = styled.TouchableHighlight`
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: gray;
  border-radius: 50px;
  height: 30px;
  width: 30px;
  margin: 3px auto;
`;

const TooltipIcon = styled.Text`
  ${Platform.select({ios: css`line-height: 15px`})};
  ${Platform.select({android: css`margin-bottom: 2px` })};
  font-size: 20;
  text-align: center;
  padding: 10px;
  color: white;
`;

const Content = styled.View`
  position: relative;
  background: black;
  border-radius: 5;
  margin: 0 auto;
`;

const ContentLeft = Content.extend`
  position: absolute;
  right: 40px;
  top: -34px;
  width: 150px;
`;

const ContentRight = Content.extend`
  position: absolute;
  left: 40px;
  top: -34px;
  width: 150px;
`;

const ContentText = styled.Text`
  font-family: 'Open Sans';
  font-size: 14px;
  text-align: center;
  padding: 10px;
  color: white;
`;

const Arrow = styled.View`
  position: relative;
  width: 0; 
  height: 0; 
  border-style: solid;
  border-left-width: 8px;
  border-left-color: transparent;
  border-right-width: 8px;
  border-right-color: transparent;
  border-top-width: 8px;
  margin: -1px auto 0;
`;

const ArrowDown = Arrow.extend`
  border-bottom-width: 8px;
  border-top-width: 0;
`;

const ArrowLeft = Arrow.extend`
  position: absolute;
  border-left-width: 8px;
  border-left-color: black;
  border-right-width: 0;
  border-bottom-width: 8px;
  border-bottom-color: transparent;
  border-top-color: transparent;
  right: 33px;
  margin-top: -24px;
`;

const ArrowRight = Arrow.extend`
  position: absolute;
  border-left-width: 0;
  border-right-color: black;
  border-bottom-width: 8px;
  border-bottom-color: transparent;
  border-top-color: transparent;
  left: 32px;
  margin-top: -24px;
`;

class Tooltip extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            tooltipContent: false
        }
    }

    showTooltip = () => {
        this.setState({ tooltipContent: !this.state.tooltipContent});
    };

    render(){
        return (
            <Main side={this.props.side}>
                {this.props.side === 'up' &&
                <View>
                    {this.state.tooltipContent  &&
                    <View>
                        <Content>
                            <ContentText>{this.props.text}</ContentText>
                        </Content>
                        <Arrow/>
                    </View>
                    }
                    <ContainerIcon onPress={this.showTooltip}>
                        <TooltipIcon>i</TooltipIcon>
                    </ContainerIcon>
                </View>
                }
                {this.props.side === 'down' &&
                <View>
                    <ContainerIcon onPress={this.showTooltip}>
                        <TooltipIcon>i</TooltipIcon>
                    </ContainerIcon>
                    {this.state.tooltipContent  &&
                    <View>
                        <ArrowDown/>
                        <Content>
                            <ContentText>{this.props.text}</ContentText>
                        </Content>
                    </View>
                    }
                </View>
                }
                {this.props.side === 'left' &&
                <View>
                    <ContainerIcon onPress={this.showTooltip}>
                        <TooltipIcon>i</TooltipIcon>
                    </ContainerIcon>
                    {this.state.tooltipContent  &&
                    <View>
                        <ContentLeft>
                            <ContentText>{this.props.text}</ContentText>
                        </ContentLeft>
                        <ArrowLeft />
                    </View>
                    }
                </View>
                }
                {this.props.side === 'right' &&
                <View>
                    <ContainerIcon onPress={this.showTooltip}>
                        <TooltipIcon>i</TooltipIcon>
                    </ContainerIcon>
                    {this.state.tooltipContent  &&
                    <View>
                        <ArrowRight/>
                        <ContentRight>
                            <ContentText>{this.props.text}</ContentText>
                        </ContentRight>
                    </View>
                    }
                </View>
                }
            </Main>
        );
    }
}

export default Tooltip;
