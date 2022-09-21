import React from 'react';
import { StatusBar } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Home from './components/Home';
import LandingPage from './components/LandingPage';

export default function App() {

  return (
    <NativeRouter>

        <StatusBar
          backgroundColor='#141414'
        />

      <Routes>


        <Route exact path='/' element={<LandingPage/>} />
        
        <Route exact path='/home' element={<Home/>} />

      </Routes>

    </NativeRouter>
  );
}
