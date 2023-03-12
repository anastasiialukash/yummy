import styled from 'styled-components';
export const Box = styled.div`
padding: 1px 600px;
background: black;
position: absolute;
top: 0;
width: 100%;
  
@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
    height: 100%;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 5px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const HeaderLink = styled.a`
  font-size: 24px;
  color: #fff;
  margin-top: 25px;
  font-weight: bold;
  text-decoration: none;
  padding-bottom: 10px;

&:hover {
	color: grey;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-top: 40px;
font-weight: bold;
`;

export const Button = styled.button`
  font-size: 20px;
  color: black;
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  border-radius: 50px;
  padding-bottom: 5px;
`
