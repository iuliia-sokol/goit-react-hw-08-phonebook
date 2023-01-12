import styled from 'styled-components';

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AvatarWrapper = styled.div`
  border-radius: 50%;
  padding: 12px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
`;
export const ListItem = styled.div`
  min-width: 50vw;
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 32px;
  border-radius: 12px;
  background-color: hsla(215, 98%, 79%, 0.2);
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
`;

export const ListItemForm = styled.form`
  padding: 32px;
  font-size: 24px;
  color: #010101;

  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  gap: 16px;
  font-size: 24px;

  border-radius: 12px;

  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  min-width: 50%;
  border-radius: 8px;
  font-size: 20px;
  placeholder: grey;
  padding: 12px 16px;
  margin-left: 16px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
`;
