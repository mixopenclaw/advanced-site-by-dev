import { useState } from "react";

export default function DemoWidget() {
  const [count, setCount] = useState(0);
  const [hello, setHello] = useState<string | null>(null);
  const fetchHello = async () => {
    try {
      const res = await fetch('/api/hello');
      const json = await res.json();
      setHello(json.message);
    } catch (e) {
      setHello('error');
    }
  };
  return (
    <div>
      <div className="mb-4">
        <div className="text-sm text-slate-700 font-medium">Live Counter</div>
        <div className="mt-2 flex items-center gap-3">
          <button onClick={() => setCount(c => c-1)} aria-label="decrement" className="px-3 py-1 bg-white/10 rounded">-</button>
          <div className="px-4 py-2 bg-white rounded">{count}</div>
          <button onClick={() => setCount(c => c+1)} aria-label="increment" className="px-3 py-1 bg-white/10 rounded">+</button>
        </div>
      </div>
      <div>
        <div className="text-sm text-slate-700 font-medium">Fetch API</div>
        <div className="mt-2 flex items-center gap-3">
          <button onClick={fetchHello} className="px-3 py-2 bg-white/10 rounded">Call /api/hello</button>
          <div className="text-sm text-slate-700">{hello ?? 'No response yet'}</div>
        </div>
      </div>
    </div>
  );
}
