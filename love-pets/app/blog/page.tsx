import Link from "next/link";

export default function Blog() {
    const posts = [
      { id: 1, title: "Cách chăm sóc chó con", content: "Những điều cần biết khi nuôi chó con." },
      { id: 2, title: "Cách chăm sóc mèo con", content: "Những điều cần biết khi nuôi mèo con." },
    ];
  
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Blog</h1>
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
              <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
              Xem thêm
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }