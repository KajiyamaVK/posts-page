import { ReactNode } from "react";

interface post {
  id: number;
  author: string;
  content: ReactNode;
  avatarURL: string;
  dateTime: Date;
  role: string;
}

export const postData: post[] = [
  {
    id: 1,
    author: "Diego Fernandes",
    content: (
      <div>
        <p>Fala galeraa ?? </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.
        </p>
        <a href="">jane.design/doctorcare </a>
        <a href="">#novoprojeto </a> <a href="">#nlw </a>{" "}
        <a href="">#rocketseat</a>{" "}
      </div>
    ),
    avatarURL: "https://www.github.com/diego3g.png",
    dateTime: new Date("2023-05-01T12:00:00.000Z"),
    role: "CTO - Rocketseat",
  },
  {
    id: 2,
    author: "Mayk Brito",
    content: (
      <>
        <p>Salve people </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          velit facilis temporibus possimus, harum quis ex, suscipit nemo
          perferendis ducimus similique molestiae quibusdam at consequatur
          eveniet tempora repellat a officiis.
        </p>
      </>
    ),
    avatarURL: "https://www.github.com/maykbrito.png",
    dateTime: new Date("2023-05-01T12:00:00.000Z"),
    role: "Instrutor - Rocketseat",
  },
];
