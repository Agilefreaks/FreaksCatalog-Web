import React from 'react';
import { getFilteredFreaks } from '../freaksFilter';
import data from '../../mock-data/freaks.json';

const makeSkillsFilter = (...args) => ({ skills: [ ...args ], projects: [] });

const makeProjFilter = (...args) => ({ skills: [], projects: [ ...args ] });

const catFilters = (f1, f2) => ({
  skills: [ ...f1.skills, ...f2.skills ],
  projects: [ ...f1.projects, ...f2.projects ],
});

const includesFreak = (freaks, firstName, lastName) => freaks.some((fr) => fr.firstName === firstName && fr.lastName === lastName);

describe('freaksFilter', () => {
  it('filter a single freak by a single skill', () => {
    const freaks = [ data.freaks[0] ];
    const filters = makeSkillsFilter('JavaScript');

    const filteredFreaks = getFilteredFreaks(freaks, filters);

    expect(filteredFreaks.length).toBe(1);
    expect(includesFreak(filteredFreaks, 'Bob', 'Dingo')).toBe(true);
  });

  it('filter a single freak by multiple skills', () => {
    const freaks = [ data.freaks[1] ];
    const filters = makeSkillsFilter('JavaScript', 'Elm', 'CSS');

    const filteredFreaks = getFilteredFreaks(freaks, filters);

    expect(filteredFreaks.length).toBe(1);
    expect(includesFreak(filteredFreaks, 'Anda', 'Hugan')).toBe(true);
  });

  it('filter a single freak by a not present skill', () => {
    const freaks = [ data.freaks[1] ];
    const filters = makeSkillsFilter('JavaScript', 'Elm', 'Undefined');

    const filteredFreaks = getFilteredFreaks(freaks, filters);

    expect(filteredFreaks.length).toBe(0);
  });

  it('filter freaks by a single skill', () => {
    const freaks = [ ...data.freaks ];
    const filters = makeSkillsFilter('Elm');

    const filteredFreaks = getFilteredFreaks(freaks, filters);

    expect(filteredFreaks.length).toBe(6);
    expect(includesFreak(filteredFreaks, 'Anda', 'Hugan')).toBe(true);
    expect(includesFreak(filteredFreaks, 'Mike', 'Hunt')).toBe(true);
    expect(includesFreak(filteredFreaks, 'James', 'Robert')).toBe(true);
    expect(includesFreak(filteredFreaks, 'Mary', 'Jane')).toBe(true);
    expect(includesFreak(filteredFreaks, 'Oliver', 'Knights')).toBe(true);
    expect(includesFreak(filteredFreaks, 'Olivia', 'Grace')).toBe(true);
  });

  it('filter freaks by a multiple skills', () => {
    const freaks = [ ...data.freaks ];
    const filters = makeSkillsFilter('Elm', 'Java');

    const filteredFreaks = getFilteredFreaks(freaks, filters);

    expect(filteredFreaks.length).toBe(1);
    expect(includesFreak(filteredFreaks, 'Oliver', 'Knights')).toBe(true);
  });

  it('filter freaks by a single project', () => {
    const freaks = [ ...data.freaks ];
    const filters = makeProjFilter('reAsign');

    const filteredFreaks = getFilteredFreaks(freaks, filters);

    expect(filteredFreaks.length).toBe(6);
    expect(includesFreak(filteredFreaks, 'Jim', 'Gather')).toBe(true);
    expect(includesFreak(filteredFreaks, 'Mike', 'Hunt')).toBe(true);
    expect(includesFreak(filteredFreaks, 'James', 'Robert')).toBe(true);
    expect(includesFreak(filteredFreaks, 'Mary', 'Jane')).toBe(true);
    expect(includesFreak(filteredFreaks, 'Oliver', 'Knights')).toBe(true);
    expect(includesFreak(filteredFreaks, 'Olivia', 'Grace')).toBe(true);
  });

  it('filter freaks by a multiple projects', () => {
    const freaks = [ ...data.freaks ];
    const filters = makeProjFilter('reAsign', 'UNGC');

    const filteredFreaks = getFilteredFreaks(freaks, filters);

    expect(filteredFreaks.length).toBe(1);
    expect(includesFreak(filteredFreaks, 'Olivia', 'Grace')).toBe(true);
  });

  it('filter freaks by skills and projects', () => {
    const freaks = [ ...data.freaks ];
    const skillFilters = makeSkillsFilter('Elm');
    const projFilters = makeProjFilter('EPIX');
    const filters = catFilters(skillFilters, projFilters);

    const filteredFreaks = getFilteredFreaks(freaks, filters);

    expect(filteredFreaks.length).toBe(5);
    expect(includesFreak(filteredFreaks, 'Anda', 'Hugan')).toBe(true);
    expect(includesFreak(filteredFreaks, 'Mike', 'Hunt')).toBe(true);
    expect(includesFreak(filteredFreaks, 'James', 'Robert')).toBe(true);
    expect(includesFreak(filteredFreaks, 'Mary', 'Jane')).toBe(true);
    expect(includesFreak(filteredFreaks, 'Oliver', 'Knights')).toBe(true);
  });
});