import { IComment } from "../interfaces";

const postData: IComment[] = [
  {
    id: 1,
    postId: 1,
    author: "João",
    children: "Muito bom!",
    avatarURL: "https://github.com/Felipe.png",
    dateTime: new Date("2023-06-27T17:49:03.000Z"),
    applauseQty: 0,
  },
  {
    id: 2,
    postId: 1,
    author: "Maria",
    children: "Concordo plenamente.",
    avatarURL: "https://github.com/Maria.png",
    dateTime: new Date("2023-06-27T17:49:03.000Z"),
    applauseQty: 2,
  },
  {
    id: 3,
    postId: 1,
    author: "Lucas",
    children: "Não gostei muito.",
    avatarURL: "https://github.com/Thiago.png",
    dateTime: new Date("2023-06-27T17:49:03.000Z"),
    applauseQty: 3,
  },
  {
    id: 4,
    postId: 2,
    author: "Ana",
    children: "Muito interessante!",
    avatarURL: "https://github.com/Ana.png",
    dateTime: new Date("2023-06-27T17:49:03.000Z"),
    applauseQty: 4,
  },
  {
    id: 5,
    postId: 2,
    author: "Pedro",
    children: "Não entendi muito bem.",
    avatarURL: "https://github.com/Pedro.png",
    dateTime: new Date("2023-06-27T17:49:03.000Z"),
    applauseQty: 5,
  },
  {
    id: 6,
    postId: 1,
    author: "Carla",
    children: "Adorei!",
    avatarURL: "https://github.com/Carla.png",
    dateTime: new Date("2023-06-27T17:49:03.000Z"),
    applauseQty: 6,
  },
];

export default postData;
