import Head from "next/head"

interface BaselayoutProps {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title?: string
  path?: string
  description?: string
}

function BaseLayout({ children, Icon, description, title, path }) {
  const defaulttitle = "Stream TV and Movies Live and Online | Hulu"
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <title>{defaulttitle}</title>
        <title>{title || defaulttitle}</title>
        <meta
          name="title"
          property="og:title"
          content="Stream TV and Movies Live and Online | Hulu"
        />
      </Head>

      {children}
    </>
  )
}
export default BaseLayout
