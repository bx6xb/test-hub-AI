import styled, { css } from 'styled-components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { inputSchema, useAppSelector, useGetChatId, useSendMessageMutation } from '@/shared';
import { useTranslation } from 'react-i18next';

type Inputs = z.infer<typeof inputSchema>;

export const ChatInput = () => {
  const isChatDisabled = useAppSelector(state => state.appSlice.isChatDisabled);

  const { chatId } = useGetChatId();

  const { t } = useTranslation();

  const [sendMessage] = useSendMessageMutation();

  const { register, handleSubmit, reset } = useForm<Inputs>({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      string: '',
    },
    disabled: isChatDisabled,
  });

  const onFormSubmit: SubmitHandler<Inputs> = async ({ string }) => {
    reset();

    await sendMessage({
      message: string,
      chatId,
    });
  };

  return (
    <ChatInputContainer onSubmit={handleSubmit(onFormSubmit)} $isFormDisabled={isChatDisabled}>
      <Input type="text" placeholder={t('ChatInput_input_placeholder')} {...register('string')} />
      <SendMessage type="submit">
        <img src="/images/send.svg" alt="send message" />
      </SendMessage>
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.form<{ $isFormDisabled: boolean }>`
  width: 100%;
  position: relative;

  ${({ $isFormDisabled }) =>
    $isFormDisabled &&
    css`
      pointer-events: none;
      filter: brightness(0.6);
    `}
`;
const Input = styled.input`
  width: 100%;
  height: 66px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  background-color: transparent;
  padding: 0 70px 0 20px;
  color: var(--white-color);

  &::placeholder {
    color: var(--input-placeholder-color);
  }
`;
const SendMessage = styled.button`
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  border-radius: 8px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
