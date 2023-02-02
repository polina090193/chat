import { MouseEventHandler } from 'react';
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

type ButtonProps = {
  buttonType?: "button" | "submit" | "reset" | undefined,
  buttonText: string,
  onClickAction: MouseEventHandler<HTMLButtonElement>,
  styles?: React.CSSProperties,
}

export const Button: React.FC<ButtonProps> = ({ buttonType = 'button', buttonText, onClickAction, styles }) => {

  return (
    <StyledButton type={buttonType} onClick={onClickAction}>{buttonText}</StyledButton>
  );
}

export default Button;
