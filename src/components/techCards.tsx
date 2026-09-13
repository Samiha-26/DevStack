import type { Itech } from "../types/technologytype";

interface techCardProps {
  tech: Itech;
}

const TechCard = ({ tech }: techCardProps) => {
  return (
    <div className="flex flex-col justify-between bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={`${tech.name} logo`} className="h-9 w-9 object-contain" />
        
        {/* Directly uses tech.badgeColor from your JSON data */}
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
        <button className="btn btn-neutral w-full rounded-xl text-white hover:scale-105 transition-all">
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default TechCard;