import React, { useState, useEffect, useReducer } from 'react';
import './App.css';
import LikeButton from './components/LikeButton';
import reactpic from './react-pic.png';

function App() {
  const [likes, updateLikes] = useState(23);
  const [liked, updateLiked] = useReducer(liked => !liked, false);

  useEffect(() => {
    updateLikes(likes => likes + (liked ? 1 : -1));
  }, [liked]);

  return (
    <div className="card">
      <img src={reactpic} />
      <LikeButton 
      numLikes={likes}
      liked={liked}
      onSelect={updateLiked}
      />
    </div>
  );
}

export default App;
