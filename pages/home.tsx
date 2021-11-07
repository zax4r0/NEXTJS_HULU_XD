import Header from "../components/Header/Header"
import { HomeIcon } from "@heroicons/react/outline"
import React from "react"
import BaseLayout from "@/components/Layout/BaseLayout"
import HorrizontalLoader from "@/components/Loader/HorrizontalLoader"
import { useXdQuery } from "@/generated/graphql"
import withApollo from "@/lib/withApollo"
import { getDataFromTree } from "@apollo/client/react/ssr"
import Post from "@/components/Cards/Poster"

const Home = () => {
  const { data, loading, error } = useXdQuery()

  if (loading) {
    return (
      <>
        <HorrizontalLoader />
      </>
    )
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="disable-select">
      <BaseLayout
        title=""
        path="/"
        description="Stream Movies and Shows For free"
        Icon={HomeIcon}
      >
        <Header />
        <div className="px-5 my-10 sm:grid md:grid-cols-3 xl:grid-cols-3  3xl:flex flex-wrap justify-center transition-all duration-300 ">
          {data.feed.map(post => (
            <div key={post.id} className="post ">
              <Post post={post} />
            </div>
          ))}
        </div>
      </BaseLayout>
    </div>
  )
}

export default withApollo(Home, { getDataFromTree })
