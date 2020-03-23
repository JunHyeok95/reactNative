import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const defaultContext: IUserContext = {
  userInfo: undefined,
  login: (email: string, password: string) => {},
  getUserInfo: () => {},
  logout: () => {},
};

const UserContext = createContext(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children}: Props) => {
  const [userInfo, setUserInfo] = useState<IUserInfo | undefined>(undefined);

  const login = (email: string, password: string): void => {
    // Use Eamil and Passowrd for login API
    // Get token and UserInfo via Login API
    AsyncStorage.setItem('token', 'let data = JSON.stringify()').then((data) => {
      // let json = JSON.parse(data)
      setUserInfo({
        name: 'WDJ',
        email: 'YJU.AC.KR',
      });
    });
  };

  const getUserInfo = (): void => {
    AsyncStorage.getItem('token')
      .then(value => {
        if (value) {
          setUserInfo({
            name: 'WDJ',
            email: 'YJU.AC.KR',
          });
        }
      })
      .catch(() => {
        setUserInfo(undefined);
      });
  };

  const logout = (): void => {
    AsyncStorage.removeItem('token');
    setUserInfo(undefined);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        login,
        getUserInfo,
        logout,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContextProvider, UserContext};