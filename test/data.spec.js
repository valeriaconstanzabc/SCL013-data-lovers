import {orderData, filterGender} from '../src/data.js';

const noOrderDataArray=[
  {
    name: 'Harry Potter',
    gender: 'male',
    house: 'Gryffindor'
  },
  {
    name: 'Ron Weasley',
    gender: 'male',
    house: 'Gryffindor'
  },
  {
    name: 'Hermione Granger',
    gender: 'female',
    house: 'Gryffindor'
  }
  
]
const orderDataArray=[
  {
    name: 'Harry Potter',
    gender: 'male',
    house: 'Gryffindor'
  },
  {
    name: 'Hermione Granger',
    gender: 'female',
    house: 'Gryffindor'
  },
  {
    name: 'Ron Weasley',
    gender: 'male',
    house: 'Gryffindor'
  }
]
const orderMale=[
  {
    name: 'Ron Weasley',
    gender: 'male',
    house: 'Gryffindor'
  },
  {
    name: 'Harry Potter',
    gender: 'male',
    house: 'Gryffindor'
  }
]

const orderFemale=[
  {
    name: 'Hermione Granger',
    gender: 'female',
    house: 'Gryffindor'
  }
]


describe('orderData', () => {
  
  test('is a function', () => {
    expect(typeof orderData).toBe('function');
  });

  test('returns A-Z', () => {
    expect(orderData(noOrderDataArray, 1)).toStrictEqual(orderDataArray);
  });
  test('returns Z-A', () => {
    expect(orderData(noOrderDataArray, 2)).toStrictEqual(orderDataArray.reverse());
  });
  test('returns original order', () => {
    expect(orderData(noOrderDataArray, 0)).toStrictEqual(noOrderDataArray);
  });

});

describe('filterGender', () => {
  
  test('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  test('returns male', () => {
    expect(filterGender(orderDataArray, "male")).toStrictEqual(orderMale);
  });

  test('returns female', () => {
    expect(filterGender(orderDataArray, "female")).toStrictEqual(orderFemale);
  });
  
});