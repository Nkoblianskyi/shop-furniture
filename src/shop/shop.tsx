import { useEffect, useState, useRef } from 'react';
import { Card } from "../elements/card";
import itemsData from '../mocks/items.json';

interface Item {
    id: number;
    src: string;
    name: string;
    price: string;
}

export const Shop = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        setItems(itemsData);
    }, []);

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const shopTitleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (shopTitleRef.current) {
            shopTitleRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [currentPage]);

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="shop">
            <h1 ref={shopTitleRef}></h1>
            <div className="shop-list">
                {items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(item => (
                    <Card
                        key={item.id}
                        item={{
                            ...item,
                            src: item.src
                        }}
                    />
                ))}
            </div>
            {totalPages > 1 && (
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
                    <span>{currentPage} / {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                </div>
            )}
        </div>
    );
};
