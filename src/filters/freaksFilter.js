export const getFilteredFreaks = (freaks, filters) => {
    const getSkillFilteredFreaks = () => {
      if (filters.skills.length === 0) {
        return freaks;
      }

      const isFilteredTech = tech => {
        return filters.skills.some(filter => filter === tech.name)
      };

      const hasFilteredTech = freak => {
        return freak.technologies.some(tech => isFilteredTech(tech))
      };

      return freaks.filter( freak => hasFilteredTech(freak));
    };

    const getProjectFilteredFreaks = () => {
      if (filters.projects.length === 0) {
        return freaks;
      }

      const isFilteredProj = proj => {
        return filters.projects.some(filter => filter === proj.name)
      };

      const hasFilteredProj = freak => {
        return freak.projects.some(tech => isFilteredProj(tech))
      };

      return freaks.filter( freak => hasFilteredProj(freak));
    };

    const intersection = (arr1, arr2) => {
      return arr1.filter(x => arr2.includes(x));
    };

    return intersection(getSkillFilteredFreaks(), getProjectFilteredFreaks());
  }
