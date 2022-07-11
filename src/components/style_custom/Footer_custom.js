import styled from 'styled-components';

export const Foot = styled.div`
  height: auto;
  background-color: #f9f9fb;
`;

export const Content = styled.div`
  margin: 20px auto 0px;
  display: flex;
  flex-wrap: wrap;
  padding: 100px;
  font-family: Mulish;
  font-size: 18px;
  color: #848484;

  & > div :nth-child(2) {
    width: 300px;
    word-wrap: break-word;
  }

  & > div {
    font-size: 17px;
    word-wrap: normal;
  }

  ul {
    list-style-type: none;
    font-weight: 700;
    color: black;
    padding-left: 90px;
    width: 220px;
    font-size: 18px;
  }

  li {
    font-weight: normal;
    padding-top: 1rem;
    color: #848484;
    font-size: 17px;
  }
`;