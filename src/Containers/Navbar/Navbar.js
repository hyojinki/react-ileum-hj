import React from "react";
import LogoImg from "./1eum_logo.png";

import {
  NavContainer,
  LogoContainer,
  Logo,
  SearchBarContainer,
  SearchBar,
  SearchButton,
  NavLinkContainer,
  NavLink,
  RightNavLinksWrapper,
  GreetMessage,
} from "./Navbar.elements";

const Navbar = () => {
  return (
    <div>
      <NavContainer>
        <LogoContainer>
          <Logo src={LogoImg} onClick={() => {}} />
        </LogoContainer>

        <SearchBarContainer>
          <SearchBar placeholder="검색하기" />
          <SearchButton>
            <i class="fas fa-search"></i>
          </SearchButton>
        </SearchBarContainer>
        <NavLinkContainer>
          <NavLink>사용 안내</NavLink>
          <GreetMessage>어서오세요 :)</GreetMessage>
          <RightNavLinksWrapper>
            <NavLink>내 페이지</NavLink>
            <NavLink>로그아웃</NavLink>
            <NavLink>피드백 남기기</NavLink>
          </RightNavLinksWrapper>
        </NavLinkContainer>
      </NavContainer>
    </div>
  );
};

export default Navbar;
