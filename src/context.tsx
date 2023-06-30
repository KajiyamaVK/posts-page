import React from "react";

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useContext,
  FC,
} from "react";
import commentsData from "./mockData/commentsData";
import { IComment } from "./interfaces";

interface IGeneralContext {
  comments: IComment[];
  setComments: Dispatch<SetStateAction<IComment[]>>;
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
  userAvatarUrl: string;
  setUserAvatarUrl: Dispatch<SetStateAction<string>>;
}

export const GeneralContext = createContext<IGeneralContext>({
  comments: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setComments: () => {},
  user: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: () => {},
  userAvatarUrl: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserAvatarUrl: () => {},
});

export const GeneralProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [comments, setComments] = useState<IComment[]>(commentsData);
  const [user, setUser] = useState<string>("Victor Kajiyama");
  const [userAvatarUrl, setUserAvatarUrl] = useState<string>(
    "https://github.com/kajiyamaVK.png"
  );

  return (
    <GeneralContext.Provider
      value={{
        comments,
        setComments,
        setUser,
        user,
        userAvatarUrl,
        setUserAvatarUrl,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export function useGeneralContext() {
  const context = useContext(GeneralContext);
  const {
    comments,
    setComments,
    user,
    setUser,
    userAvatarUrl,
    setUserAvatarUrl,
  } = context;

  return {
    comments,
    setComments,
    user,
    setUser,
    userAvatarUrl,
    setUserAvatarUrl,
  };
}
