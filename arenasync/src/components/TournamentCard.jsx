import { useState } from "react";
import StatusBadge from "./statusBadge";

export default function TournamentCard({ tournament, onRegister }) {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterClick = () => {
    setIsRegistered(!isRegistered);
    if (!isRegistered && onRegister) {
      onRegister(); // Affiche le formulaire dans le parent
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold">{tournament.title}</h2>
        <StatusBadge status={tournament.status} />
      </div>
      <p className="text-gray-500 text-sm mt-2">{tournament.description}</p>
      <button
        onClick={handleRegisterClick}
        className={
          isRegistered
            ? "bg-red-500 text-white p-2 rounded-[18px]"
            : "bg-green-500 text-white p-2 rounded-[18px]"
        }
      >
        {isRegistered ? "Se désinscrire" : "S'inscrire"}
      </button>
      <div className="text-sm mt-3 space-y-1 text-gray-600">
        <p>Participants: {tournament.participants.length}</p>
        <p>Type: {tournament.type}</p>
        <p>Date: {tournament.date}</p>
        <p>Location: {tournament.location}</p>
      </div>
    </div>
  );
}