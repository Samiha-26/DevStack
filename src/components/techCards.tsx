import type { Itech } from "../types/technologytype";

interface techCardProps {
  tech: Itech;
  onAdd: (tech: Itech) => void;
  isAdded: boolean;
}

const TechCard = ({ tech, onAdd, isAdded }: techCardProps) => {
  return (
    <div 
      className={`flex flex-col justify-between bg-white border rounded-3xl p-10 transition-all ${
        isAdded ? "border-pink-500 shadow-md" 
          : "border-gray-100 shadow-sm hover:shadow-md"
      }`}
    >
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={`${tech.name} logo`} className="h-9 w-9 object-contain" />
        <span className= "rounded-full px-3 py-1 text-xs font-semibold">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold">{tech.name}</h3>
      <p className="mt-2 text-sm text-base-content/70 line-clamp-3">{tech.description}</p>

      <div className="mt-auto pt-5">
        <div className="flex items-center justify-between gap-2 text-xs mb-4">
          <span className="rounded-md bg-base-200 px-2.5 py-1 font-medium">{tech.category}</span>
          <span className="text-base-content/70">{tech.difficulty}</span>
          <span className="flex items-center gap-1 font-medium">
            <span className="text-amber-400">★</span>
            {tech.rating}
          </span>
        </div>
       <button 
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`w-full rounded-xl py-3 font-semibold transition-all ${
            isAdded 
              ? "bg-pink-50 text-pink-600 cursor-not-allowed" 
              : "bg-black text-white hover:bg-gray-800 hover:scale-105"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechCard;