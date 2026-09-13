import { use } from "react";
import type { Itech } from "../../types/technologytype";
import AvailableTechs from "../AvailableTechs";

interface techProps {
    technologiesPromise: Promise<Itech[]>;
}
const technologies = ( {technologiesPromise} : techProps) => {
    const technologies = use(technologiesPromise); 
    return (
        <div className=" container mx-auto flex flex-col justify-center text-center gap-2 lg:text-start mt-24 px-4 md:px-8 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Explore the <span className="color-gradient-text">Technologies</span></h2>
            <p className="text-gray-600 pt-4">Pick one technology per category to build your ideal stack.</p>
            <AvailableTechs technologies = {technologies}/>
        </div>
    );
};

export default technologies;