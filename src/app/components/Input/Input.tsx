// import { MouseEventHandler } from 'react';
import { ChangeEventHandler } from 'react';
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

type InputProps = {
  className?: string,
  inputType?: string,
  inputValue: string,
  onChangeAction?: ChangeEventHandler<HTMLInputElement>,
}

export const Input: React.FC<InputProps> = ({ className, inputType = 'text', inputValue, onChangeAction }) => {

  return (
    <StyledInput className={className} type={inputType} value={inputValue} onChange={onChangeAction} ></StyledInput>
  );
}

export default Input;
