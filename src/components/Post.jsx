import styles from './Post.module.css';
export function Post(props){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://github.com/LuizFernandoAS.png' />
                    <div className={styles.authorInfo}>
                        <strong>Luiz Fernando</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="10 de Maio às 13:00h" dateTime="2023-05-10 13:01:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#"> jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a>#nlw </a>{' '}
                    <a>#rocketseat</a>
                </p>
            </div>
        </article>
    )
}