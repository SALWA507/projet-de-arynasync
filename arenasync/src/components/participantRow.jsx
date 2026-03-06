import StatusBadge from "./statusBadge.jsx";

export default function ParticipantRow({ participant }) {

return (

<div className="flex items-center gap-3 p-3 border rounded-lg">

<img 
src={participant.avatar}
alt={`Photo de ${participant.name}`}
className="w-10 h-10 rounded-full"
/>

<span className="font-medium">
{participant.name}
</span>

<StatusBadge status={participant.status} />

</div>

)

}
