import React from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import colors from '../utils/colors'

export default props => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.title}> {props.name} Content </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.screen,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: colors.title,
    fontSize: 30
  }
})
