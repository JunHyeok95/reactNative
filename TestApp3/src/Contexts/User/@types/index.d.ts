interface IUserInfo {
  name: string;
  email: string;
}

interface IUserContext {
  userInfo: IUserInfo | undefined;
  login: (email: string, password: string) => void;
  getUserInfo: () => void;
  logout: () => void;
}