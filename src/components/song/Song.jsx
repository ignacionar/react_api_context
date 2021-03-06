import React from 'react';
import './song.css';

const Song = ({ song, displayLyric }) => {
  return (
    <li>
      <span>
        <img src={song.album.cover_small} alt="cover"/>
        <strong>{song.artist.name}</strong> - {song.title}
      </span>
      <button
        class="btn"
        onClick={() => displayLyric(song.artist.name, song.title)}
      >
        Letra
      </button>
    </li>
  );
};

export default Song;
