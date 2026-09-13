import type { Itech } from "../types/technologytype";

interface YourStackProps {
  myStack: Itech[];
  onRemove: (id: string) => void;
}

const YourStack = ({ myStack, onRemove }: YourStackProps) => {
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
          <>
            {myStack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 p-3 rounded-2xl border border-white bg-white shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                  <span className="text-sm font-medium text-gray-400">{item.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 hover:text-red-700"
                  aria-label={`Remove ${item.name}`}
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={() => myStack.forEach((item) => onRemove(item.id))}
              className="btn btn-outline border-red-300 text-red-600 border-2 w-full rounded-2xl mt-3"
            >
              Remove all ✕
            </button>
          </>
        )}
      </div>
      
    </aside>
  );
};

export default YourStack;