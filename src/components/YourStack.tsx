import type { Itech } from "../types/technologytype";

interface YourStackProps {
  myStack: Itech[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

const YourStack = ({ myStack, onRemove, onClearAll }: YourStackProps) => {
  return (
    <aside className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm lg:sticky lg:top-24">
      <h3 className="font-bold text-slate-900 text-2xl">Your Stack</h3>
      <p className="text-slate-400 text-sm mt-1">
        {myStack.length === 0 
          ? "No technologies selected yet." 
          : `${myStack.length} Technology Selected`}
      </p>

      <div className="mt-6">
        {myStack.length === 0 ? (
          <p className="text-gray-400 text-center py-8 border border-dashed rounded-2xl">
            Your stack is empty.
          </p>
        ) : (
          <>
            <div className="flex flex-col gap-3">
              {myStack.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-xl border border-gray-200 bg-white"
                >
                  <div className="flex items-center gap-4">
                    <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800 leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400 mt-0.5">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    className="text-gray-400 hover:text-red-500 text-xl font-light px-2 transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onClearAll}
              className="w-full py-1.5 mt-6 text-red-500 font-bold bg-white border border-red-200 rounded-xl hover:bg-red-50 hover:border-red-600 transition-colors hover:scale-105"
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </aside>
  );
};

export default YourStack;