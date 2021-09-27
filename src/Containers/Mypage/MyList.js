import React from "react";
import { MyHeader } from "./MyHeader";
import {
    ContentArea,
    ContentHeader,
    ViewTab,
    Content,
    Date,
    Preview,
    PreviewMusic,
    AlbumImg,
    MusicTitle,
    MusicArtist,
    PreviewDiary,
    DiaryTitle,
    DiaryBody,
    TabList,
    TabCal
} from "./MyList.elements";

const contents = [
    {
        title: "안녕하세요1",
        author: "May1",
        body: "1일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용",
        pubDate: "2021년 9월 27일 목요일"
    },
    {
        title: "안녕하세요2",
        author: "May2",
        body: "2일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용",
        pubDate: "2021년 9월 28일 금요일"
    },
    {
        title: "안녕하세요3",
        author: "May3",
        body: "3일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용일기내용",
        pubDate: "2021년 9월 29일 토요일" 
    }
];

const MyList = () => {
    return (
        <>
            <MyHeader/>
            <ContentArea>
                <ContentHeader>나의 일기</ContentHeader>
                <ViewTab>
                    <TabList to="/mypage">리스트 보기</TabList>
                    <TabCal to="/mypage">달력 보기</TabCal>
                </ViewTab>
                {contents.map((content) => {
                    <Content>
                        <Date>{content.pubDate}</Date>
                        <Preview>
                            <PreviewMusic>
                                <AlbumImg src="https://image.bugsm.co.kr/album/images/350/40586/4058623.jpg"/>
                                <MusicTitle>Stupid Love Song</MusicTitle>
                                <MusicArtist>AKMU</MusicArtist>
                            </PreviewMusic>
                            <PreviewDiary>
                                <DiaryTitle>{content.title}</DiaryTitle>
                                <DiaryBody>{content.body}</DiaryBody>
                            </PreviewDiary>
                        </Preview>
                    </Content>
                })}
            </ContentArea>
        </>
    );
};

export default MyList;