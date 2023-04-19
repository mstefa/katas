// import {ohce} from '../src/ohce';
// import { logger } from '../src/logger';
// const fs = jest.createMockFromModule('fs');


describe('test ohce', () => {

  test('call with name', () => {
    // Arrage
    // jest.mock(logger , (name) => void);

    // const name = "testName"
    // ohce(name)

    const obj = {a: 2, b:{
      c:4
    }}
    expect(obj).toEqual({a: 2, b:{c:4}})

  })
})
