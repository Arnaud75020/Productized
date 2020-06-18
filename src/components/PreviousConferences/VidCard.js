import React, { useState } from 'react';
import './VidCard.css';

function VidCard(props) {
  const [isShown, setIsShown] = useState(false);
  const video = props;
  console.log(props);

  return (
    <div className="videocard-div">
      {isShown ? (
        <iframe
          width="356"
          height="200"
          title={video.title}
          src={`${video.link}?autoplay=1`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          webkitallowfullscreen
          mozallowfullscreen
          onMouseLeave={() => setIsShown(false)}
        />
      ) : (
        <img
          width="356"
          height="200"
          src={video.image}
          alt={video.title}
          onMouseEnter={() => setIsShown(true)}
        />
      )}
    </div>
  );
}

export default VidCard;
