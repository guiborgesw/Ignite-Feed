import { Post } from './components/Post.tsx';
import { Header } from './components/Header.tsx';
import { Sidebar } from './components/Sidebar.tsx';

import styles from './App.module.css';

import './global.css';

  const posts: {
    id: number
    author: {
      avatarUrl: string
      name: string
      role: string
    }
    content: {
      type: 'paragraph' | 'link'
      content: string
    }[]
    publishedAt: Date
  }[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/guiborgesw.png',
      name: 'Guilherme Borges',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-11-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-11-10 20:00:00')
  },
]

// Iteração

export function App() {
  console.log(posts)

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  )
}

