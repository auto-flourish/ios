import React, { Component } from "react";

import { Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Badge,
  Left,
  Right,
  Body,
  Switch,
  Radio,
  Picker,
  Separator
} from "native-base";

import styles from "./styles";

const Item = Picker.Item;

class NHListIcon extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      selectedItem: undefined,
      selected1: "key1",
      results: {
        items: []
      },
      lights: true,
      waterPump: false,
      feedValve: false,
      mixValve: false,
      drainValve: false,
      waterFill: false,
      hvacDamper: false,
      co2: false,
    };
  }

  handleInputChange(event) {
    console.log(event);
    const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const value = !target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>List Icon</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Separator bordered noTopBorder />

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="plane" />
              </Button>
            </Left>
            <Body>
              <Text>Lights</Text>
            </Body>
            <Right>
              <Switch onValueChange={(value) => this.setState({lights: value})} name="lights" value={this.state.lights} onTintColor="#50B948" />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="plane" />
              </Button>
            </Left>
            <Body>
              <Text>Water Pump</Text>
            </Body>
            <Right>
              <Switch name="waterPump" value={this.state.waterPump} onTintColor="#50B948" />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="plane" />
              </Button>
            </Left>
            <Body>
              <Text>Feed Valve</Text>
            </Body>
            <Right>
              <Switch name="feedValve" value={this.state.feedValve} onTintColor="#50B948" />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="plane" />
              </Button>
            </Left>
            <Body>
              <Text>Mix Valve</Text>
            </Body>
            <Right>
              <Switch name="mixValve" value={this.state.mixValve} onTintColor="#50B948" />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="plane" />
              </Button>
            </Left>
            <Body>
              <Text>Drain Valve</Text>
            </Body>
            <Right>
              <Switch name="drainValve" value={this.state.drainValve} onTintColor="#50B948" />
            </Right>
          </ListItem>


          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="plane" />
              </Button>
            </Left>
            <Body>
              <Text>Water Fill</Text>
            </Body>
            <Right>
              <Switch name="waterFill" value={this.state.waterFill} onTintColor="#50B948" />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="plane" />
              </Button>
            </Left>
            <Body>
              <Text>HVAC Damper</Text>
            </Body>
            <Right>
              <Switch name="hvacDamper" value={this.state.hvacDamper} onTintColor="#50B948" />
            </Right>
          </ListItem>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="plane" />
              </Button>
            </Left>
            <Body>
              <Text>CO2</Text>
            </Body>
            <Right>
              <Switch name="co2" value={false} onTintColor="#50B948" />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default NHListIcon;
