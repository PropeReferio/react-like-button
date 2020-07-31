import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

export default function LikeButton({liked, numLikes, onSelect}) {
    return (
      <>
        
    <button liked={liked} onClick={() => onSelect(liked)}>{liked ? "Unlike" : "Like"}{<FaThumbsUp />}</button>
        <p>Likes: {numLikes}</p>
      </>
    );
}