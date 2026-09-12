import { use } from "react";
import type { Itech } from "../../types/technologytype";

interface techProps {
    technologiesPromise: Promise<Itech[]>;
}
const technologies = ( {technologiesPromise} : techProps) => {
    const technologies = use(technologiesPromise); 
    return (
        <div>
            
        </div>
    );
};

export default technologies;