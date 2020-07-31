import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

export default function LikeButton({liked, numLikes, onSelect}) {
    return (
      <>
        
    <button liked={liked} onClick={() => onSelect(liked)}>Like Button {<FaThumbsUp />}</button>
        <p>Likes: {numLikes}</p>
      </>
    );
}