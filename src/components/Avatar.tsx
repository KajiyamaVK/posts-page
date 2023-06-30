import styles from "./avatar.module.css";

interface AvatarProps {
  src: string;
  bordered?: boolean;
}

export default function Avatar({ src, bordered }: AvatarProps) {
  return (
    <img
      src={src}
      className={`${styles.avatar} ${bordered && styles.bordered}`}
    />
  );
}
