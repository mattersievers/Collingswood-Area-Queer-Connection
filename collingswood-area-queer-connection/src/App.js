import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ArtistList from './components/ArtistList';
import Contact from './components/Contact';
import ArtistProfile from './components/ArtistProfile';

function App() {
  const [pages] = useState(['Artist Of The Month','Artist','Artist List','Contact']);
  const [currentPageSelection, setCurrentPageSelection] = useState(pages[0]);
  const [artists] = useState(["Bernie Sanders","Alfred O'neil Hitchcock III","Tryn","James Beakman Nargly"]);
  const artistOfTheMonth = artists[0]
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
      setCurrentArtist = {setCurrentArtist}/>}

      {currentPageSelection === 'Contact' &&
      <Contact/>}

      <Footer/>
    </>
    
  );
}

export default App;
