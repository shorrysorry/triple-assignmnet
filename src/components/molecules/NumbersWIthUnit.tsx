import styled from "styled-components";

import NumbersCountUp from "../atoms/NumbersCountUp";

interface NumbersWithUnitProps {
  number: number;
  numberUnit: "만" | "억";
  countUnit: "명" | "개";
}

const NumbersWithUnitStrong = styled.strong`
  display: block;
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 1;
`;

export default function NumbersWithUnit({
  number,
  numberUnit,
  countUnit,
}: NumbersWithUnitProps) {
  return (
    <NumbersWithUnitStrong>
      <NumbersCountUp number={number} />
      {numberUnit} {countUnit}
    </NumbersWithUnitStrong>
  );
}
