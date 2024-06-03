import { SignedIn, SignedOut } from "@clerk/nextjs";
import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";
// this will make the page update on each visit to view the suggestions
// for the next js plugins in ts you need to use the ts version of the workspace

async function Images() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap gap-12 px-4 py-16 ">
      {images.map((image, idx) => (
        <div key={image.id + idx}>
          <Link href={`/img/${image.id}`} passHref>
            <Image
              src={image.url}
              alt={`Image ${image.id}`}
              className="h-48 w-48 rounded-lg object-cover"
              width={500}
              height={500}
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  //headers();
  /* 
    using headers here is to force the component to be dynamic 
    because if there is nothing shows Next.JS that the component is specific to the client, 
    it will be show a cached version of the page without the updates
  */

  //const posts = await db.query.posts.findMany({});

  //console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <SignedOut>Please sign in to view the gallery</SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
