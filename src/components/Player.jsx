// // import React from 'react';
// // import ReactPlayer from 'react-player';
// // import './Player.css';

// // const Player = ({ song, isPlaying, togglePlayPause }) => {
// //   if (!song) return null;

// //   console.log(song);
  

  

// //   return (
// //     <div className="player">
// //       <img src={`https://cms.samespace.com/assets/${song.cover}`} alt={song.title} />
// //       <h2>{song.title}</h2>
// //       <h3>{song.artist}</h3>
// //       <div>
// //         <audio src={song?.url} type="audio/mp3"/>
// //       </div>
    
// //       <div className="controls">
// //         <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Player;

// import React, { useState, useRef, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import './Player.css';

// const Player = ({ song, isPlaying, togglePlayPause, onNext, onPrev }) => {
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const audioRef = useRef(null);

//   // useEffect(() => {
//   //   if (audioRef.current) {
//   //     if (isPlaying) {
//   //       audioRef.current.play();
//   //     } else {
//   //       audioRef.current.pause();
//   //     }
//   //   }
//   // }, [isPlaying]);

//   // useEffect(() => {
//   //   if (audioRef.current) {
//   //     audioRef.current.load();  
//   //   }
//   // }, [song]);

//   const handleTimeUpdate = () => {
//     if (audioRef.current) {
//       setCurrentTime(audioRef.current.currentTime);
//       setDuration(audioRef.current.duration);
//     }
//   };

//   const handleProgressChange = (e) => {
//     const newTime = e.target.value;
//     if (audioRef.current) {
//       audioRef.current.currentTime = newTime;
//       setCurrentTime(newTime);
//     }
//   };

//   const handleEnded = () => {
//     if (onNext) {
//       onNext();
//     }
//   };
//   console.log(song);
  

//   return (
//     <div className="player">
//       <img 
//         src={`https://cms.samespace.com/assets/${song?.cover}`} 
//         alt={song?.title} 
//         className="cover-art"
//       />
//       <h2 className="title">{song?.title}</h2>
//       <h3 className="artist">{song?.artist}</h3>
      
//       <div className="player-controls">
//         <audio 
//           ref={audioRef} 
//           src={song?.url} 
//           type="audio/mp3" 
//           onTimeUpdate={handleTimeUpdate} 
//           onEnded={handleEnded}
//         />
        
//         <div className="controls">
//           <button onClick={onPrev} className="control-button">Prev</button>
//           <button onClick={togglePlayPause} className="play-pause-button">
//             {isPlaying ? 'Pause' : 'Play'}
//           </button>
//           <button onClick={onNext} className="control-button">Next</button>
//         </div>

//         <input
//           type="range"
//           min="0"
//           max={duration || 0}
//           value={currentTime}
//           onChange={handleProgressChange}
//           className="progress-bar"
//         />
        
//         <div className="time-info">
//           <span>{Math.floor(currentTime)}s</span>
//           <span>{Math.floor(duration)}s</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// Player.propTypes = {
//   song: PropTypes.shape({
//     cover: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     artist: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired,
//   }),
//   isPlaying: PropTypes.bool.isRequired,
//   togglePlayPause: PropTypes.func.isRequired,
//   onNext: PropTypes.func.isRequired,
//   onPrev: PropTypes.func.isRequired,
// };

// export default Player;
// src/components/Player.js
import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import './Player.css';
import { FaBackward, FaForward, FaPlayCircle } from 'react-icons/fa';
import { FaRegCirclePause } from 'react-icons/fa6';

const Player = ({ song, isPlaying, togglePlayPause, onNext, onPrev }) => {
  const playerRef = useRef(null);

  return (
    <div className="player">
      {song ? (
        <>
            <h3 className='song_name'>{song?.name}</h3>
            <p>{song.artist}</p>
          <img src={`https://cms.samespace.com/assets/${song.cover}`} alt={song.title} />
          <div className='player-container'>
        
          <ReactPlayer
            ref={playerRef}
            url={song.url}
            playing={isPlaying}
            controls={true}
            height={40}
            config={{
              youtube: {
                playerVars: { showinfo: 1 }
              }}}
          />
            </div>
          <div className="controls">
            <button onClick={onPrev}><FaBackward color="#FFFFFF60" size={20}/></button>
            <button onClick={togglePlayPause}>{isPlaying ? <FaRegCirclePause size={20}/> : <FaPlayCircle size={20}/>}</button>
            <button onClick={onNext}><FaForward color="#FFFFFF60" size={20}/></button>
          </div>
        </>
      ) : (
        <p>Select a song to play</p>
      )}
    </div>
  );
};

export default Player;
