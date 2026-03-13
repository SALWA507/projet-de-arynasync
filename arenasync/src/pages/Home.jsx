import React, { useState } from "react";
import Header from "../components/Header.jsx";
import SearchBar from "../components/SearchBar.jsx";
import TournamentCard from "../components/TournamentCard.jsx";
import { tournamentData } from "../data/tournamentDB.js";
import RegistrationForm from "../components/RegistrationForm.jsx";

export default function Home() {
  const [tournaments, setTournaments] = useState(tournamentData);
  const [activeTournamentId, setActiveTournamentId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
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
  const filteredTournaments = tournaments.filter((t) =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Header />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {filteredTournaments.map((tournament) => (
          <TournamentCard
            key={tournament.id}
            tournament={tournament}
            onRegister={() => handleShowForm(tournament.id)}
          />
        ))}
      </div>

      {activeTournamentId && (
        <div className="mt-6">
          <RegistrationForm onSubmit={handleAddParticipant} />
        </div>
      )}
    </div>
  );
}