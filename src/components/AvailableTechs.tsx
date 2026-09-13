import type { Itech } from "../types/technologytype";
import TechCard from "./techCards";

interface AvailableTechsProps {
  technologies: Itech[];
  onAdd: (tech: Itech) => void;
  myStack: Itech[];
}

const AvailableTechs = ({
  technologies,
  onAdd,
  myStack,
}: AvailableTechsProps) => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
      {technologies.map((tech) => {
        const isAdded = myStack.some((item) => item.id === tech.id);

        return (
          <TechCard key={tech.id} tech={tech} onAdd={onAdd} isAdded={isAdded} />
        );
      })}
    </div>
  );
};

export default AvailableTechs;
