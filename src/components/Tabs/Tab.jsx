import styled from 'styled-components';

const Tab = styled.button`
  font-size: 50px;
  color: white;
  background-image: ${(props) => `url(${props.background})`};
  background-size: cover;
  padding: 10px 60px;
  opacity: 0.6;
  border: 0;
  outline: 0;
  align-items: flex-start;
  justify-content: left;
  display: flex;
  width: 100%;
  height: 300px;
  margin: 3.5rem auto 1.5rem;
  border-radius: 1rem;
  @media (max-width: 769px) {
    padding: 2rem 0;
  }
  ${({ active }) => active
          && `border-bottom: 2px solid black;
          opacity: 1;
          `}`;
export default Tab;
