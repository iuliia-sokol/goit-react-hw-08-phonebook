import styled from 'styled-components';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const AvatarWrapper = styled.div`
  border-radius: 50%;
  padding: 3px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

  & > img {
    border-radius: 50%;
    width: 150px;
    height: 140px;
  }
`;

export const Hint = styled.p`
  font-size: 16px;
  letter-spacing: 0.03em;
  margin: 0;
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

export const ConfirmationText = styled.p`
  margin: 0;
  font-weight: normal;
  & > span {
    font-weight: bold;
  }
`;
