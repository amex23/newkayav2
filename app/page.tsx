import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-start p-12 px-16">
        <h1 className="scroll-m-20 text-4xl font-semibold lg:text-5xl">
          WelcomeHomes <br />Order Summary
        </h1>
        <Image
          src="/kaya.svg"
          width={125}
          height={80}
          alt="Kaya"
        />
      </div>
    </div>
  );
}
