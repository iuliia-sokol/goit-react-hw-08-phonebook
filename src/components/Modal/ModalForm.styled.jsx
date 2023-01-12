import styled from 'styled-components';

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AvatarWrapper = styled.div`
  border-radius: 50%;
  padding: 3px;

  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

  & > img {
    border-radius: 50%;
    width: 150px;
    /* height: 120px; */
  }
`;
export const ListItem = styled.div`
  min-width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  padding: 32px;
  border-radius: 12px;
  background-color: hsla(215, 98%, 79%, 0.2);
`;

export const ContentWrapper = styled.div`
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 32px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
`;

export const ListItemForm = styled.form`
  font-size: 20px;
  color: #010101;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 12px;
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
  outline-color: yellow;
  border-radius: 8px;
  font-size: 20px;
  placeholder: grey;
  padding: 12px 16px;
  margin-left: 16px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
`;
