import Router, { useRouter } from "next/router"
import React from "react"
import { usePostQuery } from "@/generated/graphql"
import { get } from "lodash"
import withApollo from "@/lib/withApollo"
import { getDataFromTree } from "@apollo/client/react/ssr"
import Image from "next/image"
import { ThumbUpIcon } from "@heroicons/react/outline"

const SinglePost = () => {
  const router = useRouter()
  // const { postId } = router.query
  const postId = get(router.query, "id")
  console.log(router.query)
  const { loading, error, data } = usePostQuery({
    variables: {
      postId,
    },
  })

  if (loading) {
    console.log("loading")
    return <div>Loading ...</div>
  }
  if (error) {
    console.log("error")
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <div className="cursor-pointer p-2  group">
        <a>
          <Image
            src={data.post.Image}
            // placeholder="blur"
            layout="responsive"
            height={1080}
            width={1920}
            alt={data.post.title}
          ></Image>
          <h2 className="mt-1 truncate max-w-md text-white text-xl transition-all duration-100 ease-in-out group-hover:font-bold group-hover:text-green-400">
            {data.post.title}
          </h2>
          <div className="flex items-center opacity-0 group-hover:opacity-100">
            <div className="p-2">
              <small className="truncate max-w-md">
                By {data.post.author.name}
              </small>
              <p className="truncate max-w-md">{data.post.content}</p>
            </div>
            <ThumbUpIcon className="h-5 mx-2" />
          </div>
        </a>
      </div>
    </>
  )
}
export default withApollo(SinglePost, { getDataFromTree })
