import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

export function YarnBall({ color, size, isInHole = false }) {
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Gentle pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Subtle rotation
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const colors = {
    1: '#E53935', // Kırmızı - Red
    2: '#1E88E5', // Mavi - Blue
    3: '#43A047', // Yeşil - Green
    4: '#FDD835', // Sarı - Yellow
    5: '#8E24AA', // Mor - Purple
    6: '#FB8C00', // Turuncu - Orange
    7: '#00ACC1', // Turkuaz - Cyan
    8: '#F06292', // Pembe - Pink
  };

  const ballColor = colors[color] || color;

  return (
    <Animated.View
      style={[
        styles.yarnBall,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: ballColor,
          transform: [
            { scale: pulseAnim },
            { rotate: rotation }
          ],
          opacity: isInHole ? 0.6 : 1,
        },
      ]}
    >
      {/* Yarn texture lines */}
      <View style={[styles.yarnLine, styles.yarnLine1, { borderColor: ballColor }]} />
      <View style={[styles.yarnLine, styles.yarnLine2, { borderColor: ballColor }]} />
      <View style={[styles.yarnLine, styles.yarnLine3, { borderColor: ballColor }]} />
      
      {/* Highlight */}
      <View style={styles.highlight} />
      
      {/* Shadow */}
      <View style={styles.shadow} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  yarnBall: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    overflow: 'hidden',
  },
  yarnLine: {
    position: 'absolute',
    width: '120%',
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: 'transparent',
    opacity: 0.3,
  },
  yarnLine1: {
    transform: [{ rotate: '-30deg' }],
  },
  yarnLine2: {
    transform: [{ rotate: '30deg' }],
  },
  yarnLine3: {
    transform: [{ rotate: '90deg' }],
  },
  highlight: {
    position: 'absolute',
    top: '15%',
    left: '15%',
    width: '30%',
    height: '30%',
    borderRadius: 100,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  shadow: {
    position: 'absolute',
    bottom: '10%',
    right: '10%',
    width: '25%',
    height: '25%',
    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
