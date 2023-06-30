import style from "./app.module.css";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";
import { postData } from "./mockData/postData";

function App() {
  return (
    <>
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {postData.map(
            ({ author, id, dateTime, avatarURL, content, role }) => (
              <div key={id}>
                <Post
                  author={author}
                  id={id}
                  dateTime={dateTime}
                  content={content}
                  avatarURL={avatarURL}
                  role={role}
                />
              </div>
            )
          )}
        </main>
      </div>
    </>
  );
}

export default App;
