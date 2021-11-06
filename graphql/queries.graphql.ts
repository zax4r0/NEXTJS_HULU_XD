import { InputFiled } from "../components/Forms/Fields/InputFileds"
import gql from "graphql-tag"

export const FEED_QUERY = gql`
  query xd {
    feed {
      id
      title
      content
      published
      Image
      author {
        name
      }
    }
  }
`
export const POST_QUERY = gql`
  query Post($postId: String!) {
    post(postId: $postId) {
      Image
      id
      title
      content
      published
      Image
      author {
        name
      }
    }
  }
`
