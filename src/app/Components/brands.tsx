import Image from "next/image";

export default function Brands() {
  return (
    <section className="brands max-w-[1980px] mx-auto mt-[80px] xl:mt-[200px] relative z-20">
      <div className="mx-auto">
        <div className="flex flex-col xl:flex-row justify-center items-center gap-12 xl:scale-130">
          <Image
            src="/brands/01.svg"
            alt="Modern Home"            
            width={200}
            height={200}
            objectFit="cover"
            className=""
            quality={100}
            priority={true}
          />
          <Image
            src="/brands/02.svg"
            alt="Interior Style Vintage"            
            width={200}
            height={200}
            objectFit="cover"
            className=""
            quality={100}
            priority={true}
          />
          <Image
            src="/brands/03.svg"
            alt="Brand"            
            width={200}
            height={200}
            objectFit="cover"
            className=""
            quality={100}
            priority={true}
          />
          <Image
            src="/brands/04.svg"
            alt="Nature Home"            
            width={200}
            height={200}
            objectFit="cover"
            className=""
            quality={100}
            priority={true}
          />
          <Image
            src="/brands/05.svg"
            alt="Classic Design Studio"            
            width={200}
            height={200}
            objectFit="cover"
            className=""
            quality={100}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
