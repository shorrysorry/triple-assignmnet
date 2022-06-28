import { useEffect, useState } from "react";

interface NumbersCountUpProps {
  number: number;
}

export default function NumbersCountUp({ number }: NumbersCountUpProps) {
  const [num, setNum] = useState(0);

  const intervalFunction = () => {
    let start = 0;
    const end = number;

    let countingUp = setInterval(() => {
      start += 10;
      setNum(start);
      if (start >= end - 10) {
        clearInterval(countingUp);
        countingUp = setInterval(() => {
          start += 5;
          setNum(start);
          if (start >= end - 5) {
            clearInterval(countingUp);
            countingUp = setInterval(() => {
              start += 1;
              setNum(start);
              if (start === end) {
                clearInterval(countingUp);
              }
            }, 150);
          }
        }, 50);
      }
    }, 1200 / (end - 10));
  };

  useEffect(() => intervalFunction, []);

  return <span>{num}</span>;
}
