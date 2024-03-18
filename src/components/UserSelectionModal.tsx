import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserSelectionModal.module.css';

const API_URL = 'https://loke4ka.pythonanywhere.com';

interface User {
  id: string;
  username: string;
}

interface UserSelectionModalProps {
  onClose: () => void;
  onCreateChat: (selectedUsers: string[]) => void;
  chatClient: any; // Замените 'any' на соответствующий тип вашего chatClient
  userToken: string;
  toggleModal: () => void;
  setCreatingChat: (value: boolean) => void;
}

const localUserName = localStorage.getItem('username') || '';

const UserSelectionModal: React.FC<UserSelectionModalProps> = ({ onClose, onCreateChat, chatClient, userToken, toggleModal, setCreatingChat }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [page, setPage] = useState(1);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(`${API_URL}/api/users`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleUserSelection = (userId: string) => {
    setSelectedUsers((prevSelectedUsers) => {
      if (prevSelectedUsers.includes(userId)) {
        return prevSelectedUsers.filter((id) => id !== userId);
      } else {
        return [...prevSelectedUsers, userId];
      }
    });
  };

  const handleCreateChat = async () => {

    const userIds = selectedUsers.map(username => {
      const user = users.find(u => u.username === username);
      return user ? user.username : null;
    }).filter(userId => typeof userId === 'string');
    
    // Добавляем пользователя, создающего канал, к списку участников чата
    userIds.push(localUserName);

    console.log('Creating chat with users:', userIds);
    if (userIds.length > 0 && chatClient) {
      setCreatingChat(true);
      try {
        const channel = chatClient.channel('messaging', {
          members: userIds , 
          name: `Chat with ${selectedUsers.join(', ')}`, 
        });
        await channel.create();
        toggleModal();
      } catch (error) {
        console.error('Error creating chat:', error);
      } finally {
        setCreatingChat(false);
      }
    }
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>Select users</h2>
        <ul className={styles.userList}>
          {users.map(user => (
            <li key={user.id} className={styles.userItem}>
              <label className={styles.userLabel}>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.username)}
                  onChange={() => handleUserSelection(user.username)}
                />
                <span className={styles.checkmark}></span>
                {user.username}
              </label>
            </li>
          ))}
        </ul>
        {users.length < 100 && (
          <button className={styles.loadMoreButton} onClick={handleLoadMore}>
            Load More
          </button>
        )}
        <div className={styles.modalActions}>
          <button className={styles.createButton} onClick={handleCreateChat}>
            Create Chat
          </button>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSelectionModal;
