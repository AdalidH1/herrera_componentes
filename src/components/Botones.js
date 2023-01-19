import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
function Botones() {
    
  return (
    <div>
    <a href='https://github.com/AdalidH1' target={'_blank'}><Button>GitHub</Button></a>
    <a href='https://utd.edu.mx' target={'_blank'}><Button primary>UTD</Button></a>
    <a href='https://www.facebook.com/adalid.herrera.39545?mibextid=ZbWKwL' target={'_blank'}><Button>Facebook</Button></a>
  </div>
  );
}
export default Botones;