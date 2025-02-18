import Image from "next/image";


// Components
import ButtonLink from "@/components/ButtonLink";
import FrontPageHeading from "@/components/FrontPageHeading";

// Styles
import '@/styles/front-page-style.scss';

// Assets
import SplashImage from '@/assets/splash-image.jpg';

export default function Home() {
  return (
    <main 
      className="front-page-main"
      style={{
        backgroundImage: '/assets/splash-image.jpg'
      }}
    >
      <FrontPageHeading />
      <ButtonLink className="justify-self-end fade-in" href="/aktiviteter">Kom i gang</ButtonLink>
      <Image
        alt={'Frontpage splash image'}
        src={SplashImage}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          zIndex: -2
        }}
      />
    </main>
  );
}