import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | IG News</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>07 de fevereiro de 2022</time>
                        <strong>Um título bem interessante para o post</strong>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nobis, fugit quo corrupti ut tempora incidunt alias nam? Odio natus placeat odit, delectus architecto ut? Modi culpa praesentium neque. Iure.</p>
                    </a>
                    <a href="#">
                        <time>07 de fevereiro de 2022</time>
                        <strong>Um título bem interessante para o post</strong>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nobis, fugit quo corrupti ut tempora incidunt alias nam? Odio natus placeat odit, delectus architecto ut? Modi culpa praesentium neque. Iure.</p>
                    </a>
                    <a href="#">
                        <time>07 de fevereiro de 2022</time>
                        <strong>Um título bem interessante para o post</strong>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nobis, fugit quo corrupti ut tempora incidunt alias nam? Odio natus placeat odit, delectus architecto ut? Modi culpa praesentium neque. Iure.</p>
                    </a>
                </div>
            </main>
        </>
    );
} 