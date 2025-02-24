import { useEffect, useState } from 'react';
import { verifySession } from '@/lib/dal';
import { checkUserActivitySignup } from '@/actions/activity-signup';

export function useUserActivitySignup( activityId : string ) {
    'use client';

    const [signupStatus, setSignupStatus] = useState(null);
    const isloggedin = verifySession();

    async function checkUserActivitySignup( activityId : string ) {
        const signupStatus = await checkUserActivitySignup( activityId );
        setSignupStatus( signupStatus );
    }

    useEffect(() => {
        if ( isloggedin ) {
            checkUserActivitySignup( activityId );
        }
    }, []);

    return {
        signupStatus,
        setSignupStatus,
    };
}

