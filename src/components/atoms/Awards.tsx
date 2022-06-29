import styled, { css } from "styled-components";

interface AwardsProps {
  imgUrl: string;
  children: React.ReactNode;
}

const AwardsDiv = styled.div<AwardsProps>`
  ${({ theme, imgUrl }) => css`
    height: 54px;
    padding: 5px 0px 5px 62px;
    background-size: 54px 54px;
    background-image: url(${imgUrl});
    background-repeat: no-repeat;
    font-size: ${theme.fonts.size.awards};
    font-weight: bold;
    color: ${theme.fonts.color.gray800};
    line-height: 22px;
  `}
`;

export default function Awards({ imgUrl, ...rest }: AwardsProps) {
  return <AwardsDiv imgUrl={imgUrl} {...rest} />;
}
