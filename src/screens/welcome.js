import React from 'react';
import { StyleSheet, Image, ImageBackground } from 'react-native';
import { Container, Text, Body, Button } from 'native-base';
import Cloud from '../images/welcome/Cloud.png';
import Gradient from '../images/welcome/gradient.png';

const Welcome = () => {
  return (
    <Container>
      <ImageBackground
        source={Gradient}
        style={styles.container}
      >
        <Text style={styles.title}>CoEpi</Text>
        <ImageBackground
          source={Cloud}
          style={styles.cloud}
        >
          <Text
            style={styles.cloudText}
          >
            Contain, control, and eradicate contagious illnesses by connecting with your community.</Text>
        </ImageBackground>
        <Button>
          <Text>Learn more</Text>
        </Button>
        <Button>
          <Text>Skip</Text>

        </Button>
      </ImageBackground>
    </Container>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: "300",
    fontSize: 56,
    lineHeight: 66,
    textAlign: 'center',
    letterSpacing: 1.5,
    color: '#FFFFFF',
    marginTop: 80,
  },
  cloud: {
    marginTop: 78,
    marginLeft: 48,
    position: "relative",
    width: 327,
    height: 173,
  },
  cloudText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: "300",
    fontSize: 14,
    position: "absolute",
    top: 75,
    textAlign: "center"
  }
})

export default Welcome;
