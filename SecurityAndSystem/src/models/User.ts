export interface User {
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
  about: string;
  email: string;
  interests: {
    name: string;
    icon: string;
  }[];
}
