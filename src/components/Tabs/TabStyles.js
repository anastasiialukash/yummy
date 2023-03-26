import styled from "styled-components";

export const TabBtn = styled.button`
  font-size: 50px;
  background-image: ${(props) => `url(${props.background})`};
  color: white;
  background-size: cover;
  padding: 10px 60px;
  opacity: 1;
  border: 0;
  outline: 0;
  align-items: flex-start;
  justify-content: left;
  display: flex;
  width: 100%;
  height: 260px;
  margin: 1.5rem auto 1.5rem;
  border-radius: 1rem;
  @media (max-width: 769px) {
    padding: 2rem 0;
  }`;