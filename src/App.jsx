import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Player from './components/Player';
import SongList from './components/SongList';
import SideNav from './components/SideNav';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [filtersData,setFiltersData] = useState([])

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await axios.get('https://cms.samespace.com/items/songs');
      setSongs(response?.data?.data);
      setFiltersData(response?.data?.data);
      setCurrentSongIndex(response?.data?.data[0]);
    };
    fetchSongs();
  }, []);

  const playSong = (index) => {    
    setCurrentSongIndex(index);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const onNext = () => {
    const currentIndexdata = songs?.findIndex((ele,index)=> ele?.id === currentSongIndex?.id)
    let nextIndex;
    if(currentIndexdata === songs?.length - 1){
      nextIndex = 0
    }
    else{
      nextIndex = currentIndexdata + 1
    }    
    setCurrentSongIndex(songs[nextIndex])
  };

  const handleSearch = (value) =>{
    console.log(value);
    const filterData = songs?.filter((ele) => 
      (ele?.name?.toLowerCase().includes(value.toLowerCase())) ||
      (ele?.artist?.toLowerCase().includes(value.toLowerCase()))
  );
  setFiltersData(filterData)
  }
  

  const onPrev = () => {
    const currentIndexdata = songs?.findIndex((ele,index)=> ele?.id === currentSongIndex?.id)
    let nextIndex;
    if(currentIndexdata === 0){
      nextIndex = songs?.length - 1
    }
    else{
      nextIndex = currentIndexdata - 1
    }    
    setCurrentSongIndex(songs[nextIndex])
  };
  
  

  return (
    <div className="app" style={{background:`linear-gradient(#000000,${currentSongIndex?.accent})`}}>
      <div className='sidenav-container'>
      <SideNav />
        </div>
        <div className='songs-track-container'>

      <SongList songs={filtersData} playSong={playSong} handleSearch={handleSearch}/>
      <Player 
        song={currentSongIndex} 
        isPlaying={isPlaying} 
        togglePlayPause={togglePlayPause} 
        onNext={onNext} 
        onPrev={onPrev} 
      />
        </div>
    </div>
  );
}

export default App;
