import React from 'react';
import { FaGoogle } from 'react-icons/fa6';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className='flex justify-center mb-4'>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle />
                    Google Sign in
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;