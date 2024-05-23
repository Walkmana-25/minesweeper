import { useState } from 'react';
import styles from './index.module.css';

const generate2DArray = (m: number, n: number, val = 1) => {
  return [...Array(m)].map(() => Array(n).fill(val));
};

const Home = () => {
  //REMOVE THIS
  const vertical = 5;
  const horizontal = 5;

  const cellSize = 32;

  const [bombPos, setBombPos] = useState<number[][]>(generate2DArray(vertical, horizontal, 0));
  const [userInput, setUesrInput] = useState<number[][]>(generate2DArray(vertical, horizontal, 0));

  const [samplePos, setSamplePos] = useState(0);
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
              {n}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Home;
