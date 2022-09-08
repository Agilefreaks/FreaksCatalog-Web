import { gql } from '@apollo/client';

const getMetadata = () => gql`
  query GetMetadata {
    technologies {
      id
      name
    }
    projects {
      id
      name
    }
  }
`;

const getAll = () => gql`
  query GetAll {
    freaks {
      nodes {
        id
        firstName
        photo {
          uri
        }
        technologies {
          id
          name
          description
        }
      }
    }
    technologies {
      id
      name
    }
    projects {
      id
      name
    }
  }
`;

const getFreak = (id) => gql`
  query Get {
    freak(id: ${ id }) {
      id
      firstName
      lastName
      photo {
        uri
      }
      description
      email
      role {
        id
        name
      }
      level {
        id
        name
      }
      norm {
        id
        name
      }
      projects {
        id
        name
      }
      skills {
        id
        name
      }
      specialties {
        id
        name
      }
      technologies {
        id
        name
        description
      }
    }
  }
`;

export default { getMetadata, getAll, getFreak };
