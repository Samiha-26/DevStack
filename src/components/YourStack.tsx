import type { Itech } from "../types/technologytype";

interface YourStackProps {
  myStack: Itech[];
}

const YourStack = ({ myStack }: YourStackProps) => {
  return (
    <aside className="rounded-2xl border border-base-100 bg-white p-8 shadow-sm lg:sticky lg:top-24">

        <h3 className="font-bold text-black text-2xl">Your Stack</h3>
        <p className="text-gray-400">{myStack.length === 0 ? "No technologies selected yet." : `${myStack.length} Technology Selected`}</p>

      <div className="mt-6">
        {myStack.length === 0 ? (
          <p className="text-gray-400 text-center py-8 border border-dashed rounded-2xl mt-2">
            Your stack is empty. 
          </p>
        ) : (
          myStack.map((item) => (
            <div
            key={item.id} 
            className="flex items-center gap-3 p-3 rounded-2xl border border-white bg-white shadow-sm"
            >
              <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
              <span className="text-sm font-medium text-gray-400">{item.name}</span>
            </div>
          ))
        )}
      </div>
    </aside>
  );
};

export default YourStack;