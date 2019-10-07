import React, { Component } from 'react'
import { View, TouchableHighlight, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import colors from '../utils/colors'

export class MainTabButton extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TouchableHighlight>
          <MaterialIcons name='video-call' size={36} color={colors.mainIcon} />
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 72,
    width: 72,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.mainBackground,
    bottom: 18,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: colors.tab

  }
})

export default MainTabButton
