import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: "zax4r0",
    email: "zax4r0@gmail.com",
    posts: {
      create: [
        {
          title: "The Princess Switch ",
          content:
            "The Princess Switch is a 2018 American Christmas romantic comedy film directed by Mike Rohl from a screenplay by Robin Bernheim and Megan Metzger",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/the-princess-switch-movie_bWVmbGqUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "zax4r0",
    email: "alicdcdcdcce@prisma.io",
    posts: {
      create: [
        {
          title: "The Batman",
          content:
            "The Batman is an upcoming American superhero film based on the DC Comics character Batman. Produced by DC Films, 6th & Idaho, and Dylan Clark Productions,",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/the-batman-hd-redart_bWVmam6UmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "zax4r0",
    email: "zax4r0@gmail.com",
    posts: {
      create: [
        {
          title: "Uncharted",
          content:
            "Uncharted is an upcoming American action adventure film directed by Ruben Fleischer and screenplay by Rafe Judkins, Art Marcum and Matt Hollowa",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/uncharted-4k-tom-holland-as-nathan-drake_bWVnZW6UmZqaraWkpJRpZWVlrWhlZWU.jpg",
        },
      ],
    },
  },
  {
    name: "zax4r0",
    email: "alice@prisma.io",
    posts: {
      create: [
        {
          title: "Money Heist",
          content:
            "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/money-heist_a2ttbG2UmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "zax4r0",
    email: "alice@prisma.auuvufdvudfio",
    posts: {
      create: [
        {
          title: "Star Wars The Mandalorian",
          content:
            "The Mandalorian is an American space Western television series created by Jon Favreau for the streaming service Disney+. It is the first live-action series ...",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/star-wars-the-mandalorian_a2tqa26UmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "zax4r0",
    email: "zax4r0@gmail.com",
    posts: {
      create: [
        {
          title: "Mila Azul ",
          content: "Mila Azul. #Model #Musician #Animelover",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/mila-azul-ukrainian-sexy-model_a2VubmuUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "zax4r0",
    email: "zax4r0@gmail.com",
    posts: {
      create: [
        {
          title: "Avengers Endgame",
          content:
            "vengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/avengers-endgame-2019-movie_a2loaGWUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "testuser69",
    email: "testuser69@gmail.com",
    posts: {
      create: [
        {
          title: "Akatsuki Organization",
          content:
            "The Akatsuki was a secret criminal organization that gathers most of the major antagonists and later the main antagonists of the Naruto series. The Akatsuki contains over 10 official members, a handful of unofficial members, and all except for one are males.",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/akatsuki-organization-anime_a2xqbGeUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "testuser69",
    email: "testuser69@gmail.com",
    posts: {
      create: [
        {
          title: "Venom Let There Be Carnage",
          content:
            "Venom: Let There Be Carnage is a 2021 American superhero film featuring the Marvel Comics character Venom, produced by Columbia Pictures in association with",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/venom-let-there-be-carnage-4k-digital-art-2021_bWVlbWeUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "testuser69",
    email: "testuser69@gmail.com",
    posts: {
      create: [
        {
          title: "Scream 2022",
          content:
            "Scream is an upcoming American slasher film that serves as the fifth installment of the Scream film series. It is directed by Matt Bettinelli-Olpin and ",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/scream-2022-movie_bWVlbGuUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "testuser69",
    email: "testuser69@gmail.com",
    posts: {
      create: [
        {
          title: "Eternals",
          content:
            "Eternals is a 2021 American superhero film based on the Marvel Comics race of the same name. Produced by Marvel Studios and distributed by Walt Disney ",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/salma-hayek-as-ajak-eternals-movie_bWVlZWiUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "testuser69",
    email: "testuser69@gmail.com",
    posts: {
      create: [
        {
          title: "Tick Tick BOOM",
          content:
            "Tick, Tick... Boom is an upcoming American musical drama film directed by Lin-Manuel Miranda in his feature directorial debut, from a screenplay by Steven .",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/vanessa-hudgens-in-tick-tick-boom_bG5ubGaUmZqaraWkpJRmbmdlrWZlbWU.jpg",
        },
      ],
    },
  },
  {
    name: "testuser69",
    email: "testuser69@gmail.com",
    posts: {
      create: [
        {
          title: "No One Gets Out Alive",
          content:
            "No One Gets Out Alive ... Desperate and without documentation, a woman from Mexico moves into a rundown Cleveland boardinghouse. Then the unsettling cries and ...",
          published: true,
          Image:
            "https://images.wallpapersden.com/image/download/no-one-gets-out-alive-hd-movie_bG5tZW6UmZqaraWkpJRmbmdlrWZlbWU.jpg",
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
