import React from 'react';
import Help from './components/page/Help/Help';
import About from './components/page/About/About';
import Donation from './components/page/Donation/Donation';
import Friends from './components/page/Friends/Friends';
import FirstScreen from './components/page/FirstScreen/FirstScreen';

export default function Home() {
  return (
    <main>
      <FirstScreen />
      <About />
      <Friends />
      <Help />
      <Donation />
    </main>
  );
}
