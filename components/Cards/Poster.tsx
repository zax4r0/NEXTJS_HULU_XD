import Image from "next/image"
import React from "react"
import Link from "next/link"
import { ThumbUpIcon } from "@heroicons/react/outline"

const Post = ({ post }) => (
  <div className="group cursor-pointer p-3  mr-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <a>
        <Image
          src={post.Image}
          // placeholder="blur"
          layout="responsive"
          height={1080}
          width={1920}
          alt={post.title}
        ></Image>
        <h2 className="mt-1 truncate max-w-md text-pink-500 group-hover:text-yellow-400 text-xl transition-all duration-150 ease-in-out group-hover:font-bold ">
          {post.title}
        </h2>
        <div className="flex items-center opacity-0 group-hover:opacity-100">
          <div className="p-2">
            <p className="truncate max-w-md">{post.content}</p>
          </div>
          <ThumbUpIcon className="h-5 mx-2" />
        </div>
      </a>
    </Link>
  </div>
)

export default Post
