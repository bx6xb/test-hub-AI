import styled from 'styled-components';
import { LangSwitcher } from './LangSwitcher';
import { memo } from 'react';

export const SidebarHeader = memo(() => {
  return (
    <LogoAndLang>
      <img src="/images/logo.svg" alt="logo" width={104} height={30} />

      <LangSwitcher />
    </LogoAndLang>
  );
});

const LogoAndLang = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;
