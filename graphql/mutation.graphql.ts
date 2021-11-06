import gql from "graphql-tag"

export const PublishMutation = gql`
  mutation PublishMutation($postId: String!) {
    publish(postId: $postId) {
      id
      title
      content
      Image
      published
      author {
        id
        name
      }
    }
  }
`

export const DeleteMutation = gql`
  mutation DeleteMutation($postId: String!) {
    deletePost(postId: $postId) {
      id
      title
      content
      published
      Image
      author {
        id
        name
      }
    }
  }
`
export const SignupMutation = gql`
  mutation SignupMutation($name: String, $email: String!) {
    signupUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`
