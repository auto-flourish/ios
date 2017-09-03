import React, {Component} from "react";
import {Platform} from "react-native";
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
  Separator,
  Spinner
} from "native-base";

import styles from "./styles";

const Item = Picker.Item;

// OxylusSwitch is a convenience method for switches
class OxylusSwitch extends Component {
  render() {
    var element;
    if (this.props.value.isLoading) {
      element = <Spinner color="grey" />; 
    } else {
      element = <Switch
              name={this.props.value.value}
              onValueChange={this.props.onValueChange}
              value={this.props.value.value}
              onTintColor={this.props.onTintColor}/>;
    }
    return (
      <ListItem icon>
        <Left>
          <Button
            style={{
            backgroundColor: this.props.backgroundColor
          }}>
            <Icon active name={this.props.icon}/>
          </Button>
        </Left>
        <Body>
          <Text>{this.props.text}</Text>
        </Body>
        <Right>
           {element}
        </Right>
      </ListItem>
    )
  }
}

class NHListIcon extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this
      .handleInputChange
      .bind(this);
    this.request = this
      .request
      .bind(this);
    this.state = {
      results: {
        items: []
      },
      lights: {
        value: false,
        isLoading: false
      },
      waterPump: {
        value: false,
        isLoading: false
      },
      feedValve: {
        value: false,
        isLoading: false
      },
      mixValve: {
        value: false,
        isLoading: false
      },
      drainValve: {
        value: false,
        isLoading: false
      },
      waterFill: {
        value: false,
        isLoading: false
      },
      hvacDamper: {
        value: false,
        isLoading: false
      },
      co2: {
        value: false,
        isLoading: false
      }
    };
  }

  request(name, callback) {
    const deviceID = "3c0026000247353137323334";
    const accessToken = "f235b0985b6b46d0b50e3ee93e051dfe1742b201";
    const particleURL = "https://api.particle.io/v1/devices/" + deviceID + "/control";

    var params = {
      "access_token": accessToken,
      "args": name
    };

    const searchParams = Object
      .keys(params)
      .map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      })
      .join('&');

    // fetch(particleURL, {   method: 'POST',   headers: {     'Content-Type':
    // 'application/x-www-form-urlencoded'   },   body: searchParams })

    fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
      return res.json();
    }).then((j) => {
      callback(j, undefined);
    }).catch((err) => {
      callback(undefined, err);
    })
  }
  updateState() {
    const deviceID = "3c0026000247353137323334";
    const accessToken = "f235b0985b6b46d0b50e3ee93e051dfe1742b201";
    const particleURL = "https://api.particle.io/v1/devices/" + deviceID + "/AllState?access_token=" + accessToken;

  }

  // componentDidMount is called when the component is initialized
  componentDidMount() {}

  // handleInputChange is called when the switch is toggled
  handleInputChange(value, name) {
    console.log("value: " + value, " name: " + name);
    // if false then set to false and return
    if (!value) {
      this.setState({[name]: {
        value: value,
        isLoading: false,
      }})
      return
    }
    // else request and handle the callback
    this.setState({[name]: {
      isLoading: true,
    }})

    this.request(name, (res, err) => {
      if (err !== undefined) {
        // bubble up an error to the user
        console.log(err);
        return
      }
      console.log(res);
      this.setState({[name]: {
        value: value,
        isLoading: false,
      }})
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back"/>
            </Button>
          </Left>
          <Body>
            <Title>Manual Control</Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <Separator bordered noTopBorder/>
          <OxylusSwitch
            backgroundColor={"#FF9501"}
            icon={"bulb"}
            text={"Lights"}
            onValueChange={(value) => this.handleInputChange(value, "lights")}
            value={this.state.lights}
            onTintColor={"#50B948"}/>
          <OxylusSwitch
            backgroundColor={"#FF9501"}
            icon={"rainy"}
            text={"Water Pump"}
            onValueChange={(value) => this.handleInputChange(value, "waterPump")}
            value={this.state.waterPump}
            onTintColor={"#50B948"}/>
          <OxylusSwitch
            backgroundColor={"#FF9501"}
            icon={"refresh"}
            text={"Feed Valve"}
            onValueChange={(value) => this.handleInputChange(value, "feedValve")}
            value={this.state.feedValve}
            onTintColor={"#50B948"}/>
          <OxylusSwitch
            backgroundColor={"#FF9501"}
            icon={"refresh"}
            text={"Mix Valve"}
            onValueChange={(value) => this.handleInputChange(value, "mixValve")}
            value={this.state.mixValve}
            onTintColor={"#50B948"}/>
          <OxylusSwitch
            backgroundColor={"#FF9501"}
            icon={"refresh"}
            text={"Drain Valve"}
            onValueChange={(value) => this.handleInputChange(value, "drainValve")}
            value={this.state.drainValve}
            onTintColor={"#50B948"}/>
          <OxylusSwitch
            backgroundColor={"#FF9501"}
            icon={"refresh"}
            text={"Water Fill"}
            onValueChange={(value) => this.handleInputChange(value, "waterFill")}
            value={this.state.waterFill}
            onTintColor={"#50B948"}/>
          <OxylusSwitch
            backgroundColor={"#FF9501"}
            icon={"refresh"}
            text={"HVAC Damper"}
            onValueChange={(value) => this.handleInputChange(value, "hvacDamper")}
            value={this.state.hvacDamper}
            onTintColor={"#50B948"}/>
          <OxylusSwitch
            backgroundColor={"#FF9501"}
            icon={"refresh"}
            text={"CO2"}
            onValueChange={(value) => this.handleInputChange(value, "co2")}
            value={this.state.co2}
            onTintColor={"#50B948"}/>
        </Content>
      </Container>
    );
  }
}

export default NHListIcon;
