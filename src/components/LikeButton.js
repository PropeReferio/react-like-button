import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

export default function LikeButton({liked, numLikes, onSelect}) {
    return (
      <>
        <button className={`button ${liked ? 'liked' : 'unliked'}`} // Change styles 
          liked={liked} // based on liked or unliked
          onClick={
            () => onSelect(liked)}>
              {liked ? "Unlike" : "Like"}  {<FaThumbsUp />}
        </button>
            <p>Alex Johnson, Spencer Partridge and {numLikes} others liked this</p>
      </>
    );
}