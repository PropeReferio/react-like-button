import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

export default function LikeButton({secret, numLikes, onSelect}) {
    return (
      <>
        <FaThumbsUp />
        <div key={secret} onClick={onSelect}>Like Button</div>
        <p>{numLikes}</p>
      </>
    );
}