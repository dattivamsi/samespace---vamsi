import React, { useState } from "react";
import "./SongList.css";

const SongList = ({ songs, playSong, handleSearch }) => {
  const [activeList,setActiveList] = useState("ForYou")
  const handleSongClick = (song) => {
    playSong(song);
  };

  const handleClick = (track) =>{
    setActiveList(track)
  }
  console.log(activeList);
  

  return (
    <div className="song-list">
      <div className="tracker-headers">
        <p onClick={()=>handleClick("ForYou")} className={activeList === "ForYou" ? "active":""}>For You</p>
        <p onClick={()=>handleClick("TopTrackers")} className={activeList === "TopTrackers" ? "active":""}>Top Trackers</p>
      </div>
      <div>
        <input
          type="text"
          className="songs_search"
          placeholder="Search Song, Artist"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <ul>
        {songs.map((song) => (
          <li key={song.id} onClick={() => handleSongClick(song)}>
            <img
              src={`https://cms.samespace.com/assets/${song.cover}`}
              alt={song.title}
            />
            <div>
              <p className="song-name">{song?.name}</p>
              <p className="artist-name">{song?.artist}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
