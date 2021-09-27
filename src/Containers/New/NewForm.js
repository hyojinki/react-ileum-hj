import React, { useState } from "react";
import { FormArea, FormTopContainer, FormTitle, FormBody, MusicSearch } from "./New.elements";

export const NewForm = () => {
    const [title, setTitle] = useState('');
    const [music, setMusic] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = () => {
        console.log('title', title, 'music', music, 'body', body);
    }

    return (
        <>
            <FormArea onSubmit = {handleSubmit}>
                <FormTopContainer>
                    <FormTitle type="text" placeholder="제목" maxLength={120}/>
                    <MusicSearch/>
                    {/* <MusicChoice/> */}
                </FormTopContainer>
                <FormBody placeholder="오늘의 이야기를 들려주세요" autoComplete="off"/>
            </FormArea>
        </>
    );
};