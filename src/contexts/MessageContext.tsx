import React, { createContext, useState, useEffect, useCallback } from 'react';

type MessageType = 'success' | 'danger' | 'info';

type MessageState = {
  show: boolean;
  message: string;
  messageType: MessageType;
  showMessage: (message: MessageProps) => void;
};

export type MessageProps = {
  text: string;
  type: MessageType;
};

export const MessageContext = createContext<MessageState>({} as MessageState);

const MessageProvider: React.FC = ({ children }) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'danger' | 'info'>(
    'info',
  );

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
      }, 5000);
    }
  }, [show]);

  const showMessage = useCallback(({ text, type }: MessageProps) => {
    setMessage(text);
    setMessageType(type);
    setShow(true);
  }, []);

  return (
    <MessageContext.Provider
      value={{ show, message, showMessage, messageType }}>
      {children}
    </MessageContext.Provider>
  );
};

export default MessageProvider;
