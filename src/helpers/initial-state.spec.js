import { expect } from 'chai';
import initialState from './initial-state';

describe('function initialState', () => {
  it('shoult exist the initialState instance', () => {
    expect(initialState).to.exist;
  });
});