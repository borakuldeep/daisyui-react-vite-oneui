import { useSnapshot } from 'valtio';
import { store } from '../store';

const statusMapping = {
  Success: 'success',
  Failed: 'error',
  Incoming: 'info',
  Pending: 'warning',
};

export default function DataRow({
  status,
  lastModifiedDate,
  requestId,
  onClick,
}) {
  const snap = useSnapshot(store);

  const getBgColor = (status) => {
    return {
      Success: 'bg-green-500',
      Failed: 'bg-orange-600',
      Incoming: 'bg-blue-700',
      Pending: 'bg-accent',
      Hold: 'bg-warning',
      Approved: 'bg-success',
      Rejected: 'bg-error',
    }[status];
  };

  return (
    <div
      className={`rounded-md border border-slate-300 hover:border-indigo-300 m-2 p-2 h-20 cursor-pointer animate-fade-up duration-150 ${
        snap.selectedRow?.requestId === requestId
          ? 'bg-blue-500 text-primary-content'
          : 'bg-base-200'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-evenly">
        <div className="avatar">
          <div
            className={`mask mask-squircle w-3 h-3 ${getBgColor(status)}`}
          ></div>
        </div>
        <div>
          <div className="font-bold">{status}</div>
          <div className="text-sm opacity-50">{requestId}</div>
        </div>
        <div>
          Field 1
          <br />
          <span className="badge badge-ghost badge-sm">Info 1</span>
        </div>
        <div>
          Field 2
          <br />
          <span className="badge badge-ghost badge-sm">Info 2</span>
        </div>
        <div>
          Field 3
          <br />
          <span className="badge badge-ghost badge-sm">Info 3</span>
        </div>
      </div>
    </div>
  );
}
