import React from 'react';
import '../styles/Filters.css';

interface FiltersProps {
    onlyAvailable: boolean;
    setOnlyAvailable: (value: boolean) => void;
    searchQuery: string;
    setSearchQuery: (value: string) => void;
}


const categories = [
    { label: 'Акции', icon: '/icon.png' },
    { label: 'Свинина', icon: '/icon.png' },
    { label: 'Говядина', icon: '/icon.png' },
    { label: 'Наборы', icon: '/icon.png' },
    { label: 'Курица', icon: '/icon.png' },
];

const Filters: React.FC<FiltersProps> = ({ onlyAvailable, setOnlyAvailable, searchQuery,
                                             setSearchQuery }) => {
    const scrollToCategory = (category: string) => {
        const element = document.getElementById(category.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="filters-wrapper">
            <input
                type="text"
                className="search-input"
                placeholder="Искать в магазине"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />


            <div className="checkbox-wrapper">
                <label>
                    <input
                        type="checkbox"
                        checked={onlyAvailable}
                        onChange={() => setOnlyAvailable(!onlyAvailable)}
                    />
                    Только в наличии
                </label>
            </div>

            <div className="categories">
                {categories.map((c) => (
                    <button
                        className="category-btn"
                        key={c.label}
                        onClick={() => scrollToCategory(c.label)}
                    >
                        <img src={c.icon} alt={c.label} className="category-icon"/>
                        {c.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Filters;
