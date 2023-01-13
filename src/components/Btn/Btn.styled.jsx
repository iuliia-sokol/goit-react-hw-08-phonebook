import styled from 'styled-components';

export const BtnElement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  border-radius: 8px;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: white;
  background-color: #cab1c79d;
  box-shadow: 0px 12px 8px 4px #cab1b14d;
  transform: scale(1);
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: ${props =>
      props.status === 'add'
        ? 'rgba(0, 128, 75, 0.7)'
        : props.status === 'login' || props.status === 'update'
        ? 'rgba(71, 207, 150, 0.7)'
        : props.status === 'register' || props.status === 'edit'
        ? 'rgba(248, 220, 92, 0.7)'
        : props.status === 'goBack'
        ? 'rgba(0, 128, 75, 0.7)'
        : 'rgba(202, 30, 30, 0.6)'};
    box-shadow: 0px 14px 6px 4px #cab1b98c;
  }
  &:active {
    transform: scale(1.2);
  }

  & > svg {
    margin-right: 8px;
  }

  @media screen and (min-width: 768px) {
    padding: 8px 16px;
    font-size: 20px;
  }
`;
