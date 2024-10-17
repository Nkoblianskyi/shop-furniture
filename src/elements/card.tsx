import React from 'react';
import { Link } from 'react-router-dom';

interface Item {
    id: number;
    src: string;
    name: string;
    price: string;
}

interface CardProps {
    item: Item;
}

export const Card: React.FC<CardProps> = ({ item }) => {

    return (
        <div className="card">
            <Link to="/goods" className="card-link" style={{ display: 'block' }}>
                <div className="card-wrap">
                    <img
                        src={item.src}
                        alt={item.name}
                        className="card-wrap-img"
                    />
                    <div className="card-wrap-text">
                        <p
                            className="card-wrap-text-name"
                        >
                            {item.name}
                        </p>
                        <p
                            className="card-wrap-text-price"
                        >
                            {item.price}
                        </p>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log('Додано до кошика');
                            }}
                        >
                            Купити
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};
