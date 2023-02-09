import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: ${props => props.theme.fontFamily};
  border-radius: 6px;
  border: none;
  outline: 0;

  color: ${props => props.theme.colors.textSecondary};
  background: ${props => props.theme.colors.main};
  background-origin: border-box;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background: ${props => props.theme.colors.secondary};
    cursor: pointer;
  }
`;

type ButtonWithText = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonText: string
}

export const Button: React.FC<ButtonWithText> = (props) => {

  return (
    <StyledButton {...props}>{props.buttonText}</StyledButton>
  );
}

export default Button;
