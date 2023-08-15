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

  const getBorderLeftColor = (status) => {
    return {
      Success: 'border-l-green-500',
      Failed: 'border-l-orange-600',
      Incoming: 'border-l-blue-700',
      Pending: 'border-l-accent',
      Hold: 'border-l-warning',
      Approved: 'border-l-success',
      Rejected: 'border-l-error',
    }[status];
  };

  return (
    <div
      className={`rounded-md border-l-4 ${getBorderLeftColor(
        status
      )} hover:drop-shadow-lg m-2 p-2 h-20 cursor-pointer animate-fade-up duration-150 ${
        snap.selectedRow?.requestId === requestId
          ? 'bg-blue-500 text-primary-content'
          : 'bg-base-200'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm">
            Status: <b>{status}</b>
          </div>
          <div className="text-sm opacity-50">Request Id: {requestId}</div>
        </div>
        <div>
          <div className="text-sm">
            Field: <b>Field Value</b>
          </div>
          <div className="text-sm opacity-50">other info: xyz</div>
        </div>
        <div className="xs:hidden">
          <div className="text-sm">
            Field: <b>Field Value</b>
          </div>
          <div className="text-sm opacity-50">other info: xyz</div>
        </div>
        {/* <div className="xs:hidden">
          <div className="text-sm">
            Field: <b>Field Value</b>
          </div>
          <div className="text-sm opacity-50">other info: xyz</div>
        </div> */}
      </div>
    </div>
  );
}
