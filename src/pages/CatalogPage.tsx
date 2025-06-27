import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import '../styles/CatalogPage.css';

interface Product {
    id: number;
    name: string;
    weight: string;
    price: number;
    oldPrice: number;
    inStock: boolean;
    category: string;
    image: string;
}

const CatalogPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [onlyAvailable, setOnlyAvailable] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [pages, setPages] = useState<{ [category: string]: number }>({
        Акции: 1,
        Свинина: 1,
        Курица: 1,
    });

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error('Ошибка при загрузке товаров:', err));
    }, []);

    const categories = ['Акции', 'Свинина', 'Курица'];
    const itemsPerPage = 5;

    return (
        <div className="catalog">
            <Filters
                onlyAvailable={onlyAvailable}
                setOnlyAvailable={setOnlyAvailable}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            {categories.map((category) => {
                let categoryProducts = products.filter(
                    (p) =>
                        p.category === category &&
                        p.name.toLowerCase().includes(searchQuery.toLowerCase())
                );

                if (onlyAvailable) {
                    categoryProducts = categoryProducts.filter((p) => p.inStock);
                }

                if (categoryProducts.length === 0) return null;

                const currentPage = pages[category] || 1;
                const startIdx = (currentPage - 1) * itemsPerPage;
                const paginatedProducts = categoryProducts.slice(
                    startIdx,
                    startIdx + itemsPerPage
                );

                const totalPages = Math.ceil(categoryProducts.length / itemsPerPage);

                return (
                    <div
                        className="catalog-section"
                        id={category.toLowerCase()}
                        key={category}
                    >
                        <div className="catalog-header">
                            <h2>{category}</h2>
                            <button className="show-all">Показать все</button>
                        </div>
                        <div className="cards">
                            {paginatedProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className="pagination">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                    (page) => (
                                        <button
                                            key={page}
                                            className={page === currentPage ? 'active' : ''}
                                            onClick={() =>
                                                setPages((prev) => ({ ...prev, [category]: page }))
                                            }
                                        >
                                            {page}
                                        </button>
                                    )
                                )}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default CatalogPage;
