import React from "react";
import LogoImg from "./1eum_logo.png";

import {
  NavContainer,
  Logo,
  SearchBarContainer,
  SearchBar,
  SearchButton,
  NavLinkContainer,
  NavLink,
  GreetMessage,
} from "./Navbar.elements";

const Navbar = () => {
  return (
    <div>
      <NavContainer>
        <Logo src={LogoImg} />
        <SearchBarContainer>
          <SearchBar />
          <SearchButton>검색</SearchButton>
        </SearchBarContainer>
        <NavLinkContainer>
          <NavLink>사용 안내</NavLink>
          <GreetMessage>어서오세요 :)</GreetMessage>
          <div>
            <NavLink>내 페이지</NavLink>
            <NavLink>로그아웃</NavLink>
            <NavLink>피드백 남기기</NavLink>
          </div>
        </NavLinkContainer>
      </NavContainer>
    </div>
  );
};

export default Navbar;
