import { useState } from 'react';
import styles from './index.module.css';

const generate2DArray = (m: number, n: number, val = 1) => {
  return [...Array(m)].map(() => Array(n).fill(val));
};

const Home = () => {
  //REMOVE THIS
  const vertical = 9;
  const horizontal = 9;

  const cellSize = 32;

  const [bombPos, setBombPos] = useState<number[][]>(generate2DArray(vertical, horizontal, 0));
  const [userInput, setUesrInput] = useState<number[][]>(generate2DArray(vertical, horizontal, 0));
  const [samplePos, setSamplePos] = useState(0);

  const clickHandler = (row: number, column: number) => {
    const board = structuredClone(userInput);
    board[row][column]++;
    setUesrInput(board);
  };

  console.log(samplePos);
  return (
    <div className={styles.container}>
      <div
        className={styles.gameBoardFlame}
        style={{
          width: horizontal * cellSize,
          height: vertical * cellSize,
        }}
      >
        {bombPos.map((row, rowIndex) =>
          row.map((n, columnIndex) => (
            <div className={styles.cell} key={`${rowIndex}-${columnIndex}`}>
              {/*
              Using CSS Sprite
              0 ~ 7 is number tile.
              8 is ? tile.
              9 is flag tile.
              10 is bomb tile.
              11 is smile tile.
              12 is sunglasses tile.
              13 is bad face tile.

               */}
              <div
                onClick={() => clickHandler(rowIndex, columnIndex)}
                style={{ backgroundPosition: `-${30 * userInput[rowIndex][columnIndex]}px 0px` }}
                className={styles.inner}
              />
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
