import React from 'react';
import { FaGoogle } from 'react-icons/fa6';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const user = result.user;

                const userInfo = {
                    name: user?.displayName,
                    email: user?.email
                }

                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
                    .catch(error => {
                        console.log(error);
                    })

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
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;