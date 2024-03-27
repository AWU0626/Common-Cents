import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import HistoryPage from './pages/AboutUs/HistoryPage'
import LeadershipPage from './pages/AboutUs/LeadershipPage';
import MissionPage from './pages/AboutUs/MissionPage';
import PartnersPage from './pages/AboutUs/PartnersPage';
import EventPage from './pages/Events/EventPage';
import CoffeeChatPage from './pages/Events/CoffeeChatPage';
import CommitteePage from './pages/JoinUs/CommitteePage';
import GeneralBodyPage from './pages/JoinUs/GeneralBodyPage';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="contact" element={ <ContactPage /> } />
        <Route path="history" element={ <HistoryPage /> } />
        <Route path="leadership" element={ <LeadershipPage /> } />
        <Route path="mission" element={ <MissionPage /> } />
        <Route path="partners" element={ <PartnersPage /> } />
        <Route path="event" element={ <EventPage /> } />
        <Route path="coffee_chat" element={ <CoffeeChatPage /> } />
        <Route path="committee" element={ <CommitteePage /> } />
        <Route path="gbm" element={ <GeneralBodyPage /> } />
      </Routes>
    </div>
  );
}
