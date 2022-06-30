import { useEffect, useState } from "react";

interface NumbersCountUpProps {
  number: number;
}

export default function NumbersCountUp({ number }: NumbersCountUpProps) {
  const [num, setNum] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;

    const lastSpeed = 100;
    const midSpeed = (1000 - lastSpeed) / 45;
    const first = 1000 / (end - 50) / 10;
    const firstSpeed = first > 1 ? first : (1 * 1000) / end;

    let countingUp = setInterval(() => {
      start += 10;
      setNum(start);
      if (start >= end - 50) {
        clearInterval(countingUp);
        countingUp = setInterval(() => {
          start += 1;
          setNum(start);
          if (start >= end - 5) {
            clearInterval(countingUp);
            countingUp = setInterval(() => {
              start += 1;
              setNum(start);
              if (start === end) {
                clearInterval(countingUp);
              }
            }, lastSpeed);
          }
        }, midSpeed);
      }
    }, firstSpeed);
  }, [number]);

  return <span>{num}</span>;
}
