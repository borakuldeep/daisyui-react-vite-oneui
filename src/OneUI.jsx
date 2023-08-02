import * as React from 'react';
import { useSnapshot } from 'valtio';
import { Resizable } from 're-resizable';
import DataRow from './components/DataRow';
import Filters from './components/Filters';
import { store, setSelection } from './store';
import Details from './components/Details';
import NavBar from './components/NavBar';

export default function OneUI() {
  const snap = useSnapshot(store);
  const [search, setSearch] = React.useState('');

  const data = snap.data.filter((item) => {
    return snap.filter.includes('All')
      ? true
      : snap.filter.includes(item.status);
  });

  const searchedData = search
    ? data.filter((item) => item.requestId.toString().includes(search))
    : data;

  return (
    <div className="h-screen" style={{ height: '90vh' }}>
      <NavBar />
      <div class="flex h-full">
        <Resizable
          defaultSize={{
            width: 250,
            //height: 200,
          }}
          minWidth={150}
          maxWidth={250}
          class="flex-none w-1/5 border border-slate-300"
        >
          <div className="divider">Filters</div>
          <Filters />
          <div className="divider mt-8">Sorting</div>
          <p className="font-bold px-4">...</p>
          <p className="font-bold px-4">...</p>
          <p className="font-bold px-4">...</p>
        </Resizable>
        {/* <div class="flex-auto w-2/5 border border-slate-300 overflow-auto"> */}
        <Resizable
          defaultSize={{
            width: 500,
            //height: 200,
          }}
          minWidth={150}
          maxWidth={600}
          class="flex-auto w-2/5 border border-slate-300 overflow-auto overflow-x-hidden"
        >
          <div class="flex flex-col justify-center">
            <div className="divider">WorkItems</div>
            <div className="form-control px-4 my-2">
              <input
                type="text"
                placeholder="Search request id"
                className="input input-bordered w-auto rounded-md"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div key={snap.filter.join()}>
              {searchedData.map((data) => (
                <DataRow
                  requestId={data.requestId}
                  status={data.status}
                  lastModifiedDate={data.lastModifiedDate}
                  onClick={() =>
                    setSelection({
                      requestId: data.requestId,
                      status: data.status,
                      lastModifiedDate: data.lastModifiedDate,
                    })
                  }
                />
              ))}
            </div>
          </div>
        </Resizable>
        <div class="flex-auto w-3/5 border border-slate-300">
          {snap.selectedRow ? (
            <Details />
          ) : (
            <div className="h-full flex flex-col items-center justify-center">
              Please select an Item
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
