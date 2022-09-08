import PropTypes from 'prop-types';

export const FreakModelKeys = {
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
};

export const FreakModelDefault = {
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
};

const skillShape = {
  value: PropTypes.string,
  name: PropTypes.string,
};

export const FreakModelProps = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  description: PropTypes.string,
  role: PropTypes.string,
  level: PropTypes.string,
  norm: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.shape(skillShape)),
};
