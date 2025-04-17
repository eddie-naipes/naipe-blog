import {Header} from "./components/header/Header.tsx";
import styles from "./App.module.css"
import {Sidebar} from "./components/sidebar/Sidebar.tsx";
import {Post} from "./components/post/Post.tsx";

function App() {

    return (
        <>
            <Header/>

            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    <Post
                        author={"Eddie Dias"}
                        content={"Hello World!"}
                    />
                </main>
            </div>

        </>

    )
}

export default App
