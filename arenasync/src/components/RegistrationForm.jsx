import React,{useState} from "react";
export default function RegistrationForm({onSubmit}){
    const [name,setName]=useState("");
    const [equipe,setEquipe]=useState("");
    const [niveau,setNiveau]=useState("");
      const isNameValid = name.length >= 3;
    const isNameVaild =name.trim().length >= 3;
    const isFormValid = isNameValid;
    const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!isFormValid) return;
    const participant = { name, equipe, niveau };
     onSubmit(participant);
     setName("");
    setTeam("");
    setLevel("");
  };
 return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Équipe"
        value={equipe}
        onChange={(e) => setTeam(e.target.value)}
      />
      <input
        type="text"
        placeholder="Niveau"
        value={niveau}
        onChange={(e) => setLevel(e.target.value)}
      />
      <button type="submit" disabled={name.length < 3}>
        Valider
      </button>
    </form>
  );
}

