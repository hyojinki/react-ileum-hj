import React from "react";
import {
    DetailHeader, BackToList, MusicArea, 
    Line, ContentArea, 
    ContentTitle, ContentInfo, ContentAuthor, 
    PubDate, ContentBody, UDBtn
} from "./Detail.elements";
import { MusicDetail } from "./MusicDetail";

const Detail = () => {
    return (
        <>
            <DetailHeader>
                <BackToList to="/mypage">&lt; 내 글 목록으로</BackToList>
            </DetailHeader>
            <MusicArea>
                <MusicDetail/>
            </MusicArea>
            <Line/>

            <ContentArea>
                <ContentTitle>일기 제목</ContentTitle>
                <ContentInfo>
                    <ContentAuthor>작성자</ContentAuthor>
                    <PubDate>2021년 9월 26일</PubDate>
                </ContentInfo>
                <ContentBody>일기내용일기내용일기내용일기내용일기내용일기내용</ContentBody>
            </ContentArea>

            
        
        </>
    )
}

export default Detail;