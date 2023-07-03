import { styled } from "styled-components";

export const BodyContainer = styled.div< { backgroundimage: { text: string; img: string; } } >`
  background-image: ${({ backgroundimage }) => `url(${backgroundimage.img})`};
  background-size: cover;
  background-position: center;
  min-height: 100vh;
`