import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;

  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fffcf8;
`;

export const Logo = styled.img`
  width: 6.3rem;
`;

export const SearchBarContainer = styled.section`
  width: 25%;
  display: flex;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 13rem;
  height: 1rem;

  padding: 1rem 0.5rem;

  font-size: 0.8rem;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const SearchButton = styled.button`
  height: 1rem;

  padding: 1rem;
  cursor: pointer;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const NavLinkContainer = styled.section`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::nth-child(1) {
    justify-self: flex-start;
  }
`;

export const NavLink = styled.a``;

export const GreetMessage = styled.p`
  font-size: 1.1rem;
`;
