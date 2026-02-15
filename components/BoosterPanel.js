import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export function BoosterPanel({ onRestart }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.boosterButton} onPress={onRestart}>
        <Text style={styles.boosterEmoji}>🔄</Text>
        <Text style={styles.boosterText}>Yeniden</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.boosterButton}>
        <Text style={styles.boosterEmoji}>🎁</Text>
        <Text style={styles.boosterText}>Yardım</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.boosterButton}>
        <Text style={styles.boosterEmoji}>🧹</Text>
        <Text style={styles.boosterText}>Temizle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  boosterButton: {
    alignItems: 'center',
    padding: 10,
  },
  boosterEmoji: {
    fontSize: 28,
    marginBottom: 5,
  },
  boosterText: {
    fontSize: 12,
    color: '#5D4037',
    fontWeight: '600',
  },
});
