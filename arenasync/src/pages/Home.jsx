import React, { useState } from "react";
import Header from "../components/Header.jsx";
import SearchBar from "../components/SearchBar.jsx";
import TournamentCard from "../components/TournamentCard.jsx";
import { tournamentData } from "../data/tournamentDB.js";
import RegistrationForm from "../components/RegistrationForm";

export default function Home() {
  const [participants, setParticipants] = useState([]);
  const addParticipant = (p) => {
    setParticipants([...participants, p]);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Header />
      <SearchBar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {tournamentData.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
         <div>
     
      <RegistrationForm onSubmit={addParticipant} />

      <h2>Liste des participants</h2>
      <ul>
        {participants.map((p, i) => (
          <li key={i}>
            {p.name} - {p.team} - {p.level}
          </li>
        ))}
      </ul>
    </div>
      </div>
    </div>
    
  );
}