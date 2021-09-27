import React, { useState } from "react";
import styled from "styled-components";
import { MusicPlayer } from "../../Components";

const MusicWrapper = styled.div`
    padding: 1.5rem;
    margin-top: 2.5rem;
    display: flex;
    height: 50vh;
    justify-content: center;
`;

const AlbumContainer = styled.div`
    width: 30%;
`;

const AlbumImg = styled.img`
    margin: 1.5rem;
    box-shadow:4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
    width: 100%;
`;

const MusicInfo = styled.div`
    margin: 2.5rem 3.5rem;
    padding: 2rem auto;
    text-align: left;
    width: 30vw;
`;

const MusicTitle = styled.p`
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const MusicArtist = styled.p`
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

export const MusicDetail = () => {
    return (
        <>
            <MusicWrapper>
                <AlbumContainer>
                    <AlbumImg src="https://image.bugsm.co.kr/album/images/350/40586/4058623.jpg"/>
                </AlbumContainer>
                <MusicInfo>
                    <MusicTitle>Stupid Love Song</MusicTitle>
                    <MusicArtist>AKMU</MusicArtist>
                    <MusicPlayer/>
                </MusicInfo>
            </MusicWrapper>
        </>
    );
};