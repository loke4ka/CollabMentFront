import { useEffect, useState } from 'react';
import { StreamChat, TokenOrProvider, User } from 'stream-chat';

export type UseClientOptions = {
  apiKey: string;
  user: User;
  tokenOrProvider: TokenOrProvider;
};

export const useClient = ({
  apiKey,
  user,
  tokenOrProvider,
}: UseClientOptions): StreamChat | undefined => {
  const [chatClient, setChatClient] = useState<StreamChat>();

  useEffect(() => {
    const client = new StreamChat(apiKey);
    // prevents application from setting stale client (user changed, for example)
    let didUserConnectInterrupt = false;

    const connectionPromise = client.connectUser(user, tokenOrProvider).then(() => {
      if (!didUserConnectInterrupt) {
        setChatClient(client);
      }
    });

    return () => {
      didUserConnectInterrupt = true;
      setChatClient(undefined);
      // wait for connection to finish before initiating closing sequence
      connectionPromise
        .then(() => client.disconnectUser())
        .then(() => {
          console.log('connection closed');
        });
    };
  }, [apiKey, user.id, tokenOrProvider]);

  return chatClient;
};
