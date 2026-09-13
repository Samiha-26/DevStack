import type { Itech } from "../types/technologytype";
import TechCard from "./techCards";

interface AvailableTechsProps {
    technologies: Itech[];
    onAdd: (tech: Itech) => void;
}

const AvailableTechs = ({ technologies, onAdd }: AvailableTechsProps) => {
    return (
        <div  className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
            {technologies.map((tech) => (
                <TechCard
                    key={tech.id}
                    tech={tech}
                    onAdd={onAdd}
                />
            ))}
        </div>
    );
};

export default AvailableTechs;