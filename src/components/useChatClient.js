import { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { getChatUserId, getChatUserName, getChatUserToken, chatApiKey } from './chatConfig';

export const useChatClient = () => {
  const [clientIsReady, setClientIsReady] = useState(false);
  const [chatClient, setChatClient] = useState(null); // Добавляем состояние для клиента чата

  useEffect(() => {
    const setupClient = async () => {
      try {
        const userId = await getChatUserId();
        const userName = await getChatUserName();
        const userToken = await getChatUserToken();

        console.log(userToken)

        const user = {
          id: userId,
          name: userName,
        };

        const client = StreamChat.getInstance(chatApiKey);
        await client.connectUser(user, userToken);
        
        // Устанавливаем клиент чата в состояние
        setChatClient(client);
        setClientIsReady(true);
      } catch (error) {
        if (error instanceof Error) {
          console.error(`An error occurred while connecting the user: ${error.message}`);
        }
      }
    };

    if (!chatClient || !chatClient.userID) {
      setupClient();
    }

    // Очищаем клиент при размонтировании компонента
    return () => {
      if (chatClient) {
        chatClient.disconnect();
        setChatClient(null);
      }
    };
  }, [chatClient]); // Передаем зависимость chatClient

  return {
    chatClient,
    clientIsReady,
  };
};
