import Post from "@/components/Post";
import { getAllPosts } from "@/utils/getAllPosts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "生活高手 | VeryLawrence",
  metadataBase: new URL("https://www.verylawrence.com"),
  openGraph: {
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "VeryLawrence",
      },
    ],
  },
};

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className="w-full flex flex-col gap-y-4">
      {posts.map((post, index) => (
        <div className="w-full flex flex-row" key={index}>
          <Post key={post.slug} post={post} />
        </div>
      ))}
    </main>
  );
}
