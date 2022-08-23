import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import axios from "axios";

import './global.css'
import styles from './App.module.css'
import { useEffect } from 'react'

const posts = [
  {
  id: 1,
  author: {
    avatarUrl: 'https://github.com/andr3felipe.png',
    name: 'André Felipe',
    role: 'Web Developer'
  },
  content: [
    {type: 'paragraph', content: 'Fala galera 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto para treinar os fundamentos com React.js, Typescript e CSS Modules.'},
    {type: 'link', content: 'https://github.com/andr3felipe'}
  ],
  publishedAt: new Date('2022-08-22 00:01:34')
}
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {
          posts.map(post => {
            return (
              <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })
        }
      </main>
      </div>
    </div>
  )
}

export default App
