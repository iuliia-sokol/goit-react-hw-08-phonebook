import styled from 'styled-components';

export const PhoneLink = styled.a`
  text-decoration: none;
  color: inherit;

  & > span {
    font-weight: normal;
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AvatarWrapper = styled.div`
  border-radius: 50%;

  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

  & > img {
    border-radius: 50%;
    width: 80px;
  }
`;
export const ListItem = styled.li`
  min-width: 50vw;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 32px;
  border-radius: 12px;
  background-color: hsla(215, 98%, 79%, 0.1);
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
`;

export const ListItemData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 24px;
  margin-right: 36px;
  border-radius: 12px;
  padding: 12px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
`;

export const DataWrapper = styled.div`
  & > span {
    font-weight: normal;
  }
`;
