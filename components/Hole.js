import React from 'react';
import { View, StyleSheet } from 'react-native';

export function Hole({ size }) {
  return (
    <View
      style={[
        styles.hole,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        }
      ]}
    >
      <View style={styles.innerShadow} />
    </View>
  );
}

const styles = StyleSheet.create({
  hole: {
    backgroundColor: '#5D4037',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 3,
  },
  innerShadow: {
    width: '70%',
    height: '70%',
    borderRadius: 100,
    backgroundColor: '#3E2723',
    borderWidth: 2,
    borderColor: '#4E342E',
  },
});
