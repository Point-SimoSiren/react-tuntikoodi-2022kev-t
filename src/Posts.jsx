import './App.css'
import React, {useState, useEffect} from 'react'

const Posts = () => {

  // Posts komponetin tila eli state
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json()) // json data muutetaan javascriptiksi
    .then(oliot => setPosts(oliot)) // data sijoitetaan posts nimiseen stateen
  }
    , []
    )

  return (
   <>
   <h2>Posts from Typicode</h2>

   {posts && posts.map(p => (
      <div key={p.id}>
        <h3>{p.title}</h3>
        <p>Author: {p.userId}</p>
        <p>{p.body}</p>
      </div>
   )

    )}
   
   </>
  )
}

export default Posts
