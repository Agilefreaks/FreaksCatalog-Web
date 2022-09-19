import {
  setSkillsFilter,
  resetSkillsFilter,
  setProjectsFilter,
  resetProjectsFilter,
} from '../slices/filtersSlice';
import FilterType from './FilterType';

export const getFilteredFreaks = (freaks, filters) => {
  const getAttributeFilteredFreaks = (attrName, attrFilters) => {
    if (attrFilters.length === 0) {
      return freaks;
    }

    const isAttrFiltered = (attrs, filter) => attrs.some((attr) => attr === filter);

    const matchesFilters = (attrs) => attrFilters.every((filter) => isAttrFiltered(attrs, filter));

    const hasAllFilteredAttrs = (freak) => {
      const attrs = freak[attrName].map((tech) => tech.name);

      return matchesFilters(attrs);
    };

    return freaks.filter((freak) => hasAllFilteredAttrs(freak));
  };

  const getSkillFilteredFreaks = () => getAttributeFilteredFreaks('technologies', filters.skills);

  const getProjectFilteredFreaks = () => getAttributeFilteredFreaks('projects', filters.projects);

  const intersection = (arr1, arr2) => arr1.filter((x) => arr2.includes(x));

  return intersection(getSkillFilteredFreaks(), getProjectFilteredFreaks());
};

export const getFilterSetter = (type) => {
  switch (type) {
    case FilterType.skills:
      return setSkillsFilter;
    case FilterType.projects:
      return setProjectsFilter;
    default:
      return null;
  }
};

export const getFilterResetter = (type) => {
  switch (type) {
    case FilterType.skills:
      return resetSkillsFilter;
    case FilterType.projects:
      return resetProjectsFilter;
    default:
      return null;
  }
};
