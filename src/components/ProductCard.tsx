import React from 'react';
import '../styles/ProductCard.css';

interface ProductCardProps {
    product: {
        id: number;
        name: string;
        weight: string;
        price: number;
        oldPrice: number;
        inStock: boolean;
        category: string;
        image: string;
    };
    addToCart: (product: ProductCardProps['product']) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            {!product.inStock && <span className="stock-badge">Нет в наличии</span>}
            <h3>{product.name}</h3>
            <p className="weight">{product.weight}</p>
            <p className="old-price">{product.oldPrice} ₽</p>
            <p className="price">{product.price} ₽/кг</p>
            <button className="buy-btn">В корзину</button>
        </div>
    );
};

export default ProductCard;
