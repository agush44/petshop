import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  border: none;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgb(232, 222, 242) 20%,
    rgb(209, 208, 230) 50%,
    rgb(174, 190, 230) 100%
  );

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1rem 1.2rem 1rem;
`;

export const HeaderTop = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

export const HeaderBottom = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 5.5rem;
  margin-left: 1rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 45%;
  height: 20%;
  margin-left: 5rem;
  border: none;
  box-shadow: -2px 13px 28px -4px rgba(0, 0, 0, 0.48);
  -webkit-box-shadow: -2px 13px 28px -4px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: -2px 13px 28px -4px rgba(0, 0, 0, 0.48);
`;

export const SearchBar = styled.input`
  height: 100%;
  border: none;
  padding: 0.7rem;
  width: 100%;
  border: none;
  font-size: 0.8rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  height: 45px;
  width: 43px;
  background-color: #3a58d0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  padding: 0.55rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled.i`
  font-size: 20px;
  color: #f9f7f0;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 0.6rem;
  justify-content: flex-end;
  padding-top: 1rem;
  padding-right: 1rem;
`;

export const SocialIcon = styled.a`
  font-size: 1em;
  color: #f9f7f0;
  text-decoration: none;
`;

export const AccountCartContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const Button = styled.button`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent; /* Fondo transparente */
  border: none;
  padding: 0 1rem;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
    color: #324dba;
  }

  span {
    font-size: 0.9rem;
    color: #324dba;
  }
`;
