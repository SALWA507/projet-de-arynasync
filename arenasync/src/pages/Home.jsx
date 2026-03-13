import React, { useState } from "react";
import Header from "../components/Header.jsx";
import SearchBar from "../components/SearchBar.jsx";
import TournamentCard from "../components/TournamentCard.jsx";
import { tournamentData } from "../data/tournamentDB.js";
import RegistrationForm from "../components/RegistrationForm";

export default function Home() {
  const [participants, setParticipants] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addParticipant = (p) => {
    setParticipants([...participants, p]);
    setShowForm(false); // Cacher le formulaire après ajout
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Header />
      <SearchBar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {tournamentData.map((tournament) => (
          <TournamentCard
            key={tournament.id}
            tournament={tournament}
            onRegister={() => setShowForm(true)}
          />
        ))}

        <div>
          {showForm && (
            <div className="mt-6">
              <RegistrationForm onSubmit={addParticipant} />
            </div>
          )}

          <h2 className="mt-6 font-bold">Liste des participants</h2>
          <ul>
            {participants.map((p, i) => (
              <li key={i}>
                {p.name} - {p.equipe} - {p.niveau}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}