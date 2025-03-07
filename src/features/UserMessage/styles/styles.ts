import styled from 'styled-components';

export const UserMessageContainer = styled.div`
  max-width: 65%;
  display: flex;
  gap: 10px;
  align-items: flex-end;
  align-self: flex-end;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
export const Message = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-end;
  border-radius: 10px;
  border-bottom-right-radius: 0;
  background-color: rgba(from #4785ff r g b / 50%);
  padding: 14px 53px 14px 16px;
  font-weight: 400;
  position: relative;

  ::selection {
    color: #4785ff;
    background-color: var(--white-color);
  }
`;
export const MessageText = styled.p`
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Time = styled.span`
  font-size: 12px;
  position: absolute;
  bottom: 7px;
  right: 8px;
`;
export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
