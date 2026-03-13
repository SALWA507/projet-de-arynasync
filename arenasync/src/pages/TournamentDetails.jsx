import React, { useState } from "react";
import TournamentCard from "../components/TournamentCard.jsx";
import RegistrationForm from "../components/RegistrationForm.jsx";

export default function TournamentDetails({ tournament }) {
  // État local des participants du tournoi
  const [participants, setParticipants] = useState(tournament.participants || []);

  // Fonction appelée lors de la soumission du formulaire
  const handleAddParticipant = (participant) => {
    setParticipants([...participants, participant]);
  };

  return (
    <div>
      {/* Carte du tournoi, on passe la liste des participants mise à jour */}
      <TournamentCard tournament={{ ...tournament, participants }} />

      {/* Formulaire d'inscription */}
      <RegistrationForm onSubmit={handleAddParticipant} />

      {/* Liste des participants */}
      <h2 className="mt-6 font-bold">Liste des participants</h2>
      <ul>
        {participants.map((p, i) => (
          <li key={i}>
            {p.name} - {p.equipe} - {p.niveau}
          </li>
        ))}
      </ul>
    </div>
  );
}