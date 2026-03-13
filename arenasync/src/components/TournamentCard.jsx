import { useState } from "react";
import StatusBadge from "./statusBadge";

export default function TournamentCard({ tournament, onRegister }) {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    setIsRegistered(!isRegistered);
    onRegister(); 
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">{tournament.title}</h2>
        <StatusBadge status={tournament.status} />
      </div>

      <p className="text-gray-500 text-sm mt-2">{tournament.description}</p>

      {/* Bouton S'inscrire / Se désinscrire */}
      <button
        onClick={handleRegister}
        className={
          isRegistered
            ? "bg-red-500 text-white p-2 rounded mt-3"
            : "bg-green-500 text-white p-2 rounded mt-3"
        }
      >
        {isRegistered ? "Se désinscrire" : "S'inscrire"}
      </button>
      {tournament.participants.length > 0 && (
        <div className="text-sm mt-3 space-y-1 text-gray-600">
          <h3 className="font-semibold">Participants :</h3>
          <ul>
            {tournament.participants.map((p, i) => (
              <li key={i}>
                {p.name} - {p.equipe} - {p.niveau}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="text-sm mt-3 space-y-1 text-gray-600">
        <p>Type: {tournament.type}</p>
        <p>Date: {tournament.date}</p>
        <p>Location: {tournament.location}</p>
      </div>
    </div>
  );
}