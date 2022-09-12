import { setSkillsFilter, resetSkillsFilter, setProjectsFilter, resetProjectsFilter } from '../slices/filtersSlice';

export const getFilteredFreaks = (freaks, filters) => {
  const getSkillFilteredFreaks = () => {
    if (filters.skills.length === 0) {
      return freaks;
    }

    const hasAllFilteredTechs = (freak) => {
      const techs = filters.skills;
      const skills = freak.technologies.map((tech) => tech.name);

      return techs.every((tech) => skills.some((skill) => skill === tech));
    };

    return freaks.filter((freak) => hasAllFilteredTechs(freak));
  };

  const getProjectFilteredFreaks = () => {
    if (filters.projects.length === 0) {
      return freaks;
    }

    const isFilteredProj = (proj) => filters.projects.some((filter) => filter === proj.name);

    const hasFilteredProj = (freak) => freak.projects.some((tech) => isFilteredProj(tech));

    return freaks.filter((freak) => hasFilteredProj(freak));
  };

  const intersection = (arr1, arr2) => arr1.filter((x) => arr2.includes(x));

  return intersection(getSkillFilteredFreaks(), getProjectFilteredFreaks());
};

export const getFilterSetter = (type) => {
  switch (type) {
    case 'Skills': return setSkillsFilter;
    case 'Projects': return setProjectsFilter;
    default: return null;
  }
};

export const getFilterResetter = (type) => {
  switch (type) {
    case 'Skills': return resetSkillsFilter;
    case 'Projects': return resetProjectsFilter;
    default: return null;
  }
};
