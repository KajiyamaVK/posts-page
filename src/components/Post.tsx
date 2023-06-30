import styles from "./Post.module.css";
import Avatar from "./Avatar";
import { useState } from "react";
import { ReactNode } from "react";
import { displayDate } from "../functions";
import CommentsList from "./CommentList";
import { useGeneralContext } from "../context";
import { IComment } from "../interfaces";

interface PostProps {
  id: number;
  author: string;
  role: string;
  dateTime: Date;
  content: ReactNode;
  avatarURL: string;
}

export default function Post({
  id,
  author,
  role,
  dateTime,
  content,
  avatarURL,
}: PostProps) {
  const [commentValue, setCommentValue] = useState<string>("");
  const { comments, setComments, user, userAvatarUrl } = useGeneralContext();

  function handleCommentSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newComment: IComment = {
      id: comments.length + 1,
      postId: id,
      author: user,
      avatarURL: userAvatarUrl,
      dateTime: new Date(),
      applauseQty: 0,
      children: commentValue,
    };

    setComments([...comments, newComment]);
    setCommentValue("");
  }

  return (
    <article className={styles.post} id={`post${id}`}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <Avatar src={avatarURL} bordered />

          <div className={styles.authorInfo}>
            <strong className={styles.authorName}>{author}</strong>
            <span className={styles.authorRole}>{role}</span>
          </div>
        </div>

        <time
          title="01 de Maio de 2023 às 08:00"
          dateTime="2023-05-01"
          className={styles.postTime}
        >
          {displayDate(dateTime)}
        </time>
      </header>
      <div className={styles.content}>
        <>{content}</>
      </div>

      <form className={styles.commentForm} onSubmit={handleCommentSubmit}>
        <strong>Deixe seu comentário</strong>
        <textarea
          id="comment"
          placeholder="Deixe um comentário"
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          className={styles.commentInput}
        />
        <footer className={styles.footer}>
          <button type="submit" className={styles.commentButton}>
            Comentar
          </button>
        </footer>
      </form>
      <CommentsList postId={id} />
    </article>
  );
}
