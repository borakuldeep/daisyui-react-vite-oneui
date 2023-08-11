import * as React from 'react';
import { useSnapshot } from 'valtio';
import { store } from '../store';
import Comments from './Comments';

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
            <div className="collapse-title bg-blue-500 text-primary-content mb-4">
              This is work space or details section of a work item. This can
              show work item details or separate app can be mounted here.
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
        {snap.selectedRow.status === 'Failed' && (
          <div className="alert alert-error w-96 justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! Task failed due to some reason.</span>
          </div>
        )}
        {snap.selectedRow.status === 'Hold' && (
          <div className="alert alert-warning w-96 justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Hold: Task on hold due to missing information!</span>
          </div>
        )}
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

      <div className="w-full flex justify-between mb-3 p-2 items-end pl-20 pr-20">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type comments here</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-80 max-w-xs"
          />
        </div>
        <div>
          <button className="btn btn-outline btn-error w-20 mr-4">
            Reject
          </button>
          <button className="btn bg-blue-500 w-25">Approve</button>
        </div>
      </div>
    </div>
  );
}
