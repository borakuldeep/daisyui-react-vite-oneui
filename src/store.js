import { proxy } from 'valtio';

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export const statusArray = [
  'Success',
  'Failed',
  'Incoming',
  'Pending',
  'Hold',
  'Approved',
  'Rejected',
];

const generateData = () => {
  const dateArray = [
    'Apr 21, 2023',
    'Apr 26, 2023',
    'May 17, 2023',
    'May 22, 2023',
  ];
  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      status: statusArray[randomIntFromInterval(0, 5)],
      lastModifiedDate: dateArray[randomIntFromInterval(0, 3)],
      requestId: randomIntFromInterval(1111, 999999),
    });
  }
  // console.log('data: ', data);
  return data;
};

const data = [
  {
    status: 'Incoming',
    lastModifiedDate: 'Apr 26, 2023',
    requestId: 113362,
  },
  {
    status: 'Success',
    lastModifiedDate: 'May 22, 2023',
    requestId: 20289,
  },
  {
    status: 'Failed',
    lastModifiedDate: 'May 22, 2023',
    requestId: 25105,
  },
  {
    status: 'Failed',
    lastModifiedDate: 'May 22, 2023',
    requestId: 375732,
  },
  {
    status: 'Pending',
    lastModifiedDate: 'May 22, 2023',
    requestId: 431689,
  },
  {
    status: 'Hold',
    lastModifiedDate: 'May 22, 2023',
    requestId: 277064,
  },
  {
    status: 'Incoming',
    lastModifiedDate: 'May 17, 2023',
    requestId: 459651,
  },
  {
    status: 'Approved',
    lastModifiedDate: 'Apr 26, 2023',
    requestId: 858606,
  },
  {
    status: 'Success',
    lastModifiedDate: 'Apr 21, 2023',
    requestId: 282789,
  },
  {
    status: 'Incoming',
    lastModifiedDate: 'May 22, 2023',
    requestId: 373725,
  },
  {
    status: 'Hold',
    lastModifiedDate: 'May 17, 2023',
    requestId: 898558,
  },
  {
    status: 'Approved',
    lastModifiedDate: 'May 22, 2023',
    requestId: 946808,
  },
  {
    status: 'Failed',
    lastModifiedDate: 'Apr 21, 2023',
    requestId: 254907,
  },
  {
    status: 'Pending',
    lastModifiedDate: 'Apr 26, 2023',
    requestId: 654037,
  },
  {
    status: 'Failed',
    lastModifiedDate: 'May 17, 2023',
    requestId: 127516,
  },
  {
    status: 'Success',
    lastModifiedDate: 'May 17, 2023',
    requestId: 829318,
  },
  {
    status: 'Success',
    lastModifiedDate: 'May 17, 2023',
    requestId: 944156,
  },
  {
    status: 'Pending',
    lastModifiedDate: 'May 22, 2023',
    requestId: 618344,
  },
  {
    status: 'Success',
    lastModifiedDate: 'May 17, 2023',
    requestId: 432177,
  },
  {
    status: 'Hold',
    lastModifiedDate: 'May 17, 2023',
    requestId: 933557,
  },
];

export const store = proxy({
  filter: ['All'],
  selectedRow: null,
  data,
});

export const setFilter = (filterValue) => {
  if (filterValue === 'All') {
    if (store.filter.includes('All'));
    else {
      // do nothing
      store.filter = ['All'];
    }
  } else {
    //filter not All - toggle
    if (store.filter.includes(filterValue)) {
      store.filter = store.filter.filter((item) => item !== filterValue);
    } else {
      if (store.filter.includes('All')) {
        store.filter = [filterValue];
      } else store.filter = [...store.filter, filterValue];
    }
  }
};

export const setSelection = (row) => {
  store.selectedRow = row;
};
