import React, { useState, useEffect } from 'react';
import './App.css';
import LikeButton from './components/LikeButton';

function App() {
  const [likes, updateLikes] = useState(23);
  const [liked, updateLiked] = useState(false);

  useEffect(() => {
    updateLikes(likes => likes + (liked ? 1 : -1));
  }, [liked]);

  return (
    <LikeButton 
    numLikes={likes}
    liked={liked}
    onSelect={function clickLike(liked) {
      updateLiked(liked => !liked);
      }
    }
    />
  );
}

export default App;
