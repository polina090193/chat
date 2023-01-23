import styled from 'styled-components';

const StyledUserNameForm = styled.div`
  // Your style here
`;

export function UserNameForm() {

  const onChange = () => console.log('onChange')
  const onSubmit = () => console.log('onSubmit')

  return (
    <StyledUserNameForm>
      <div>
        <div>
          <h2>What is your username?</h2>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Enter name"
              onChange={onChange}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </StyledUserNameForm>
  );
}

export default UserNameForm;
