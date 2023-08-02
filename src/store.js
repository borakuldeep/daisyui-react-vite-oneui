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
  return data;
};

export const store = proxy({
  filter: ['All'],
  selectedRow: null,
  data: generateData(),
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
