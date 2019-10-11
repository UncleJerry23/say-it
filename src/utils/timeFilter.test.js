import { timeFilter } from './timeFilter';
import { thoughts } from '../../data/thoughts';

describe('time filtering', () => {
  it('filters last 24 hours', () => {
    expect(timeFilter(1, thoughts).length).toEqual(2); 
    expect(timeFilter(3, thoughts).length).toEqual(4); 
    expect(timeFilter(6, thoughts).length).toEqual(6); 
    expect(timeFilter(12, thoughts).length).toEqual(8); 
    expect(timeFilter(24, thoughts).length).toEqual(9); 
  });

});
