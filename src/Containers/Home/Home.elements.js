import styled from "styled-components";
import { BannerContainer, DefaultButton } from "../../globalStyles";
import { nearWhite, gray } from "../../Colors";
import { Link } from "react-router-dom";

export const TodayPostContainer = styled(BannerContainer)``;

// Banner section
export const Date = styled.p`
  margin: 1rem 0;

  font-size: 1.3rem;
  font-weight: 300;

  color: ${gray};
  opacity: 80%;
`;

export const TodayMessage = styled.p`
  width: 60%;

  margin: 2rem auto;

  font-family: Pretendard-Thin;
  font-size: 3rem;

  background: rgba(255, 213, 196, 0.5);
  color: #ffffff;
`;

export const PostContainer = styled.section`
  width: 70%;

  margin: 2rem auto;

  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  width: 70%;

  padding: 0 2rem;

  text-align: left;
`;

export const ContentTitle = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  font-size: 1.5rem;
  color: ${nearWhite};
`;

export const ContentAuthor = styled.span`
  text-align: right;
  font-size: 1rem;
  opacity: 80%;
`;

export const ContentSummary = styled.p`
  margin: 1rem 0;
  color: ${nearWhite};
`;

const ArrowContainer = styled(Link)`
  color: ${nearWhite};
  font-size: 1.5rem;
  align-self: center;
  margin: 0 1rem;
`;

export const PrevArrowContainer = styled(ArrowContainer)``;

export const NextArrowContainer = styled(ArrowContainer)``;

// Create section
export const CreateButtonArea = styled.section`
  width: 80%;

  margin: 3rem auto;

  text-align: center;
`;
export const CreateMessage = styled.p`
  font-size: 2rem;
  font-family: Pretendard-ExtraLight;
  margin: 8rem auto;
`;
export const CreateButton = styled(DefaultButton)``;
