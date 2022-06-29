import styled from "styled-components";

import RecordSection from "../components/organisms/RecordSection";

const MainWrapperDiv = styled.div`
  min-width: 1200px;
`;

export default function Main() {
  return (
    <MainWrapperDiv>
      <RecordSection />
    </MainWrapperDiv>
  );
}
