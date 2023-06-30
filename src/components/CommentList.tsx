import Comment from "./Comment";
import { IComment } from "../interfaces";
import { useGeneralContext } from "../context";

export default function CommentsList({ postId }: { postId: number }) {
  const { comments } = useGeneralContext();

  const commentsData: IComment[] = comments.filter(
    (comment) => comment.postId === postId
  );

  return (
    <div>
      {commentsData.map(
        ({ id, author, children, avatarURL, dateTime, applauseQty }) => (
          <Comment
            username={author}
            dateTime={dateTime}
            avatarUrl={avatarURL}
            key={id}
            id={id}
            applauseQty={applauseQty}
          >
            {children}
          </Comment>
        )
      )}
    </div>
  );
}
