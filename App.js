import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Animated, PanResponder, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { levels } from './levels';
import { YarnBall } from './components/YarnBall';
import { Hole } from './components/Hole';
import { BoosterPanel } from './components/BoosterPanel';

const { width, height } = Dimensions.get('window');
const BOARD_WIDTH = width * 0.9;
const BOARD_HEIGHT = height * 0.55;
const BALL_SIZE = 50;
const HOLE_SIZE = 55;

export default function App() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [board, setBoard] = useState([]);
  const [selectedBall, setSelectedBall] = useState(null);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('playing'); // playing, won, lost
  const [showLevels, setShowLevels] = useState(false);

  const levelData = levels[currentLevel - 1];

  useEffect(() => {
    initializeBoard();
  }, [currentLevel]);

  const initializeBoard = () => {
    const newBoard = [];
    for (let i = 0; i < levelData.rows; i++) {
      const row = [];
      for (let j = 0; j < levelData.cols; j++) {
        const cellIndex = i * levelData.cols + j;
        const color = levelData.board[cellIndex];
        row.push({
          id: `${i}-${j}`,
          row: i,
          col: j,
          color: color,
          isHole: levelData.holes.includes(cellIndex),
          isEmpty: color === null,
        });
      }
      newBoard.push(row);
    }
    setBoard(newBoard);
    setMoves(levelData.par || 30);
    setGameState('playing');
    setSelectedBall(null);
  };

  const checkWin = (newBoard) => {
    // Check if all non-hole cells are either empty or have matching colors
    for (let i = 0; i < newBoard.length; i++) {
      for (let j = 0; j < newBoard[i].length; j++) {
        const cell = newBoard[i][j];
        if (!cell.isHole && cell.color !== null) {
          // Check adjacent cells for same color
          const neighbors = getNeighbors(i, j, newBoard);
          const sameColorNeighbors = neighbors.filter(n => n.color === cell.color && !n.isHole);
          if (sameColorNeighbors.length === 0) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const getNeighbors = (row, col, board) => {
    const neighbors = [];
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;
      if (newRow >= 0 && newRow < board.length && 
          newCol >= 0 && newCol < board[0].length) {
        neighbors.push(board[newRow][newCol]);
      }
    }
    return neighbors;
  };

  const handleBallPress = (row, col) => {
    if (gameState !== 'playing') return;
    
    const cell = board[row][col];
    if (cell.isHole || cell.color === null) return;

    // Find hole for this ball
    const holeIndex = levelData.holes.indexOf(row * levelData.cols + col);
    if (holeIndex === -1) return;

    // Move ball to hole
    const newBoard = [...board];
    newBoard[row][col] = {
      ...cell,
      color: null,
      isEmpty: true,
    };
    
    // Update hole to have this ball's color
    const holeRow = Math.floor(levelData.holePositions[holeIndex].row);
    const holeCol = Math.floor(levelData.holePositions[holeIndex].col);
    newBoard[holeRow][holeCol] = {
      ...newBoard[holeRow][holeCol],
      color: cell.color,
      isEmpty: false,
    };

    setBoard(newBoard);
    setMoves(moves - 1);
    
    // Check win
    if (checkWin(newBoard)) {
      setGameState('won');
      setScore(score + Math.max(0, (moves - 1) * 10));
    } else if (moves <= 1) {
      setGameState('lost');
    }
  };

  const nextLevel = () => {
    if (currentLevel < 100) {
      setCurrentLevel(currentLevel + 1);
      setScore(score + (gameState === 'won' ? 100 : 0));
    }
  };

  const restartLevel = () => {
    initializeBoard();
  };

  const goToLevel = (levelNum) => {
    setCurrentLevel(levelNum);
    setShowLevels(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🧶 İplik Bulmaca</Text>
        <View style={styles.stats}>
          <Text style={styles.statText}>Seviye: {currentLevel}</Text>
          <Text style={styles.statText}>Hamle: {moves}</Text>
          <Text style={styles.statText}>Skor: {score}</Text>
        </View>
      </View>

      {/* Game Board */}
      <View style={styles.board}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
              <TouchableOpacity
                key={cell.id}
                style={[
                  styles.cell,
                  cell.isHole && styles.holeCell,
                ]}
                onPress={() => handleBallPress(rowIndex, colIndex)}
                disabled={cell.isHole || cell.color === null}
              >
                {!cell.isHole && cell.color !== null && (
                  <YarnBall color={cell.color} size={BALL_SIZE} />
                )}
                {cell.isHole && cell.color !== null && (
                  <YarnBall color={cell.color} size={BALL_SIZE} isInHole />
                )}
                {cell.isHole && cell.color === null && (
                  <Hole size={HOLE_SIZE} />
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Boosters */}
      <BoosterPanel onRestart={restartLevel} />

      {/* Game Over Overlay */}
      {gameState !== 'playing' && (
        <View style={styles.overlay}>
          <Text style={styles.overlayTitle}>
            {gameState === 'won' ? '🎉 Tebrikler!' : '😢 Yeniden Dene!'}
          </Text>
          {gameState === 'won' && (
            <Text style={styles.overlayText}>+100 puan!</Text>
          )}
          <View style={styles.overlayButtons}>
            {gameState === 'won' && currentLevel < 100 && (
              <TouchableOpacity style={styles.nextButton} onPress={nextLevel}>
                <Text style={styles.buttonText}>Sonraki Seviye →</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.restartButton} onPress={restartLevel}>
              <Text style={styles.buttonText}>Tekrar Oyna</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Level Select Button */}
      <TouchableOpacity 
        style={styles.levelsButton}
        onPress={() => setShowLevels(true)}
      >
        <Text style={styles.levelsButtonText}>📋 Seviyeler</Text>
      </TouchableOpacity>

      {/* Level Select Modal */}
      {showLevels && (
        <View style={styles.levelsModal}>
          <View style={styles.levelsContent}>
            <Text style={styles.levelsTitle}>Seviyeler</Text>
            <ScrollView style={styles.levelsList}>
              {levels.map((level, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.levelButton,
                    currentLevel === index + 1 && styles.levelButtonActive
                  ]}
                  onPress={() => goToLevel(index + 1)}
                >
                  <Text style={[
                    styles.levelButtonText,
                    currentLevel === index + 1 && styles.levelButtonTextActive
                  ]}>
                    {index + 1}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setShowLevels(false)}
            >
              <Text style={styles.closeButtonText}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E6',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5D4037',
    textAlign: 'center',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statText: {
    fontSize: 16,
    color: '#8D6E63',
    fontWeight: '600',
  },
  board: {
    backgroundColor: '#D7CCC8',
    borderRadius: 15,
    padding: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: BALL_SIZE + 10,
    height: BALL_SIZE + 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
  },
  holeCell: {
    backgroundColor: '#A1887F',
    borderRadius: HOLE_SIZE / 2,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  overlayText: {
    fontSize: 24,
    color: '#FFD700',
    marginBottom: 30,
  },
  overlayButtons: {
    gap: 15,
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  restartButton: {
    backgroundColor: '#FF5722',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  levelsButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#5D4037',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
  },
  levelsButtonText: {
    color: '#FFF',
    fontWeight: '600',
  },
  levelsModal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelsContent: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    width: '80%',
    maxHeight: '70%',
  },
  levelsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5D4037',
    textAlign: 'center',
    marginBottom: 15,
  },
  levelsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  levelButton: {
    width: 45,
    height: 45,
    backgroundColor: '#D7CCC8',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelButtonActive: {
    backgroundColor: '#5D4037',
  },
  levelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5D4037',
  },
  levelButtonTextActive: {
    color: '#FFF',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    borderRadius: 10,
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
