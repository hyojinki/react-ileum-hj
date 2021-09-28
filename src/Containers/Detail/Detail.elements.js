import React, { useState } from "react";
import styled from "styled-components";
import * as colors from "Colors";
import { Link } from "react-router-dom";


export const DetailHeader = styled.section`
    margin-top : 5%;
`;

export const BackToList = styled(Link)`
    color: ${colors.darkGray};
    font-size: 1rem;
    margin: 15%;
`;

export const MusicArea = styled.section`
    width: 70%;
    margin: auto auto 1.5rem auto;
    display: flex;
    justify-content: center;
`;

export const Line = styled.hr`
    text-align : center;
    margin: 1rem auto;
    border-radius: 0.125rem;
    border: 2px solid ${colors.lightGray};
    width: 16%;

`;

export const ContentArea = styled.div`
    width: 70%;
    margin-left: auto;
    margin-right: auto;
`;

export const ContentTitle = styled.h1`
    font-size: 2.25rem;
    margin-bottom: 0;
    margin-top: 3rem;
`;

export const ContentInfo = styled.div`
    text-align: right;
    margin: 1.5rem auto;
`;

export const ContentAuthor = styled.h4`
    margin-bottom: 1.5rem;
    margin-top: 2rem;
    font-size: 1.25rem;
    color: ${colors.darkGray};
`;

export const PubDate = styled.p`
    font-size: 1rem;
    color: ${colors.darkGray};
`;

export const ContentBody = styled.div`
    margin: 2.5rem auto;
    line-height: 1.5;
    font-size: 1.25rem;
`;

export const BtnArea = styled.div``;


export const UDBtn = styled(Link)`
    color: ${colors.darkGray};
    font-size: 1rem;
    margin-right: 1.5rem;
    margin-top: 1rem;
`;