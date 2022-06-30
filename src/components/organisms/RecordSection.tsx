import styled, { css, keyframes } from "styled-components";

import Awards from "../atoms/Awards";
import NumbersWithUnit from "../molecules/NumbersWithUnit";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const RecordSectionWrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1040px;
  margin: 50px auto;
`;

const BigTripleImageDiv = styled.div`
  ${({ theme }) => css`
    width: 400px;
    height: 338px;
    padding-top: 280px;
    background-size: 400px 338px;
    background-image: url(${require("../../assets/images/triple2x.png")});
    background-repeat: no-repeat;
    text-align: center;
    font-size: ${theme.fonts.size.byDate};
    color: ${theme.fonts.color.gray700};
    opacity: 0;
    animation: ${fadeIn} 700ms ease-in-out forwards;
  `}
`;

const NumbersWithUnitWrapperDiv = styled.div`
  ${({ theme }) => css`
    margin-bottom: 20px;
    font-size: ${theme.fonts.size.countNumber};
    color: ${theme.fonts.color.gray};
    letter-spacing: -1px;
    opacity: 0;
    animation: ${fadeIn} 700ms ease-in-out 100ms forwards;
  `}
`;

const AwardsWrapperDiv = styled.div`
  opacity: 0;
  animation: ${fadeIn} 700ms ease-in-out 200ms forwards;
`;

export default function RecordSection() {
  return (
    <RecordSectionWrapperDiv>
      <BigTripleImageDiv>2021년 12월 기준</BigTripleImageDiv>
      <div>
        <div>
          <NumbersWithUnitWrapperDiv>
            <NumbersWithUnit number={700} numberUnit="만" countUnit="명" />의
            여행자
          </NumbersWithUnitWrapperDiv>
          <NumbersWithUnitWrapperDiv>
            <NumbersWithUnit number={100} numberUnit="만" countUnit="개" />의
            여행리뷰
          </NumbersWithUnitWrapperDiv>
          <NumbersWithUnitWrapperDiv>
            <NumbersWithUnit number={470} numberUnit="만" countUnit="개" />의
            여행일정
          </NumbersWithUnitWrapperDiv>
        </div>
        <AwardsWrapperDiv>
          <Awards imgUrl={require("../../assets/images/play-store2x.png")}>
            2018 구글 플레이스토어 <br />
            올해의 앱 최우수상 수상
          </Awards>
          <Awards imgUrl={require("../../assets/images/badge-apple4x.png")}>
            2018 애플 앱스토어 <br />
            오늘의 여행앱 선정
          </Awards>
        </AwardsWrapperDiv>
      </div>
    </RecordSectionWrapperDiv>
  );
}
