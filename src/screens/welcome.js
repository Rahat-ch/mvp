import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';


const Welcome = () => {
  return (
    <Container style={styles.container}>
      <Text style={styles.title}>CoEpi</Text>
    </Container>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#86FFEA',
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
    marginTop: 80
  }
})

export default Welcome;
