import type { Itech } from "../types/technologytype";
import TechCard from "./techCards";

interface AvailableTechsProps {
    technologies: Itech[];
}

const AvailableTechs = ({ technologies }: AvailableTechsProps) => {
    return (
        <div  className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 container mx-auto">
            {technologies.map((tech) => (
                <TechCard
                    key={tech.id}
                    tech={tech}
                />
            ))}
        </div>
    );
};

export default AvailableTechs;