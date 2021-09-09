import {
  gql,
} from '@apollo/client';

const FreakUpdate = () => gql`
mutation freakUpdate(
  $id: ID!
  $firstName: String
  $lastName: String
  $description: String
  $email: String
  $normId: ID
  $roleId: ID
  $levelId: ID
){
  freakUpdate(
    id: $id,
    firstName: $firstName ,
    lastName: $lastName ,
    description: $description,
    email: $email,
    normId: $normId,
    roleId: $roleId,
    levelId: $levelId,
  ) {
    firstName
    lastName
    description
    email
    norm {
      name
    }
    role {
      name
    }
    level {
      name
    }
  }
}
`;

const FreakCreate = () => gql`
  mutation freakCreate(
    $firstName: String!
    $lastName: String!
    $description: String!
    $email: String!
    $normId: ID!
    $roleId: ID!
    $levelId: ID!
    ) {
    freakCreate (
      firstName: $firstName ,
      lastName: $lastName ,
      description: $description,
      email: $email,
      normId: $normId,
      roleId: $roleId,
      levelId: $levelId,
    ) 
    {
      firstName
      lastName
      email
      description
      norm {
        id
        name
      }
      role {
        id
        name
      }
      level {
        id
        name
      }
    }
  }
`;

export default { FreakCreate, FreakUpdate };
