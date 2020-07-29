import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

export default function LikeButton({secret, liked, numLikes, onSelect}) {
    return (
      <>
        <FaThumbsUp />
        <div key={secret} liked={liked} onClick={onSelect(liked)}>Like Button</div>
        <p>{numLikes}</p>
      </>
    );
}