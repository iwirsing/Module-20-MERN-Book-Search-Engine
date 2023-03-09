import { gql } from '@apollo/client';

//mutation to log in
export const LOGIN_USER=gql `
    mutation login($email: String!, $password: String!) {
     login(email: $email, password: $password){
        token
        user{
            _id
            username
        }
    }
}
`;

//mutation to add user
export const ADD_USER = gql `
    mutation addUser($username: String!,$email: String!,$password: String!) {
        addUser(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
            }
            
        }
     }
`;



export const SAVE_BOOK= gql `
    mutation saveBook($bookToSave: bookInput!){
        saveBook(bookToSave: $bookToSave){
            _id
            username
            email
            bookCount
            savedBooks {
                # _id
                bookId
                title
                authors
                description
                image
                link
            }
        }
    } 
`;

export const REMOVE_BOOK = gql `
    mutation removeBook($bookId: ID!){
        removeBook(bookId: $bookId){
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                title
                description
                image
                link
            }
        }
    }
`;
