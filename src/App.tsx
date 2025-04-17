import {Header} from "./components/header/Header.tsx";
import styles from "./App.module.css"
import {Sidebar} from "./components/sidebar/Sidebar.tsx";
import {Post} from "./components/post/Post.tsx";
import {PostProps} from "./shared/PostProps.ts";
import {uuidv7} from "uuidv7";
import {LINK_PICTURE_PROFILE} from "./data/mockConstants.ts";


const posts: PostProps[] = [
    {
        id: 1,
        author: {
            id: "1",
            name: "Eddie Dias",
            role: "Web Developer",
            avatarUrl: LINK_PICTURE_PROFILE
        },
        content: [
            {
                type: "PARAGRAPH",
                content: "Fala galera, beleza? 👋"
            },
            {
                type: "PARAGRAPH",
                content: "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite, onde desenvolvi uma aplicação para acompanhar o consumo de café da Rocketseat."
            },
            {
                type: "LINK",
                content: "👉 jane.design/doctorcare"
            }
        ],
        publishedAt: new Date("2023-10-10 08:13:30")
    },
    {
        id: 1,
        author: {
            id: "1",
            name: "Eddie Dias",
            role: "Web Developer",
            avatarUrl: LINK_PICTURE_PROFILE
        },
        content: [
            {
                type: "PARAGRAPH",
                content: "Fala galera, beleza? 👋"
            },
            {
                type: "PARAGRAPH",
                content: "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite, onde desenvolvi uma aplicação para acompanhar o consumo de café da Rocketseat."
            },
            {
                type: "LINK",
                content: "👉 jane.design/doctorcare"
            }
        ],
        publishedAt: new Date("2023-10-10 08:13:30")
    },
]


function App() {

    return (
        <>
            <Header/>

            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                id={post.id}
                                key={uuidv7()}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        )
                    })};
                </main>
            </div>

        </>

    )
}

export default App
