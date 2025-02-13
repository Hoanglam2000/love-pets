import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-bold">
            🐾 Love Pets
          </Link>
          <div className="space-x-4">
            <Link href="/about" className="text-white hover:text-gray-300">
              Về chúng tôi
            </Link>
            <Link href="/blog" className="text-white hover:text-gray-300">
              Blog
            </Link>
          </div>
        </div>
      </nav>
    );
  }