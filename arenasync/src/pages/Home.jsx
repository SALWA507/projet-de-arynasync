import React from "react";
import Header from "../components/Header.jsx";
import SearchBar from "../components/SearchBar.jsx";
import TournamentCard from "../components/TournamentCard.jsx";
import { tournamentData } from "../data/tournamentDB.js";

export default function Home() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Header />
      <SearchBar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {tournamentData.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </div>
  );
}