import PropTypes from 'prop-types';

export const FreakModelKeys = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  picture: 'picture',
  description: 'description',
  role: 'role',
  level: 'level',
  norm: 'norm',
  skills: 'skills',
  projects: 'projects',
  technologies: 'technologies',
};

export const PhotoModelProps = {
  uri: PropTypes.string,
};

export const FreakModelDefault = {
  [FreakModelKeys.id]: '',
  [FreakModelKeys.firstName]: '',
  [FreakModelKeys.lastName]: '',
  [FreakModelKeys.email]: '',
  [FreakModelKeys.picture]: '',
  [FreakModelKeys.description]: '',
  [FreakModelKeys.role]: '',
  [FreakModelKeys.level]: '',
  [FreakModelKeys.norm]: '',
  [FreakModelKeys.skills]: [],
  [FreakModelKeys.projects]: [],
  [FreakModelKeys.technologies]: [],
};

export const roleShape = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export const normShape = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export const levelShape = {
  id: PropTypes.string,
  name: PropTypes.string,
};

const skillShape = {
  value: PropTypes.string,
  name: PropTypes.string,
};

const projectShape = {
  value: PropTypes.string,
  name: PropTypes.string,
};

const technologiesShape = {
  value: PropTypes.string,
  name: PropTypes.string,
};

export const FreakModelProps = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  photo: PropTypes.shape(PhotoModelProps),
  description: PropTypes.string,
  role: PropTypes.shape(roleShape),
  level: PropTypes.shape(levelShape),
  norm: PropTypes.shape(normShape),
  skills: PropTypes.arrayOf(PropTypes.shape(skillShape)),
  projects: PropTypes.arrayOf(PropTypes.shape(projectShape)),
  technologies: PropTypes.arrayOf(PropTypes.shape(technologiesShape)),
};
