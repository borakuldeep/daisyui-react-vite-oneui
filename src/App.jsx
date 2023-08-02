import * as React from 'react';
import OneUI from './OneUI';
import './App.css';

export default function App() {
  const [show, setShow] = React.useState(false);

  const setActiveColor = (id) => {
    ['item1ref', 'item2ref', 'item3ref', 'item4ref', 'item5ref'].forEach(
      (item) => {
        if (id !== item) {
          document.getElementById(item).classList.remove('bg-red-400');
        }
      }
    );
    document.getElementById(id).classList.add('bg-red-400');
    if (id === 'item5ref') {
      document.getElementById('showbtn').classList.remove('invisible');
    }
  };

  return (
    <div>
      {show ? (
        <OneUI />
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <h1
            style={{
              fontSize: '60px',
            }}
            className="linear"
          >
            One UI concept
          </h1>

          <p>A three column layout - An alternative to Datagrid</p>
          <div className="flex mt-2">
            <div className="w-10 h-40 bg-blue-400 mr-1"></div>
            <div className="w-20 h-40 bg-blue-400 mr-1"></div>
            <div className="w-40 h-40 bg-blue-400"></div>
          </div>
          <div className="carousel w-full mt-4">
            <div id="item1" className="carousel-item w-full">
              <div className="flex justify-center w-full">
                <div className="card w-96 bg-blue-200">
                  <div className="card-body">
                    <h2 className="card-title">1 - Simple UI</h2>
                    <p>
                      Less confusion - Simple UI for better productivity.
                      Datagrid is useful when user needs to scan rows to search
                      some data. It's not really useful in our scenario.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="item2" className="carousel-item w-full">
              <div className="flex justify-center w-full">
                <div className="card w-96 bg-blue-200">
                  <div className="card-body">
                    <h2 className="card-title">2 - Faster UI</h2>
                    <p>
                      Better Performance - Less code shipped to browser.
                      Datagrid comes with many features which ships more code to
                      browser and hence contributes to poor performance in some
                      cases. Most of these features are NOT even used.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="item3" className="carousel-item w-full">
              <div className="flex justify-center w-full">
                <div className="card w-96 bg-blue-200">
                  <div className="card-body">
                    <h2 className="card-title">3 - Cost savings.</h2>
                    <p>
                      No license needed - External Datagrid libraries comes with
                      a premuim license for better feature set. No data grid, no
                      license fee.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="item4" className="carousel-item w-full">
              <div className="flex justify-center w-full">
                <div className="card w-96 bg-blue-200">
                  <div className="card-body">
                    <h2 className="card-title">4 - More code control.</h2>
                    <p>
                      Code control - With in-house three column layout
                      ,developers have the full control of the code (not
                      depenedent on third party library).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="item5" className="carousel-item w-full">
              <div className="flex justify-center w-full">
                <div className="card w-96 bg-blue-200">
                  <div className="card-body">
                    <h2 className="card-title">
                      5 - One UI : One shop for all apps.
                    </h2>
                    <p>
                      The Third column can be used to display other apps,
                      enabling users to access other apps in same user-work
                      context (single page), hence truly embracing the concept
                      of one UI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2 mt-2">
            <a
              href="#item1"
              id="item1ref"
              className="btn btn-sm bg-red-400"
              onClick={() => setActiveColor('item1ref')}
            >
              1
            </a>
            <a
              href="#item2"
              id="item2ref"
              className="btn btn-sm"
              onClick={() => setActiveColor('item2ref')}
            >
              2
            </a>
            <a
              href="#item3"
              id="item3ref"
              className="btn btn-sm"
              onClick={() => setActiveColor('item3ref')}
            >
              3
            </a>
            <a
              href="#item4"
              id="item4ref"
              className="btn btn-sm"
              onClick={() => setActiveColor('item4ref')}
            >
              4
            </a>
            <a
              href="#item5"
              id="item5ref"
              className="btn btn-sm"
              onClick={() => setActiveColor('item5ref')}
            >
              5
            </a>
          </div>
          <button
            id="showbtn"
            className="btn bg-blue-400 mt-10 invisible"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? 'Back <-' : 'One UI layout->'}
          </button>
        </div>
      )}
    </div>
  );
}
