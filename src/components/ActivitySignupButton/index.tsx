'use client'

import { useEffect, useState } from 'react';

// Styles
import './button-style.scss';
import { checkUserActivitySignup } from '@/actions/activity-signup';


export default function Button(
{
    activityId,
    className
}: {
    activityId: string,
    className?: string
} ){
    const [ signupStatus, setSignupStatus ] = useState(false);

    useEffect(() => {
        async function updateSignupStatus() {
            try {
                setSignupStatus(
                    await checkUserActivitySignup( activityId )
                )
            } catch ( error ) {
                
            }
        }
        updateSignupStatus();
    }, []);

    return(
        <button
            className={`baseButtonStyling${ className ? ' ${className}' : ''}`}
            // onClick={}
        >
            { signupStatus ? 'Frameld' : 'Tilmeld' }
        </button>
    )
};