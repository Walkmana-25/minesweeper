import { useState } from 'react';
import styles from './index.module.css';

const generate2DArray = (m: number, n: number, val = 0) => {
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
        <div className={styles.sample} style={{ backgroundPosition: `-${30 * samplePos}px 0px` }} />
        <button onClick={() => setSamplePos((p) => (p + 1) % 14)}>sample</button>
        <p>{samplePos + 1}</p>
      </div>
      <div>
        {bombPos.map((row) =>
          row.map(() => {
            console.log('hi');
            return null; // Replace void[] with null
          }),
        )}
      </div>
    </div>
  );
};

export default Home;
