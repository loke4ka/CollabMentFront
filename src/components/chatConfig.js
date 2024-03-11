
export const chatApiKey = '4s4gsvyuueje';

export const getChatUserId = async () => {
  try {
    const userId = localStorage.getItem('username');
    return userId;
  } catch (error) {
    console.error('Error getting user ID:', error);
    return null;
  }
};

export const getChatUserName = async () => {
  try {
    const userName =  localStorage.getItem('username');
    return userName;
  } catch (error) {
    console.error('Error getting user name:', error);
    return null;
  }
};

export const getChatUserToken = async () => {
  try {
    const userToken =  localStorage.getItem('userToken');
    return userToken;
  } catch (error) {
    console.error('Error getting user token:', error);
    return null;
  }
};
