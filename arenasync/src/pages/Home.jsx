import React, { useState } from "react";
import Header from "../components/Header.jsx";
import SearchBar from "../components/SearchBar.jsx";
import TournamentCard from "../components/TournamentCard.jsx";
import RegistrationForm from "../components/RegistrationForm.jsx";
import { tournamentData as data } from "../data/tournamentDB.js";

export default function Home() {
  const [tournaments, setTournaments] = useState(data);
  const [activeTournamentId, setActiveTournamentId] = useState(null);

  const handleShowForm = (tournamentId) => {
    setActiveTournamentId(tournamentId);
  };

  const handleAddParticipant = (participant) => {
    setTournaments((prev) =>
      prev.map((t) =>
        t.id === activeTournamentId
          ? { ...t, participants: [...t.participants, participant] }
          : t
      )
    );
    setActiveTournamentId(null); 
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Header />
      <SearchBar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {tournaments.map((tournament) => (
          <TournamentCard
            key={tournament.id}
            tournament={tournament}
            onRegister={handleShowForm}
          />
        ))}
      </div>

      {activeTournamentId && (
        <RegistrationForm onSubmit={handleAddParticipant} />
      )}
    </div>
  );
}