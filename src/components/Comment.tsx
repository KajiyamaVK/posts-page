import styles from "./comment.module.css";
import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import { displayDate } from "../functions";
import { ReactNode } from "react";
import Avatar from "./Avatar";
import { useGeneralContext } from "../context";

interface IComment {
  username: string;
  dateTime: Date;
  children: ReactNode;
  avatarUrl: string;
  applauseQty?: number;
  id: number;
}

export default function Comment({
  username,
  dateTime,
  children,
  avatarUrl,
  applauseQty = 0,
  id,
}: IComment) {
  const [applauseQtyState, setApplauseQty] = useState<number>(applauseQty);
  const [isApplaused, setIsApplaused] = useState<boolean>(false);
  const { comments, setComments } = useGeneralContext();

  function handleApplause() {
    setIsApplaused(!isApplaused);

    isApplaused
      ? setApplauseQty(applauseQtyState - 1)
      : setApplauseQty(applauseQtyState + 1);
  }

  function handleDeleteComment() {
    const remainingComments = comments.filter((comment) => comment.id !== id);
    setComments(remainingComments);
  }

  return (
    <article className={styles.comment}>
      <header>
        <div className={styles.userInfo}>
          <Avatar src={avatarUrl} />
          <div>
            <div className={styles.commentBox}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className={styles.userNameTime}>
                  <strong className={styles.username}>{username}</strong>
                  <time className={styles.commentTime}>
                    {displayDate(dateTime)}
                  </time>
                </div>
                <Trash
                  size={24}
                  className={`${styles.button} ${styles.trash}`}
                  onClick={handleDeleteComment}
                />
              </div>
              <div className={styles.commentText}>{children}</div>
            </div>
            <button
              onClick={handleApplause}
              className={`${styles.button} ${styles.thumbsUp} ${
                isApplaused && styles.isApplaused
              }`}
            >
              <ThumbsUp /> Aplaudir • {applauseQtyState}
            </button>
          </div>
        </div>
      </header>
    </article>
  );
}
