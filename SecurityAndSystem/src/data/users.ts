import { User } from "@/models/User";

export const users: User[] = [
  {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    avatar: "1.jpg",
    about:
      "I'm a web developer, designer, and gaming enthusiast. I love to explore new technologies and create innovative solutions.",
    email: "john@example.com",
    interests: [
      {
        name: "Web Development",
        icon: "notebook",
      },
      {
        name: "Design",
        icon: "colors",
      },
      {
        name: "Gaming",
        icon: "joystick",
      },
    ],
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    username: "janedoe",
    avatar: "2.jpg",
    about:
      "I'm a web developer, designer, and gaming enthusiast. I love to explore new technologies and create innovative solutions.",
    email: "jane@example.com",
    interests: [
      {
        name: "Web Development",
        icon: "notebook",
      },
      {
        name: "Design",
        icon: "colors",
      },
      {
        name: "Gaming",
        icon: "joystick",
      },
    ],
  },
  {
    firstName: "Bob",
    lastName: "Doe",
    username: "bobdoe",
    avatar: "3.jpg",
    about:
      "I'm a web designer and travel enthusiast. I love to explore new technologies and create innovative solutions.",
    email: "bob@example.com",
    interests: [
      {
        name: "Design",
        icon: "colors",
      },
      {
        name: "Travel",
        icon: "plane",
      },
    ],
  },
];
