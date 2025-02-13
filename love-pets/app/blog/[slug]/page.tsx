import { notFound } from "next/navigation";

const posts = [
    { id: 1, title: "Cách chăm sóc chó con", content: "Những điều cần biết khi nuôi chó con." },
    { id: 2, title: "Cách chăm sóc mèo con", content: "Những điều cần biết khi nuôi mèo con." },
];

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = posts.find((post) => post.id === Number(params.slug));
    if (!post) return notFound();
  
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg">{post.content}</p>
        {/* <CommentForm postId={post.id} /> */}
      </div>
    );
  }