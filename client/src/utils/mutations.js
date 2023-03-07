import { gql } from '@apollo/client';

//query to add user
export const ADD_USER = gql `
    mutation addUser(
        $username: String!,
        $email: String!,
        $password: String!
     ){
        addUser(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
            }
            
        }
     }
`;

export const LOGIN_USER=gql `
    mutation login($email: String!, $password: String!){
     login(email: $email, password: $password){
        token
        user{
            _id
            username
            email
        }
    }
}
`;

export const SAVE_BOOK= gql `
    mutation saveBook($newBook: bookData!){
        saveBook(newBook: $newBook){
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

export const REMOVE_BOOK = gql `
    mutation removeBook($bookId: String!){
        removeBook(bookId: $bookId){
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
