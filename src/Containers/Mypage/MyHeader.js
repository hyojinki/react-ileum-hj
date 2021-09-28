import React from "react";
import styled from "styled-components";
import { DefaultButton } from "globalStyles";
import * as colors from "Colors";

const HeaderArea = styled.section`
    padding: 3rem;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    text-align: center;
    background: linear-gradient(
        120deg,
        rgba(235, 178, 155, 0.5),
        rgba(255, 252, 248, 0.58)
    );
    height: 60vh;
`;

const Date = styled.p`
    font-size: 1.5rem;
    margin: 0.1rem auto;
    color: ${colors.darkBrown};
`;

const Greeting = styled.h1`
    font-size: 2.5rem;
    color: ${colors.darkBrown};
    font-family: "Pretendard-Thin";
`;

const Username = styled.span`
    font-weight: 600;
    color: ${colors.darkBrown};
`;

const CreateButton = styled(DefaultButton)`
    margin: 2.5rem auto;
    padding: 0.4rem 2rem;
    display:inline-block;
    font-size: 1.2rem;
`;

export const MyHeader = () => {
    return (
        <HeaderArea>
            <Date>2021년 9월 26일</Date>
            <Greeting>
                <Username>May</Username>님, 오늘은 어떤 하루였나요?
            </Greeting>
            <CreateButton>오늘의 일기 쓰기</CreateButton>
        </HeaderArea>
    )
}