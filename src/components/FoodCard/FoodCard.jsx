import React from 'react';

const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;

    const handleAddToCart = item => {
        console.log(item);
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="badge badge-neutral absolute right-5 top-3">${price}</div>
            <div className="card-body justify-center items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn btn-outline mt-4 border-0 border-b-4 border-orange-400">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;