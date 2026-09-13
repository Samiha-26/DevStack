import { use, useState } from "react";
import type { Itech } from "../../types/technologytype";
import AvailableTechs from "../AvailableTechs";
import YourStack from "../YourStack";

interface techProps {
  technologiesPromise: Promise<Itech[]>;
}

const technologies = ({ technologiesPromise }: techProps) => {
  const technologiesData = use(technologiesPromise);
  const [myStack, setmyStack] = useState<Itech[]>([]);

  const handleAddToStack = (tech: Itech) => {
    if (myStack.some((item) => item.id === tech.id)) {
      alert(`${tech.name} is already in your stack!`);
      return;
    }
    setmyStack([...myStack, tech]);
  };
  const handleRemoveFromStack = (id: string) => {
    setmyStack(myStack.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto mt-24 px-4 md:px-8 lg:px-16">
      <div className="text-center lg:text-start mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Explore the <span className="color-gradient-text">Technologies</span>
        </h2>
        <p className="text-gray-600 pt-4">Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 w-full">
          <AvailableTechs 
            technologies={technologiesData} 
            onAdd={handleAddToStack} 
          />
        </div>

        <div className="w-full lg:w-80">
          <YourStack myStack={myStack} 
          onRemove={handleRemoveFromStack}
          onClearAll={() => setmyStack([])}
          />
        </div>
      </div>
    </div>
  );
};

export default technologies;