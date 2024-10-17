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
            <div className="card-wrap">
                <img src={item.src} alt={item.name} className="card-wrap-img" />
                <div className="card-wrap-text">
                    <Link className="card-wrap-text-name" to="/goods">{item.name}</Link>
                    <p className="card-wrap-text-price">{item.price}</p>
                </div>
            </div>
        </div>
    );
};
