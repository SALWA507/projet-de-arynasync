import React, { useState } from "react";
import TournamentCard from "../components/TournamentCard.jsx";
import RegistrationForm from "../components/RegistrationForm.jsx";

export default function TournamentDetails({ tournament }) {
  const [participants, setParticipants] = useState(tournament.participants || []);
  const handleAddParticipant = (participant) => {
    setParticipants([...participants, participant]);
  };

  return (
    <div>
      <TournamentCard tournament={{ ...tournament, participants }} />
      <RegistrationForm onSubmit={handleAddParticipant} />
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