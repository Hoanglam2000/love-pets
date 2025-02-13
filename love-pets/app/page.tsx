import Image from "next/image";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">🐾 Tình yêu chó mèo 🐾</h1>
      <div className="flex justify-center">
        <Image src="/image.jpg" alt="Dog and Cat" width={600} height={400} className="rounded-lg" />
      </div>
      <p className="text-lg text-center mt-8">
        Chào mừng bạn đến với thế giới của những người yêu thú cưng! Hãy khám phá những điều thú vị về chó và mèo.
      </p>
    </main>
  );
}