import {orderData, filterGender, filterHouse, filterAncestry, filterStaff} from '../src/data.js';

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
    house: 'Gryffindor',
  },
  {
    name: 'Hermione Granger',
    gender: 'female',
    house: 'Gryffindor',
  },
  {
    name: 'Ron Weasley',
    gender: 'male',
    house: 'Gryffindor',
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

const orderHouse=[
  {
    name: 'Ron Weasley',
    gender: 'male',
    house: 'Gryffindor'
  },
  {
    name: 'Harry Potter',
    gender: 'male',
    house: 'Gryffindor'
  },
  {
    name: 'Draco Malfoy',
    gender: 'male',
    house: 'Slytherin'
  }
]
const orderFilterHouse=[
  {
    name: 'Draco Malfoy',
    gender: 'male',
    house: 'Slytherin'
  }
]

const orderAncestry=[
  {
    name: 'Harry Potter',
    gender: 'male',
    house: 'Gryffindor',
    ancestry: 'half-blood'
  },
  {
    name: 'Hermione Granger',
    gender: 'female',
    house: 'Gryffindor',
    ancestry: 'muggleborn'
  },
  {
    name: 'Ron Weasley',
    gender: 'male',
    house: 'Gryffindor',
    ancestry: 'pure-blood'
  }
]
const orderFilterAncestry=[
  {
    name: 'Ron Weasley',
    gender: 'male',
    house: 'Gryffindor',
    ancestry: 'pure-blood'
  }
]

const orderStaff=[
  {
    name: 'Harry Potter',
    gender: 'male',
    house: 'Gryffindor',
    ancestry: 'half-blood',
    hogwartsStudent: true,
    hogwartsStaff: false
  },
  {
    name: 'Minerva McGonagall',
    gender: 'female',
    house: 'Gryffindor',
    ancestry: '',
    hogwartsStudent: false,
    hogwartsStaff: false
  }
  
]
const orderFilterStudent=[
  {
    name: 'Harry Potter',
    gender: 'male',
    house: 'Gryffindor',
    ancestry: 'half-blood',
    hogwartsStudent: true,
    hogwartsStaff: false
  }
]
const orderFilterStaff=[
  {
    name: 'Minerva McGonagall',
    gender: 'female',
    house: 'Gryffindor',
    ancestry: '',
    hogwartsStudent: false,
    hogwartsStaff: false
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

describe('filterHouse', () => {
  
  test('is a function', () => {
    expect(typeof filterHouse).toBe('function');
  });

  test('returns Slytherin', () => {
    expect(filterHouse(orderHouse, "Slytherin")).toStrictEqual(orderFilterHouse);
  });

});

describe('filterAncestry', () => {
  
  test('is a function', () => {
    expect(typeof filterAncestry).toBe('function');
  });

  test('returns Slytherin', () => {
    expect(filterAncestry(orderAncestry, "pure-blood")).toStrictEqual(orderFilterAncestry);
  });

});

describe('filterStaff', () => {
  
  test('is a function', () => {
    expect(typeof filterStaff).toBe('function');
  });

  test('returns student', () => {
    expect(filterStaff(orderStaff, "hogwartsStudent")).toStrictEqual(orderFilterStudent);
  });

  test('returns staff', () => {
    expect(filterStaff(orderStaff, "hogwartsStaff")).toStrictEqual(orderFilterStaff);
  });

});