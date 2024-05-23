import { Link } from 'react-router-dom';
import registerImg from '../../assets/others/authentication2.png';
import { useForm } from "react-hook-form";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <img src={registerImg} alt="" />
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-2xl font-bold text-center mt-7">Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register('name', { required: true })} name='name' placeholder="name" className="input input-bordered" />
                            {errors.name && <span className='text-red-600'>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-600'>Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register('password', { required: true, minLength: 6, maxLength: 20 })} name='password' placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "required" && (
                                <p className='text-red-600'>Password is required</p>
                            )}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center my-6'>
                        <small>Already Registered?
                            <Link to="/login" className="link ml-2">
                                Go to Log in
                            </Link>
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;