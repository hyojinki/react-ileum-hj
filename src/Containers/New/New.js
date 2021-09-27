import React from "react";
import { HeaderContainer, PageHeader, Line, ButtonArea, SaveButton } from "./New.elements";
import { NewContainer } from "./New.elements";
import { NewForm } from "./NewForm";

const New = () => {
    return (
        <>
            <HeaderContainer>
                <PageHeader>
                    나의 이야기 작성하기
                </PageHeader>
                <Line/>
            </HeaderContainer>

            <NewContainer>
                <NewForm/>
                <ButtonArea>
                    <SaveButton>저장하기</SaveButton>
                </ButtonArea>
            </NewContainer>
        </>
    )
}

export default New;