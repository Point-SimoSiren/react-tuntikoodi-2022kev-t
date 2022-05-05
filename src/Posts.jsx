import './App.css'
import React, {useState, useEffect} from 'react'

const Posts = () => {

  // Posts komponetin tila eli state
  const [posts, setPosts] = useState("loading")
  const [showPosts, setShowPosts] = useState(false)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json()) // json data muutetaan javascriptiksi
    .then(oliot => setPosts(oliot)) // data sijoitetaan posts nimiseen stateen
  }
    , []
    )

  return (
   <>
   <h2 onClick={() => setShowPosts(!showPosts)}>
     {showPosts ? "Hide Posts from Typicode" : "Show typicode posts"}
     </h2>

   {posts && showPosts && posts.map(p => (
      <div key={p.id} className='posts'>
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
