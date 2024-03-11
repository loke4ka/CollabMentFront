import { BaseSyntheticEvent, FunctionComponent, useEffect, useState } from "react";
import styles from "./FooterInstance.module.css";
// import { useChatClient } from './useChatClient'; // Подключите ваш хук useChatClient
// import { useAppContext } from "./AppContext";

import { ChannelFilters, ChannelOptions, ChannelSort, Message, User } from 'stream-chat';
import {
  Attachment,
  Channel,
  ChannelHeader,
  ChannelList,
  ChannelPreviewProps,
  Chat,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
  useMessageContext,
} from 'stream-chat-react';

import { useClient } from './useClient';

import 'stream-chat-react/dist/css/v2/index.css';
import UserSelectionModal from "./UserSelectionModal";

const userName = localStorage.getItem('username');
const userId = localStorage.getItem('username');
const userToken = localStorage.getItem('userToken');
const Url = 'https://loke4ka.pythonanywhere.com/';
const userData = JSON.parse(localStorage.getItem('userData') || '{}');

const apiKey = '4s4gsvyuueje';

const sort: ChannelSort = { last_message_at: -1 };
const filters: ChannelFilters = {
  type: 'messaging',
  members: { $in: [userId] },
};
const options: ChannelOptions = {
  limit: 10,
};

const user: User = {
  id: userId || '',
  name: userName || '',
  image: `${Url}${userData.profile_photo}` || `https://getstream.io/random_png/?id=${userId}&name=${userName}`,
};


const CustomChannelPreview = (props: ChannelPreviewProps) => {
  const { channel, setActiveChannel } = props;

  const { messages } = channel.state;
  const messagePreview = messages[messages.length - 1]?.text?.slice(0, 30);

  return (
    <div
      onClick={() => setActiveChannel?.(channel)}
      style={{ margin: '12px', display: 'flex', gap: '5px' }}
    >
      <div>
        <img src={`${Url}${userData.profile_photo}`} alt='channel-image' style={{ height: '36px' }} />
      </div>
      <div style={{ flex: 1 }}>
        <div>{channel.data?.name || 'Unnamed Channel'}</div>
        {messagePreview && <div style={{ fontSize: '14px' }}>{messagePreview}</div>}
      </div>
    </div>
  );
};


const FooterInstance: FunctionComponent = () => {

  const [showModal, setShowModal] = useState(false); // Состояние для отображения модального окна


  const chatClient = useClient({
    apiKey,
    user,
    tokenOrProvider: userToken,
  });

  if (!chatClient) {
    return <LoadingIndicator />;
  }


  // Функция для создания канала с выбранными пользователями
  const handleCreateChat = async (selectedUsers: any) => {
    try {
      const channel = chatClient.channel('messaging', { members: selectedUsers });
      await channel.create();
      console.log('Channel created:', channel);
    } catch (error) {
      console.error('Error creating channel:', error);
    }
  };

  return (
    <Chat client={chatClient} theme='str-chat__theme-light'>
    <section className={styles.footerInstance}>
      <div className={styles.visitorsFrame}>
        <div className={styles.visitors}>
          <div className={styles.visitorsChild} />
          <div className={styles.newarticleFrame}>
            
            <div className={styles.chats}>Chats</div>
          </div>
          <div className={styles.line} />
          <div style={{width: '100%'}}>
            {/* Preview={CustomChannelPreview} */}
          <ChannelList filters={filters} sort={sort} />
          </div>
        </div>
        <div className={styles.newArticle}>
          <div className={styles.newArticleChild} />
          <button className={styles.languageFrame} onClick={() => setShowModal(true)}>
            <div className={styles.languageFrameChild} />
            <div className={styles.startNewChat}>Start new chat</div>
          </button>
          {/* Модальное окно выбора пользователей */}
      {showModal && (
        <UserSelectionModal
        onClose={() => setShowModal(false)} // Функция для закрытия модального окна
        onCreateChat={handleCreateChat} // Функция для создания чата
        chatClient={chatClient} // Пропс chatClient
        userToken={userToken || ''} // Пропс userToken
        toggleModal={() => setShowModal(false)} // Функция для закрытия модального окна
        setCreatingChat={(value: boolean) => setShowModal(value)}
      />
      )}
        </div>
      </div>
      <div className={styles.chat}>

        <div className={styles.chatChild} />
        
        <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput/>
        </Window>
        <Thread />
      </Channel>
      </div>
    </section>
    </Chat>
  );
};


export default FooterInstance;
