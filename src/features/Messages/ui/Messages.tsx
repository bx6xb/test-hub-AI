import { AIMessage, UserMessage } from '@/features';
import styled from 'styled-components';
import {
  AIModelsValues,
  getTimeFromIsoDate,
  Loader,
  useGetChatId,
  useLazyFetchMessagesQuery,
} from '@/shared';
import { useEffect, useRef } from 'react';

export const Messages = () => {
  const { chatId } = useGetChatId();

  const [fetchMessages, { data: messages, isLoading }] = useLazyFetchMessagesQuery();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatId) {
      fetchMessages({ chatId });
    }
  }, [chatId]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <MessagesContainer>
      {isLoading ? (
        <Loader loaderSize={25} />
      ) : (
        messages?.data
          .slice()
          .reverse()
          .map(({ role, content, created_at, id, model }) => {
            const Component = role === 'user' ? UserMessage : AIMessage;
            const time = getTimeFromIsoDate(created_at);

            return (
              <Component
                key={id}
                messageText={content}
                time={time}
                {...(role === 'assistant'
                  ? {
                      aiId: model?.owned_by as AIModelsValues,
                      aiVersion: model?.id,
                      chatId,
                    }
                  : {})}
              />
            );
          })
      )}
      <div ref={messagesEndRef} />
    </MessagesContainer>
  );
};

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  overflow-y: auto;
  padding-right: 10px;
`;
