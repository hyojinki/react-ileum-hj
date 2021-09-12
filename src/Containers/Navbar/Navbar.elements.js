import styled from "styled-components";

// Container
export const NavContainer = styled.nav`
  width: 100%;

  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fffcf8;
`;

// Logo
export const LogoContainer = styled.div`
  width: 10%;
`;

export const Logo = styled.img`
  width: 80%;
  cursor: pointer;
`;

// Search Bar
export const SearchBarContainer = styled.section`
  width: 25%;

  padding: 0 1rem;

  display: flex;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 13rem;
  height: 2rem;

  padding: 0.5rem;

  font-size: 0.7rem;

  border: solid 1px #d1cfcb;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  width: 2.5rem;
  height: 2rem;

  padding: 0.5rem;
  cursor: pointer;

  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  background-color: #ccc0a3;

  & i {
    color: #fffcf8;
  }
`;

// Links
export const NavLinkContainer = styled.section`
  width: 65%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::nth-child(1) {
    justify-self: flex-start;
  }
`;

export const NavLink = styled.a`
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    translate: scale(1.05);
    color: #dba691;
  }
`;

export const RightNavLinksWrapper = styled.div`
  & * {
    margin: 0 1rem;
    font-size: 0.8rem;
  }
`;

export const GreetMessage = styled.p`
  font-size: 1.2rem;
  color: #998f76;
`;
