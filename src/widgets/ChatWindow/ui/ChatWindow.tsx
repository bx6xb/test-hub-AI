import { AIModelSelect, ChatInput, Messages } from '@/features'
import styled from 'styled-components'

export const ChatWindow = () => {
  return (
    <ChatWindowContainer>
      <ContentContainer>
        <Messages />

        <SelectAndInput>
          <AIModelSelect />
          <ChatInput />
        </SelectAndInput>
      </ContentContainer>
    </ChatWindowContainer>
  )
}

const ChatWindowContainer = styled.div`
  background-color: #121825;
  border-radius: 18px;
  flex: 1;
  padding: 20px;
`
const ContentContainer = styled.div`
  max-width: 1250px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const SelectAndInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`
