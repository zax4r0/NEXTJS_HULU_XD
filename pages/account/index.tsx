import { HomeIcon } from "@heroicons/react/outline"
import React from "react"
import BaseLayout from "@/components/Layout/BaseLayout"
import HorrizontalLoader from "@/components/Loader/HorrizontalLoader"
import { useXdQuery } from "@/generated/graphql"
import withApollo from "@/lib/withApollo"
import { getDataFromTree } from "@apollo/client/react/ssr"
import Post from "@/components/Cards/Poster"

const Account = () => {
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
        <div></div>
      </BaseLayout>
    </div>
  )
}

export default withApollo(Account, { getDataFromTree })
