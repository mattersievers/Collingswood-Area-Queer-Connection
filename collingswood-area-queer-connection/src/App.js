import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ArtistList from './components/ArtistList';
import Contact from './components/Contact';
import ArtistProfile from './components/ArtistProfile';
import artists from './utils/artistListDetails.js';

function App() {
  const [pages] = useState(['Artist Of The Month','Artist','Artist List','Contact']);
  const [currentPageSelection, setCurrentPageSelection] = useState(pages[0]);
  const artistOfTheMonth = artists[1].name
  const [currentArtist, setCurrentArtist] = useState(artistOfTheMonth);

  
  return (
    
    <>
      <Navbar
      pages = {pages} 
      currentPageSelection = {currentPageSelection} 
      setCurrentPageSelection = {setCurrentPageSelection}
      currentArtist = {currentArtist}/>      
      
      {currentPageSelection === 'Artist Of The Month' && 
      <>
      <h1>Artist of the Month</h1>
      <ArtistProfile 
      currentArtist = {currentArtist}/>
      </>}

      {currentPageSelection === 'Artist' && 
      <ArtistProfile 
      currentArtist = {currentArtist}/>}

      {currentPageSelection === 'Artist List' && 
      
      <ArtistList
      artists = {artists} 
      currentArtist = {currentArtist}
      setCurrentArtist = {setCurrentArtist}
      setCurrentPageSelection = {setCurrentPageSelection}
      />}

      {currentPageSelection === 'Contact' &&
      <Contact/>}

      <Footer/>
    </>
    
  );
}

export default App;
