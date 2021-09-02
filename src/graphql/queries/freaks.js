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

export default {
  getAll,
};
