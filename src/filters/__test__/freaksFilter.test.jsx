import React from 'react';
import { getFilteredFreaks } from '../freaksFilter';
import data from '../../mock-data/freaks.json';

const makeSkillsFilter = (...args) => ({ skills: args, projects: [] });

const makeProjFilter = (...args) => ({ skills: [], projects: args });

const catFilters = (f1, f2) => ({
  skills: [ ...f1.skills, ...f2.skills ],
  projects: [ ...f1.projects, ...f2.projects ],
});

const makeFreaksNames = (freaks) => freaks.map((freak) => [ freak.firstName, freak.lastName ]);

describe('freaksFilter', () => {
  it('filter a single freak by a single skill', () => {
    const freaks = [ data.freaks[0] ];
    const filters = makeSkillsFilter('JavaScript');

    const filteredFreaks = makeFreaksNames(getFilteredFreaks(freaks, filters));

    expect(filteredFreaks.length).toBe(1);
    expect(filteredFreaks).toEqual([ [ 'Bob', 'Dingo' ] ]);
  });

  it('filter a single freak by multiple skills', () => {
    const freaks = [ data.freaks[1] ];
    const filters = makeSkillsFilter('JavaScript', 'Elm', 'CSS');

    const filteredFreaks = makeFreaksNames(getFilteredFreaks(freaks, filters));

    expect(filteredFreaks.length).toBe(1);
    expect(filteredFreaks).toEqual([ [ 'Anda', 'Hugan' ] ]);
  });

  it('filter a single freak by a not present skill', () => {
    const freaks = [ data.freaks[1] ];
    const filters = makeSkillsFilter('JavaScript', 'Elm', 'Undefined');

    const filteredFreaks = getFilteredFreaks(freaks, filters);

    expect(filteredFreaks.length).toBe(0);
  });

  it('filter freaks by a single skill', () => {
    const { freaks } = data;
    const filters = makeSkillsFilter('Elm');
    const expectedFreaks = [
      [ 'Anda', 'Hugan' ],
      [ 'Mike', 'Hunt' ],
      [ 'James', 'Robert' ],
      [ 'Mary', 'Jane' ],
      [ 'Oliver', 'Knights' ],
      [ 'Olivia', 'Grace' ],
    ];

    const filteredFreaks = makeFreaksNames(getFilteredFreaks(freaks, filters));

    expect(filteredFreaks.length).toBe(6);
    expect(filteredFreaks).toEqual(expect.arrayContaining(expectedFreaks));
  });

  it('filter freaks by a multiple skills', () => {
    const { freaks } = data;
    const filters = makeSkillsFilter('Elm', 'Java');

    const filteredFreaks = makeFreaksNames(getFilteredFreaks(freaks, filters));

    expect(filteredFreaks.length).toBe(1);
    expect(filteredFreaks).toEqual([ [ 'Oliver', 'Knights' ] ]);
  });

  it('filter freaks by a single project', () => {
    const { freaks } = data;
    const filters = makeProjFilter('reAsign');
    const expectedFreaks = [
      [ 'Jim', 'Gather' ],
      [ 'Mike', 'Hunt' ],
      [ 'James', 'Robert' ],
      [ 'Mary', 'Jane' ],
      [ 'Oliver', 'Knights' ],
      [ 'Olivia', 'Grace' ],
    ];

    const filteredFreaks = makeFreaksNames(getFilteredFreaks(freaks, filters));

    expect(filteredFreaks.length).toBe(6);
    expect(filteredFreaks).toEqual(expect.arrayContaining(expectedFreaks));
  });

  it('filter freaks by a multiple projects', () => {
    const { freaks } = data;
    const filters = makeProjFilter('reAsign', 'UNGC');

    const filteredFreaks = makeFreaksNames(getFilteredFreaks(freaks, filters));

    expect(filteredFreaks.length).toBe(1);
    expect(filteredFreaks).toEqual([ [ 'Olivia', 'Grace' ] ]);
  });

  it('filter freaks by skills and projects', () => {
    const { freaks } = data;
    const skillFilters = makeSkillsFilter('Elm');
    const projFilters = makeProjFilter('EPIX');
    const filters = catFilters(skillFilters, projFilters);
    const expectedFreaks = [
      [ 'Anda', 'Hugan' ],
      [ 'Mike', 'Hunt' ],
      [ 'James', 'Robert' ],
      [ 'Mary', 'Jane' ],
      [ 'Oliver', 'Knights' ],
    ];

    const filteredFreaks = makeFreaksNames(getFilteredFreaks(freaks, filters));

    expect(filteredFreaks.length).toBe(5);
    expect(filteredFreaks).toEqual(expect.arrayContaining(expectedFreaks));
  });
});
