import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
}

export type Mutation = {
  __typename?: "Mutation"
  createDraft?: Maybe<Post>
  deletePost?: Maybe<Post>
  publish?: Maybe<Post>
  signupUser?: Maybe<User>
}

export type MutationCreateDraftArgs = {
  authorEmail?: Maybe<Scalars["String"]>
  content?: Maybe<Scalars["String"]>
  title: Scalars["String"]
}

export type MutationDeletePostArgs = {
  postId?: Maybe<Scalars["String"]>
}

export type MutationPublishArgs = {
  postId?: Maybe<Scalars["String"]>
}

export type MutationSignupUserArgs = {
  email: Scalars["String"]
  name?: Maybe<Scalars["String"]>
}

export type Post = {
  __typename?: "Post"
  Image?: Maybe<Scalars["String"]>
  author?: Maybe<User>
  content?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
  published?: Maybe<Scalars["Boolean"]>
  title?: Maybe<Scalars["String"]>
}

export type Query = {
  __typename?: "Query"
  drafts?: Maybe<Array<Maybe<Post>>>
  feed?: Maybe<Array<Maybe<Post>>>
  filterPosts?: Maybe<Array<Maybe<Post>>>
  post?: Maybe<Post>
}

export type QueryFilterPostsArgs = {
  searchString?: Maybe<Scalars["String"]>
}

export type QueryPostArgs = {
  postId: Scalars["String"]
}

export type User = {
  __typename?: "User"
  email?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  posts?: Maybe<Array<Maybe<Post>>>
}

export type PublishMutationMutationVariables = Exact<{
  postId: Scalars["String"]
}>

export type PublishMutationMutation = {
  __typename?: "Mutation"
  publish?:
    | {
        __typename?: "Post"
        id?: string | null | undefined
        title?: string | null | undefined
        content?: string | null | undefined
        Image?: string | null | undefined
        published?: boolean | null | undefined
        author?:
          | {
              __typename?: "User"
              id?: string | null | undefined
              name?: string | null | undefined
            }
          | null
          | undefined
      }
    | null
    | undefined
}

export type DeleteMutationMutationVariables = Exact<{
  postId: Scalars["String"]
}>

export type DeleteMutationMutation = {
  __typename?: "Mutation"
  deletePost?:
    | {
        __typename?: "Post"
        id?: string | null | undefined
        title?: string | null | undefined
        content?: string | null | undefined
        published?: boolean | null | undefined
        Image?: string | null | undefined
        author?:
          | {
              __typename?: "User"
              id?: string | null | undefined
              name?: string | null | undefined
            }
          | null
          | undefined
      }
    | null
    | undefined
}

export type SignupMutationMutationVariables = Exact<{
  name?: Maybe<Scalars["String"]>
  email: Scalars["String"]
}>

export type SignupMutationMutation = {
  __typename?: "Mutation"
  signupUser?:
    | {
        __typename?: "User"
        id?: string | null | undefined
        name?: string | null | undefined
        email?: string | null | undefined
      }
    | null
    | undefined
}

export type XdQueryVariables = Exact<{ [key: string]: never }>

export type XdQuery = {
  __typename?: "Query"
  feed?:
    | Array<
        | {
            __typename?: "Post"
            id?: string | null | undefined
            title?: string | null | undefined
            content?: string | null | undefined
            published?: boolean | null | undefined
            Image?: string | null | undefined
            author?:
              | { __typename?: "User"; name?: string | null | undefined }
              | null
              | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export type PostQueryVariables = Exact<{
  postId: Scalars["String"]
}>

export type PostQuery = {
  __typename?: "Query"
  post?:
    | {
        __typename?: "Post"
        Image?: string | null | undefined
        id?: string | null | undefined
        title?: string | null | undefined
        content?: string | null | undefined
        published?: boolean | null | undefined
        author?:
          | { __typename?: "User"; name?: string | null | undefined }
          | null
          | undefined
      }
    | null
    | undefined
}

export const PublishMutationDocument = gql`
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
export type PublishMutationMutationFn = Apollo.MutationFunction<
  PublishMutationMutation,
  PublishMutationMutationVariables
>

/**
 * __usePublishMutationMutation__
 *
 * To run a mutation, you first call `usePublishMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishMutationMutation, { data, loading, error }] = usePublishMutationMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePublishMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PublishMutationMutation,
    PublishMutationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PublishMutationMutation,
    PublishMutationMutationVariables
  >(PublishMutationDocument, options)
}
export type PublishMutationMutationHookResult = ReturnType<
  typeof usePublishMutationMutation
>
export type PublishMutationMutationResult =
  Apollo.MutationResult<PublishMutationMutation>
export type PublishMutationMutationOptions = Apollo.BaseMutationOptions<
  PublishMutationMutation,
  PublishMutationMutationVariables
>
export const DeleteMutationDocument = gql`
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
export type DeleteMutationMutationFn = Apollo.MutationFunction<
  DeleteMutationMutation,
  DeleteMutationMutationVariables
>

/**
 * __useDeleteMutationMutation__
 *
 * To run a mutation, you first call `useDeleteMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMutationMutation, { data, loading, error }] = useDeleteMutationMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDeleteMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteMutationMutation,
    DeleteMutationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteMutationMutation,
    DeleteMutationMutationVariables
  >(DeleteMutationDocument, options)
}
export type DeleteMutationMutationHookResult = ReturnType<
  typeof useDeleteMutationMutation
>
export type DeleteMutationMutationResult =
  Apollo.MutationResult<DeleteMutationMutation>
export type DeleteMutationMutationOptions = Apollo.BaseMutationOptions<
  DeleteMutationMutation,
  DeleteMutationMutationVariables
>
export const SignupMutationDocument = gql`
  mutation SignupMutation($name: String, $email: String!) {
    signupUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`
export type SignupMutationMutationFn = Apollo.MutationFunction<
  SignupMutationMutation,
  SignupMutationMutationVariables
>

/**
 * __useSignupMutationMutation__
 *
 * To run a mutation, you first call `useSignupMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutationMutation, { data, loading, error }] = useSignupMutationMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSignupMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignupMutationMutation,
    SignupMutationMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    SignupMutationMutation,
    SignupMutationMutationVariables
  >(SignupMutationDocument, options)
}
export type SignupMutationMutationHookResult = ReturnType<
  typeof useSignupMutationMutation
>
export type SignupMutationMutationResult =
  Apollo.MutationResult<SignupMutationMutation>
export type SignupMutationMutationOptions = Apollo.BaseMutationOptions<
  SignupMutationMutation,
  SignupMutationMutationVariables
>
export const XdDocument = gql`
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

/**
 * __useXdQuery__
 *
 * To run a query within a React component, call `useXdQuery` and pass it any options that fit your needs.
 * When your component renders, `useXdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useXdQuery({
 *   variables: {
 *   },
 * });
 */
export function useXdQuery(
  baseOptions?: Apollo.QueryHookOptions<XdQuery, XdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<XdQuery, XdQueryVariables>(XdDocument, options)
}
export function useXdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<XdQuery, XdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<XdQuery, XdQueryVariables>(XdDocument, options)
}
export type XdQueryHookResult = ReturnType<typeof useXdQuery>
export type XdLazyQueryHookResult = ReturnType<typeof useXdLazyQuery>
export type XdQueryResult = Apollo.QueryResult<XdQuery, XdQueryVariables>
export const PostDocument = gql`
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

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePostQuery(
  baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options)
}
export function usePostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(
    PostDocument,
    options
  )
}
export type PostQueryHookResult = ReturnType<typeof usePostQuery>
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>
