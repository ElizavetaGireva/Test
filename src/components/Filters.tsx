import React from 'react';
import '../styles/Filters.css';

interface FiltersProps {
    onlyAvailable: boolean;
    setOnlyAvailable: (value: boolean) => void;
    searchQuery: string;
    setSearchQuery: (value: string) => void;
}


const categories = [
    { label: 'Акции', icon: '/icon1.png' },
    { label: 'Свинина', icon: '/icon1.png' },
    { label: 'Говядина', icon: '/icon2.png' },
    { label: 'Наборы', icon: '/icon1.png' },
    { label: 'Курица', icon: '/icon3.png' },
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
            <div className="search-bar">
                <img src="/search.png" alt="Поиск" className="search-icon"/>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Искать в магазине"
                />
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
