import React, {Component} from "react";
import {Platform} from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  Picker,
  Form,
  View,
  H3,
  Item as FormItem
} from "native-base";

import styles from "./styles";

const Item = Picker.Item;

class RegularPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1",
      users: [
        {
          uuid: "select",
          firstName: "",
          lastName: ""
        }
      ]
    };
  }

  componentDidMount() {
    // fetch("http://localhost:1323/users").then((res) => {
    //   return res.json();
    // }).then((j) => {
    //   this.setState({users: j})
    // })
  }

  onValueChange(value : string) {
    this.setState({selected1: value});
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
          <Body style={{
            flex: 3
          }}>
            <Title>Regular</Title>
          </Body>
          <Right/>
        </Header>

        <Content>
          <Form>
            <Picker
              iosHeader="Select one"
              mode="dropdown"
              style={{
              width: Platform.OS === "ios"
                ? undefined
                : 200
            }}
              selectedValue={this.state.selected1}
              onValueChange={this
              .onValueChange
              .bind(this)}>
              {this
                .state
                .users
                .map((item, idx) => {
                  return (<Item key={idx} label={item.uuid} value={item.uuid}/>)
                })
}
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default RegularPicker;
