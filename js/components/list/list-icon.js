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
    this.request = this.request.bind(this);
    this.state = {
      selectedItem: undefined,
      selected1: "key1",
      results: {
        items: []
      },
      lights:false,
      waterPump: false,
      feedValve: false,
      mixValve: false,
      drainValve: false,
      waterFill: false,
      hvacDamper: false,
      co2: false,
    };
  }

  request(name) {
    const deviceID = "3c0026000247353137323334";
    const accessToken = "f235b0985b6b46d0b50e3ee93e051dfe1742b201";
    const particleURL = "https://api.particle.io/v1/devices/" + deviceID + "/control";

    var headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    var params = {
      "access_token": accessToken,
      "args": name,
    };

    const searchParams = Object.keys(params).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&');
    
    fetch(particleURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: searchParams
    })

    var settings = {
      method: "POST",
      body: searchParams,
    };

    fetch(particleURL, settings).then((res) => {
      return res.json();
    }).then((j) => {
      // probably dont need to prin the json
      console.log(j)
    })
  }
  // handleInputChange is called when the switch is toggled
  handleInputChange(value, name) {
    this.request(name);
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
              <Switch onValueChange={(value) => this.handleInputChange(value, "lights")} value={this.state.lights} onTintColor="#50B948" />
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
              <Switch onValueChange={(value) => this.handleInputChange(value, "waterPump")} value={this.state.waterPump} onTintColor="#50B948" />
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
              <Switch onValueChange={(value) => this.handleInputChange(value, "feedValve")} value={this.state.feedValve} onTintColor="#50B948" />
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
              <Switch onValueChange={(value) => this.handleInputChange(value, "mixValve")} value={this.state.mixValve} onTintColor="#50B948" />
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
              <Switch onValueChange={(value) => this.handleInputChange(value, "drainValve")} value={this.state.drainValve} onTintColor="#50B948" />
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
              <Switch onValueChange={(value) => this.handleInputChange(value, "waterFill")} value={this.state.waterFill} onTintColor="#50B948" />
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
              <Switch onValueChange={(value) => this.handleInputChange(value, "hvacDamper")} value={this.state.hvacDamper} onTintColor="#50B948" />
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
              <Switch onValueChange={(value) => this.handleInputChange(value, "co2")} value={false} onTintColor="#50B948" />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default NHListIcon;
