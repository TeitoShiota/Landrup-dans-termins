'use client'

import Image from "next/image"
import Button from '@/components/Button'
import { useEffect } from 'react'

import SplashImage from '@/assets/splash-image.jpg'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])
    
    return (
        <main className="center-content">
            <h2>Something went wrong!</h2>
            <h3>{ error.message }</h3>

            <Button 
                text='Try again'
                // Attempt to recover by trying to re-render the segment
                onClick={() => reset()}
            />
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
            <div className="page-main__background-overlay"></div>
        </main>
    )
}