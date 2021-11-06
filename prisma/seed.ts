import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Slack",
          content: "https://slack.prisma.io",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/poster-of-avengers-endgame-movie_a2htaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "cdcdcdc",
    email: "alicdcdcdcce@prisma.io",
    posts: {
      create: [
        {
          title: "cdcdcdcdcdcdcdca Slack",
          content: "https://slack.prisma.io",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/poster-of-avengers-endgame-movie_a2htaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "Acdscdcdlice",
    email: "alicdcdcscscsce@prisma.io",
    posts: {
      create: [
        {
          title: "dcdscdcdscdsscdscdJoin the Prisma Slack",
          content: "https://slack.prisma.io",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/poster-of-avengers-endgame-movie_a2htaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Slack",
          content: "https://slack.prisma.io",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/poster-of-avengers-endgame-movie_a2htaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "Alivfvusfvusfkvbjfskvbce",
    email: "alice@prisma.auuvufdvudfio",
    posts: {
      create: [
        {
          title: "Join the Prisma Sldfkvbjdfkvbksbvskvbskfvack",
          content: "https://slack.prisma.io",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/poster-of-avengers-endgame-movie_a2htaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "Alice",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Slack",
          content: "https://slack.prisma.io",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/poster-of-avengers-endgame-movie_a2htaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "Nilvfvusfvusfkvbjfskvbu",
    email: "nilu@prisma.auuvufdvudfio",
    posts: {
      create: [
        {
          title: "Follow Prisma on dfkvbjdfkvbksbvskvbskfvTwitter",
          content: "https://www.twitter.com/prisma",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/poster-of-avengers-endgame-movie_a2htaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "Alihakvhfdkvhfdsce",
    email: "alidkavbjkfvbjfkvce@prisma.io",
    posts: {
      create: [
        {
          title: "Join the Prisma Slack",
          content: "https://slack.prisma.io",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/poster-of-avengers-endgame-movie_a2htaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "Mahmohakvhfdkvhfdsud",
    email: "mahmodkavbjkfvbjfkvud@prisma.io",
    posts: {
      create: [
        {
          title: "Ask a question about Prisma on GitHub",
          content: "https://www.github.com/prisma/prisma/discussions",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/poster-of-avengers-endgame-movie_a2htaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
        },
      ],
    },
  },
  {
    name: "fvdfvfvfAlSVdzfvdice",
    email: "fdvdfvfvfvfdvalice@prisma.io",
    posts: {
      create: [
        {
          title: "fvfdvfvfvfdvfvfJoin the Prisma Slack",
          content: "https://slack.prisma.io",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/poster-of-avengers-endgame-movie_a2htaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "cdsvsvAlice",
    email: "dscdscdscsdcalice@prisma.io",
    posts: {
      create: [
        {
          title: "cscsdcdscdscdscsdJoin the Prisma Slack",
          content: "https://slack.prisma.io",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/poster-of-avengers-endgame-movie_a2htaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "sdcsdcsdcsdcAlice",
    email: "sdcsdcsdcscsalice@prisma.io",
    posts: {
      create: [
        {
          title: "dssdvVavdsvaJoin the Prisma Slack",
          content: "https://slack.prisma.io",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/poster-of-avengers-endgame-movie_a2htaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
]

export async function main() {
  try {
    console.log(`Start seeding ...`)
    for (const u of userData) {
      const user = await prisma.user.create({
        data: u,
      })
      console.log(`Created user with id: ${user.id}`)
    }
    console.log(`Seeding finished.`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
