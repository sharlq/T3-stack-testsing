import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/b522e58a-1902-4eaa-8080-e335edbdda21-206.jpg",
  "https://utfs.io/f/24447cae-d1cd-4f99-8fb7-3342b00733c0-1za.jpg",
  "https://utfs.io/f/b15406c5-113a-4643-a7df-69cb99015116-1lh.webp",
  "https://utfs.io/f/31697938-addf-4dc9-919e-138d46739fbb-1lg.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany({});

  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div>
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
      </div>
      <div className="flex flex-wrap gap-12 px-4 py-16 ">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image, idx) => (
            <div key={image.id + idx}>
              <img
                src={image.url}
                alt={`Image ${image.id}`}
                className="h-48 w-48 rounded-lg object-cover"
              />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
