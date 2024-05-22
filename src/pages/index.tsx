import { useState } from 'react';
import styles from './index.module.css';

const generate2DArray = (m: number, n: number, val = 1) => {
  return [...Array(m)].map(() => Array(n).fill(val));
};

const Home = () => {
  //REMOVE THIS
  const vertical = 5;
  const horizontal = 5;

  const [bombPos, setBombPos] = useState<number[][]>(generate2DArray(vertical, horizontal, 0));
  const [userInput, setUesrInput] = useState<number[][]>(generate2DArray(vertical, horizontal, 0));

  const [samplePos, setSamplePos] = useState(0);
  console.log(samplePos);
  return (
    <div>
      <div className={styles.container}>
        {bombPos.map((row, rowIndex) =>
          row.map((n, columnIndex) => <p key={`${rowIndex}-${columnIndex}`}>{n}</p>),
        )}
      </div>
    </div>
  );
};

export default Home;
