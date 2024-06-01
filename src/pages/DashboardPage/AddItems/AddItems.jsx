import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// console.log(image_hosting_key);
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
// console.log(image_hosting_api);

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data);

        // Upload image to imgbb and get an url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log(res.data);
    };

    return (
        <div>
            <SectionTitle subHeading="What's New?" heading="Add An Item"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register("name", { required: true })}
                            className="input input-bordered w-full" />
                    </label>
                    <div className='flex gap-6'>
                        {/* Category */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue="default" {...register("category", { required: true })} className="select select-bordered w-full ">
                                <option disabled value="default">Select a Category</option>
                                <option value="Salads">Salads</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Soups">Soups</option>
                                <option value="Desserts">Desserts</option>
                                <option value="Drinks">Drinks</option>
                            </select>
                        </label>

                        {/* Price */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register("price", { required: true })}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </label>
                    <div className="form-control w-full my-6">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className='btn bg-orange-600 text-white'>
                        Add Item
                        <FaUtensils />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;