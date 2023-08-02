import * as React from 'react';
import { useSnapshot } from 'valtio';
import { store } from '../store';

const getProgressColor = (status) => {
  return {
    Success: 'progress-success',
    Failed: 'progress-error',
    Incoming: 'progress-primary',
    Pending: 'progress-accent',
    Hold: 'progress-warning',
    Approved: 'progress-success',
    Rejected: 'progress-error',
  }[status];
};

export default function Details() {
  const snap = useSnapshot(store);

  return (
    <div className="flex flex-col h-full overflow-auto">
      <div className="hero bg-base-200 animate-fade-down">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-8">Work Space</h1>
            <div className="collapse-title bg-blue-400 text-primary-content mb-4">
              This is work space or details section of a work item.
            </div>
            <div className="collapse-title bg-blue-400 text-primary-content mb-4">
              This can show work item details or separate app can be mounted
              here.
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col w-100 items-center mt-10 mb-10 animate-fade-right duration-150"
        key={snap.selectedRow.requestId}
      >
        <div>
          <p>ID: {snap.selectedRow.requestId}</p>
          <p>Status: {snap.selectedRow.status}</p>
          <progress
            className={`progress ${getProgressColor(
              snap.selectedRow.status
            )} w-60`}
            value={
              ['Approved', 'Success'].includes(snap.selectedRow.status)
                ? '100'
                : '50'
            }
            max="100"
          ></progress>
        </div>
        <div className="overflow-x-auto w-100 animate-fade-up w-full flex justify-center">
          <div className="card flex-shrink-0 w-full max-w-sm mr-8">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Field 1</span>
                </label>
                <input
                  type="text"
                  placeholder="Some info"
                  className="input input-bordered"
                  disabled
                  value="info 1"
                />
                <label className="label">
                  <span className="label-text">Field 3</span>
                </label>
                <input
                  type="text"
                  placeholder="info 3"
                  className="input input-bordered"
                  disabled
                  value="info 3"
                />
                <label className="label">
                  <span className="label-text">Field 5</span>
                </label>
                <input
                  type="text"
                  placeholder="info 5"
                  className="input input-bordered"
                  disabled
                  value="info 5"
                />
                <label className="label">
                  <span className="label-text">Field 7</span>
                </label>
                <input
                  type="text"
                  placeholder="info 7"
                  className="input input-bordered"
                  disabled
                  value="info 7"
                />
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm mr-8">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Field 2</span>
                </label>
                <input
                  type="text"
                  placeholder="Some info"
                  className="input input-bordered"
                  disabled
                  value="info 2"
                />
                <label className="label">
                  <span className="label-text">Field 4</span>
                </label>
                <input
                  type="text"
                  placeholder="info 2"
                  className="input input-bordered"
                  disabled
                  value="info 4"
                />
                <label className="label">
                  <span className="label-text">Field 6</span>
                </label>
                <input
                  type="text"
                  placeholder="info 2"
                  className="input input-bordered"
                  disabled
                  value="info 6"
                />
                <label className="label">
                  <span className="label-text">Field 8</span>
                </label>
                <input
                  type="text"
                  placeholder="info 2"
                  className="input input-bordered"
                  disabled
                  value="info 8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
