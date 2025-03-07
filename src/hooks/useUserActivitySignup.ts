import { useEffect, useState } from 'react';
import { verifySession } from '@/lib/dal';
import { checkUserActivitySignupAction } from '@/actions/activity-signup';

export function useUserActivitySignup( activityId : string ) {
    'use client';

    const [signupStatus, setSignupStatus] = useState<boolean>(false);
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isloggedin, setIsloggedin] = useState<boolean>(false);

    async function checkUserActivitySignup( activityId : string ) {
        const signupStatus = await checkUserActivitySignupAction( activityId );
        setSignupStatus( signupStatus );
    }
    async function checkSession() {
        const isloggedin = await verifySession();
        setIsloggedin( isloggedin );
    }

    useEffect(() => {
        checkSession();

        if ( isloggedin ) {
            checkUserActivitySignup( activityId );
        }
        
    }, []);

    return {
        signupStatus,
        setSignupStatus,
        isPending,
        isloggedin
    };
}

