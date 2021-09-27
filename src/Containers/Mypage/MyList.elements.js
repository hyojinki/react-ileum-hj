import styled from "styled-components";
import * as colors from "../../Colors";
import { Link } from "react-router-dom";

export const ContentArea = styled.section`
    display : flex;
    flex-direction:column;
    width: 80%;
    margin-left:auto;
    margin-right:auto;
`;

export const ContentHeader = styled.h1`
    margin-top: 2.5rem;
    margin-bottom: 2rem;
`;

export const ViewTab = styled.ul`
    display: flex;
    justify-content:flex-end;
`;

export const Content = styled.article`
`;

export const Date = styled.p`
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-size:1.25rem;
`;

export const Preview = styled.div`
    padding: 2rem 2.5rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content:space-between;
`;

export const PreviewMusic = styled.div`
    width: 25%;
    padding: 1.5rem;
    text-align: center;
`;

export const AlbumImg = styled.img`
    margin: 1rem auto;
`;

export const MusicTitle = styled.p`
    font-size: 1.5rem;
    margin: 1rem auto;
`;

export const MusicArtist = styled.p`
    margin: 1rem auto;
`;

export const PreviewDiary = styled.div`
    width: 60%;
    padding: 1.5rem;
    display: flex;
    flex-direction:column;
    justify-content:center;
`;

export const DiaryTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
`;

export const DiaryBody = styled.p`
    line-height: 1.5;
`;

export const TabList = styled(Link)`
    border-right-style:solid;
    border-right-width:1px;
    padding-right: 1.5rem;
    margin: 1.5rem;
`;

export const TabCal = styled(Link)`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`;