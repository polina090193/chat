import styled from 'styled-components';

const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  font-family: ${props => props.theme.fontFamily};
  border-radius: 6px;
  border: ${props => props.theme.colors.main} solid 1px;
  outline: 0;
  box-sizing: border-box;
  width: 200px;
  height: 30px;

  &:hover, &:focus {
    border-width: 2px;
  }
`;

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {

  return (
    <StyledInput {...props} />
  );
}

export default Input;
