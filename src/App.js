import React, { useState } from 'react';
import './App.css';
import LikeButton from './components/LikeButton';

function App() {
  const [likes, updateLikes] = useState(23);
  const [liked, updateLiked] = useState(false);

  return (
    <LikeButton 
    secret='like-button'
    numLikes={likes}
    liked={liked}
    // status={liked}
    onSelect={function clickLike(liked) { //This function is happening, but the else block
      // never fires.
      if (liked) {
        updateLikes(likes + 1);
       } else { updateLikes(likes - 1)
       };
      updateLiked(!liked);
      }
    }
    />
    // onClick function here, or in LikeButton.js?
  );
}

export default App;
