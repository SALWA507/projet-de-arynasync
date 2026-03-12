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
    setEquipe("");
    setNiveau("");
  };
 return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow mt-4 flex flex-col gap-3">

      <input
        type="text"
        placeholder="Nam"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded "
      />
      <input
        type="text"
        placeholder="Equipe"
        value={equipe}
        onChange={(e) => setEquipe(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Niveau"
        value={niveau}
        onChange={(e) => setNiveau(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" 
      disabled={name.length < 3}
        className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-300"
        >
        Valider
      </button>
    </form>
  );
}

