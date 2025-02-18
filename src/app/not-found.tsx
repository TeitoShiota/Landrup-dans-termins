import Image from "next/image"

import SplashImage from '@/assets/splash-image.jpg'


export default function NotFoundPage(){
    return(
        <main className="center-content">
            <h2>Page Not found</h2>
            <Image
                alt={'Background splash image'}
                src={SplashImage}
                placeholder="blur"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                    zIndex: -10
                }}
            />
            <div className="page-main__background-overlay"></div>

        </main>
    )
}