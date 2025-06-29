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

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error('Ошибка при загрузке товаров:', err));
    }, []);

    const categories = ['Акции', 'Свинина', 'Курица'];
    const addToCart = (product: Product) => {
        console.log('Добавлен в корзину:', product);
    };

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
                            {categoryProducts.map((p) => (
                                <ProductCard key={p.id} product={p} addToCart={addToCart} />

                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CatalogPage;
