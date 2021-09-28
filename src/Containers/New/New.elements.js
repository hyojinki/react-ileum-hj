import React, { useState } from "react";
import styled from "styled-components";
import {DefaultButton} from "globalStyles";
import * as colors from "Colors";

//Header
export const HeaderContainer = styled.section`
    width: 64%;
    margin: 2rem auto;
    text-align: left;
    justify-content: center;
`;

export const PageHeader = styled.h2`
    color: ${colors.black};
`;

export const Line = styled.hr`
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    border-radius:.25rem;
    border: 1px solid #dedbd8;
    width: 20%;
`;
//Header

export const NewContainer = styled.section`
    width: 80%;
    margin-left : auto;
    margin-right: auto;
    text-align: left;
`;

export const FormArea = styled.form`
    margin-left : auto;
    margin-right: auto;
`;

export const ButtonArea = styled.div`
    width: 80%;
    margin-left: 10%;
    margint-right: 10%;
`;

export const SaveButton = styled(DefaultButton)`
    margin: 2.5rem auto;
    display: inline-block;
    padding-right: 2rem;
    padding-left: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    float:right;
    display:inline;
`;

export const FormTopContainer = styled.section`
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 8rem;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

export const FormTitle = styled.input`
    height : 2rem;
    width : 30%;
    padding: 1rem;
`;

export const FormBody = styled.textarea`
    margin-top : 1.5rem;
    margin-bottom: 2rem;
    margin-left: 10%;
    margint-right: 10%;
    width: 80%;
    height: 40vh;
    padding: 1.5rem;
    line-height: 1.5rem;
    margin-left: auto;
    border-radius : .125rem;
`;

export const MusicSearch = () => {
    return (
        <>
            <input type="text" placeholder="음악 검색.."/>
        </>
    );
}