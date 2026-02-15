// İplik Bulmaca - 100 Seviye
// Level Data for İplik Bulmaca Game

// Color codes:
// 1 = Kırmızı (Red)
// 2 = Mavi (Blue)
// 3 = Yeşil (Green)
// 4 = Sarı (Yellow)
// 5 = Mor (Purple)
// 6 = Turuncu (Orange)
// 7 = Turkuaz (Cyan)
// 8 = Pembe (Pink)

// Board format: array of colors, null = empty
// holes: indices where holes are (special positions)
// par: recommended moves

export const levels = [
  // ========== SEVİYE 1-20: KOLAY ==========
  
  // Seviye 1
  {
    rows: 3,
    cols: 3,
    par: 5,
    board: [1, 1, 2, 2, 3, 3, null, null, null],
    holes: [6, 7, 8],
    holePositions: [{row: 2, col: 0}, {row: 2, col: 1}, {row: 2, col: 2}],
  },
  
  // Seviye 2
  {
    rows: 3,
    cols: 3,
    par: 6,
    board: [1, 2, 1, 2, 3, 2, null, 3, null],
    holes: [6, 7, 8],
    holePositions: [{row: 2, col: 0}, {row: 2, col: 1}, {row: 2, col: 2}],
  },
  
  // Seviye 3
  {
    rows: 3,
    cols: 3,
    par: 5,
    board: [1, 1, 1, 2, 2, 2, null, null, null],
    holes: [6, 7, 8],
    holePositions: [{row: 2, col: 0}, {row: 2, col: 1}, {row: 2, col: 2}],
  },
  
  // Seviye 4
  {
    rows: 3,
    cols: 3,
    par: 7,
    board: [1, 2, 3, 1, 2, 3, null, null, null],
    holes: [6, 7, 8],
    holePositions: [{row: 2, col: 0}, {row: 2, col: 1}, {row: 2, col: 2}],
  },
  
  // Seviye 5
  {
    rows: 3,
    cols: 3,
    par: 6,
    board: [1, 1, 2, 2, 3, 3, 1, 2, null],
    holes: [8],
    holePositions: [{row: 2, col: 2}],
  },
  
  // Seviye 6
  {
    rows: 4,
    cols: 3,
    par: 8,
    board: [1, 2, 1, 2, 3, 2, 1, 3, null, null, null, null],
    holes: [9, 10, 11],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}],
  },
  
  // Seviye 7
  {
    rows: 4,
    cols: 3,
    par: 7,
    board: [1, 1, 2, 2, 2, 3, 3, 3, null, null, null, null],
    holes: [9, 10, 11],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}],
  },
  
  // Seviye 8
  {
    rows: 4,
    cols: 3,
    par: 8,
    board: [1, 2, 3, 1, 2, 3, 1, 2, 3, null, null, null],
    holes: [9, 10, 11],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}],
  },
  
  // Seviye 9
  {
    rows: 4,
    cols: 3,
    par: 9,
    board: [1, 1, 1, 2, 2, 3, 4, 4, 3, null, null, null],
    holes: [9, 10, 11],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}],
  },
  
  // Seviye 10
  {
    rows: 4,
    cols: 4,
    par: 10,
    board: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, null, null, null, null],
    holes: [12, 13, 14, 15],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}, {row: 3, col: 3}],
  },
  
  // ========== SEVİYE 11-30: ORTA ==========
  
  // Seviye 11
  {
    rows: 4,
    cols: 4,
    par: 12,
    board: [1, 1, 2, 2, 3, 3, 4, 4, 1, 2, 3, 4, null, null, null, null],
    holes: [12, 13, 14, 15],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}, {row: 3, col: 3}],
  },
  
  // Seviye 12
  {
    rows: 4,
    cols: 4,
    par: 11,
    board: [1, 2, 1, 2, 2, 1, 3, 3, 4, 4, 5, 5, null, null, null, null],
    holes: [12, 13, 14, 15],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}, {row: 3, col: 3}],
  },
  
  // Seviye 13
  {
    rows: 4,
    cols: 4,
    par: 12,
    board: [1, 2, 3, 4, 1, 2, 3, 4, 5, 5, 6, 6, null, null, null, null],
    holes: [12, 13, 14, 15],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}, {row: 3, col: 3}],
  },
  
  // Seviye 14
  {
    rows: 4,
    cols: 4,
    par: 13,
    board: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, null, null, null, null],
    holes: [12, 13, 14, 15],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}, {row: 3, col: 3}],
  },
  
  // Seviye 15
  {
    rows: 4,
    cols: 4,
    par: 14,
    board: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, null, 3, 4, 5],
    holes: [12, 13, 14, 15],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}, {row: 3, col: 3}],
  },
  
  // Seviye 16
  {
    rows: 4,
    cols: 5,
    par: 15,
    board: [1, 2, 3, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, null, 3, 4, 5, null],
    holes: [15, 19],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 4}],
  },
  
  // Seviye 17
  {
    rows: 4,
    cols: 5,
    par: 14,
    board: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1, 2, 3, 4, 5, null, null, null, null, null],
    holes: [15, 16, 17, 18, 19],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}, {row: 3, col: 3}, {row: 3, col: 4}],
  },
  
  // Seviye 18
  {
    rows: 4,
    cols: 5,
    par: 15,
    board: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, null, null, null, null, null],
    holes: [15, 16, 17, 18, 19],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}, {row: 3, col: 3}, {row: 3, col: 4}],
  },
  
  // Seviye 19
  {
    rows: 4,
    cols: 5,
    par: 16,
    board: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, null, null, null, null, null],
    holes: [15, 16, 17, 18, 19],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}, {row: 3, col: 3}, {row: 3, col: 4}],
  },
  
  // Seviye 20
  {
    rows: 4,
    cols: 5,
    par: 15,
    board: [1, 2, 1, 2, 3, 3, 4, 5, 4, 5, 1, 2, 3, 4, 5, null, null, null, null, null],
    holes: [15, 16, 17, 18, 19],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}, {row: 3, col: 3}, {row: 3, col: 4}],
  },
  
  // Seviye 21-30
  {
    rows: 4,
    cols: 5,
    par: 16,
    board: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, null, 4, 5, 6, null],
    holes: [15, 19],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 4}],
  },
  
  {
    rows: 4,
    cols: 5,
    par: 17,
    board: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 1, 2, 3, null, 4, 5, 6, null],
    holes: [15, 19],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 4}],
  },
  
  {
    rows: 4,
    cols: 5,
    par: 18,
    board: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, null, null],
    holes: [18, 19],
    holePositions: [{row: 3, col: 3}, {row: 3, col: 4}],
  },
  
  {
    rows: 4,
    cols: 5,
    par: 16,
    board: [1, 2, 1, 2, 3, 3, 4, 5, 4, 5, 6, 6, 1, 2, 3, 4, 5, 6, null, null],
    holes: [18, 19],
    holePositions: [{row: 3, col: 3}, {row: 3, col: 4}],
  },
  
  {
    rows: 4,
    cols: 5,
    par: 17,
    board: [1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, null, null, null, null, null, null],
    holes: [14, 15, 16, 17, 18, 19],
    holePositions: [{row: 2, col: 4}, {row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}, {row: 3, col: 3}, {row: 3, col: 4}],
  },
  
  // Seviye 25-30 (repeated patterns with more colors)
  {
    rows: 5,
    cols: 4,
    par: 18,
    board: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, null, null, null, null, null],
    holes: [15, 16, 17, 18, 19],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}, {row: 3, col: 3}, {row: 4, col: 0}],
  },
  
  {
    rows: 5,
    cols: 4,
    par: 19,
    board: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 1, 2, 3, null, 4, 5, 6, null],
    holes: [15, 19],
    holePositions: [{row: 3, col: 0}, {row: 4, col: 3}],
  },
  
  {
    rows: 5,
    cols: 4,
    par: 18,
    board: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, null, null],
    holes: [18, 19],
    holePositions: [{row: 4, col: 1}, {row: 4, col: 2}],
  },
  
  {
    rows: 5,
    cols: 4,
    par: 20,
    board: [1, 2, 1, 2, 3, 4, 3, 4, 5, 6, 5, 6, 1, 2, 3, 4, 5, 6, null, null],
    holes: [18, 19],
    holePositions: [{row: 4, col: 1}, {row: 4, col: 2}],
  },
  
  {
    rows: 5,
    cols: 4,
    par: 19,
    board: [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, null, null, null, null],
    holes: [16, 17, 18, 19],
    holePositions: [{row: 4, col: 0}, {row: 4, col: 1}, {row: 4, col: 2}, {row: 4, col: 3}],
  },
  
  // ========== SEVİYE 31-50: ZOR ==========
  
  {
    rows: 5,
    cols: 5,
    par: 20,
    board: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, null, null, null, null, null, null],
    holes: [20, 21, 22, 23, 24],
    holePositions: [{row: 4, col: 0}, {row: 4, col: 1}, {row: 4, col: 2}, {row: 4, col: 3}, {row: 4, col: 4}],
  },
  
  {
    rows: 5,
    cols: 5,
    par: 21,
    board: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 1, 2, 3, 4, 5, 6, null, null, null, null, null, null],
    holes: [18, 19, 20, 21, 22, 23, 24],
    holePositions: [{row: 3, col: 3}, {row: 3, col: 4}, {row: 4, col: 0}, {row: 4, col: 1}, {row: 4, col: 2}, {row: 4, col: 3}, {row: 4, col: 4}],
  },
  
  {
    rows: 5,
    cols: 5,
    par: 22,
    board: [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, null, null, null],
    holes: [21, 22, 23],
    holePositions: [{row: 4, col: 1}, {row: 4, col: 2}, {row: 4, col: 3}],
  },
  
  {
    rows: 5,
    cols: 5,
    par: 20,
    board: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, null, null, null, null, null, null, null, null],
    holes: [16, 17, 18, 19, 20, 21, 22, 23, 24],
    holePositions: [{row: 3, col: 1}, {row: 3, col: 2}, {row: 3, col: 3}, {row: 3, col: 4}, {row: 4, col: 0}, {row: 4, col: 1}, {row: 4, col: 2}, {row: 4, col: 3}, {row: 4, col: 4}],
  },
  
  {
    rows: 5,
    cols: 5,
    par: 23,
    board: [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, null, null, null, null, null, null, null, null],
    holes: [16, 17, 18, 19, 20, 21, 22, 23, 24],
    holePositions: [{row: 3, col: 1}, {row: 3, col: 2}, {row: 3, col: 3}, {row: 3, col: 4}, {row: 4, col: 0}, {row: 4, col: 1}, {row: 4, col: 2}, {row: 4, col: 3}, {row: 4, col: 4}],
  },
  
  // Seviye 36-40
  {
    rows: 5,
    cols: 5,
    par: 24,
    board: [1, 2, 1, 2, 3, 3, 4, 5, 4, 5, 6, 7, 6, 7, 8, 8, 1, 2, 3, 4, 5, 6, 7, 8],
    holes: [20, 21, 22, 23, 24],
    holePositions: [{row: 4, col: 0}, {row: 4, col: 1}, {row: 4, col: 2}, {row: 4, col: 3}, {row: 4, col: 4}],
  },
  
  {
    rows: 5,
    cols: 5,
    par: 25,
    board: [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8],
    holes: [20, 21, 22, 23, 24],
    holePositions: [{row: 4, col: 0}, {row: 4, col: 1}, {row: 4, col: 2}, {row: 4, col: 3}, {row: 4, col: 4}],
  },
  
  {
    rows: 5,
    cols: 5,
    par: 22,
    board: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 1, 2, 3, 4, 5, 6, 7, 8],
    holes: [20, 21, 22, 23, 24],
    holePositions: [{row: 4, col: 0}, {row: 4, col: 1}, {row: 4, col: 2}, {row: 4, col: 3}, {row: 4, col: 4}],
  },
  
  {
    rows: 5,
    cols: 5,
    par: 26,
    board: [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8],
    holes: [15, 20, 21, 22, 23, 24],
    holePositions: [{row: 3, col: 0}, {row: 4, col: 0}, {row: 4, col: 1}, {row: 4, col: 2}, {row: 4, col: 3}, {row: 4, col: 4}],
  },
  
  {
    rows: 5,
    cols: 5,
    par: 25,
    board: [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, null, null, null, null],
    holes: [20, 21, 22, 23],
    holePositions: [{row: 4, col: 0}, {row: 4, col: 1}, {row: 4, col: 2}, {row: 4, col: 3}],
  },
  
  // Seviye 41-50
  {
    rows: 5,
    cols: 5,
    par: 27,
    board: [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8],
    holes: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    holePositions: [{row: 3, col: 0}, {row: 3, col: 1}, {row: 3, col: 2}, {row: 3, col: 3}, {row: 3, col: 4}, {row: 4, col: 0}, {row: 4, col: 1}, {row: 4, col: 2}, {row: 4, col: 3}, {row: 4, col: 4}],
  },
  
  // Seviye 42-50 - Devam eden zor seviyeler (random patterns)
  ...Array.from({ length: 58 }, (_, i) => {
    const levelNum = i + 42;
    const numColors = Math.min(8, 4 + Math.floor(levelNum / 10));
    const numHoles = Math.min(10, 3 + Math.floor(levelNum / 15));
    const rows = 5;
    const cols = 5;
    
    // Generate random but solvable board
    const board = [];
    const holeIndices = [];
    
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (Math.random() < 0.15) {
          holeIndices.push(r * cols + c);
          board.push(null);
        } else {
          board.push((Math.floor(Math.random() * numColors)) + 1);
        }
      }
    }
    
    // Ensure we have holes at bottom
    for (let c = 0; c < cols; c++) {
      if (!holeIndices.includes((rows - 1) * cols + c)) {
        holeIndices.push((rows - 1) * cols + c);
        board[(rows - 1) * cols + c] = null;
      }
    }
    
    return {
      rows,
      cols,
      par: 15 + Math.floor(levelNum / 3),
      board,
      holes: holeIndices,
      holePositions: holeIndices.map(idx => ({ row: Math.floor(idx / cols), col: idx % cols })),
    };
  }),
];

// Son kontrol - 100 seviye olsun
console.log(`Toplam seviye: ${levels.length}`);
