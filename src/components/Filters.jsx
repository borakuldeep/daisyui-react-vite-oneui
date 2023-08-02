import { useSnapshot } from 'valtio';
import { store, setFilter, statusArray } from '../store';

export default function Filters() {
  const snap = useSnapshot(store);

  return (
    <div className="flex flex-col px-3">
      <div className="form-control w-auto">
        <label className="cursor-pointer label">
          <span className="label-text">Show All</span>
          <input
            type="checkbox"
            className={`toggle ${
              snap.filter.includes('All') ? 'bg-blue-400' : ''
            }`}
            onChange={() => setFilter('All')}
            checked={snap.filter.includes('All')}
          />
        </label>
      </div>
      {statusArray.map((item) => (
        <div className="form-control w-auto">
          <label className="cursor-pointer label">
            <span className="label-text">{item}</span>
            <input
              type="checkbox"
              className={`toggle ${
                snap.filter.includes(item) ? 'bg-blue-400' : ''
              }`}
              onChange={() => setFilter(item)}
              checked={snap.filter.includes(item)}
            />
          </label>
        </div>
      ))}
    </div>
  );
}
