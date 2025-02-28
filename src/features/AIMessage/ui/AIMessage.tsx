import { CopyText } from '@/shared'
import { marked } from 'marked'
import styled from 'styled-components'

type Props = {
  messageText: string
  time: string
}

export const AIMessage = ({ messageText, time }: Props) => {
  const aimodel = 'ChatGPT'
  const aiversion = 'gpt-3.5-turbo'

  return (
    <AIMessageContainer>
      <AIModel>
        {aimodel}
        <AIVersion>{aiversion}</AIVersion>
      </AIModel>

      <Message>
        <img src="/images/ChatGPT.svg" alt="chat gpt" width={40} height={40} />
        <MessageText dangerouslySetInnerHTML={{ __html: marked(messageText) }} />
      </Message>

      <CopyAndTime>
        <Copy>
          -223 CAPS
          <CopyText text={messageText} />
        </Copy>

        {time}
      </CopyAndTime>
    </AIMessageContainer>
  )
}

const AIMessageContainer = styled.div`
  max-width: 65%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const AIModel = styled.div`
  width: 294px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 400;
`
const AIVersion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--accent-bg);
  border-radius: 14px;
  padding: 4px 12px;
  font-size: 14px;
  font-weight: 500;
`
const Message = styled.div`
  display: flex;
  gap: 16px;
`
const MessageText = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-top: 8px;
`
const CopyAndTime = styled.div`
  width: 294px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 98px;
  font-size: 12px;
  font-weight: 400;
`
const Copy = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
`
