import {
  gql,
} from '@apollo/client';

const getAll = gql`
  query GetFreaks {
    freaks {
      nodes { 
        id, 
        firstName, 
        photo {
          uri
        }
      }
    }
  }
`;

const getTechnologies = gql`
  query GetTechnologies {
      technologies {
        id
        name
      }
  }
`;

const get = (id) => gql`
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

export default {
  getAll, get, getTechnologies,
};
