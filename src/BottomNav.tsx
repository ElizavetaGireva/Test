import { Home, Search, Heart, User } from 'lucide-react';

export default function BottomNav() {
    return (
        <nav className="fixed bottom-0 w-full bg-white flex justify-around items-center py-3 shadow-md rounded-t-2xl z-10">
            {[Home, Search, Heart, User].map((Icon, i) => (
                <div
                    key={i}
                    className={`flex flex-col items-center ${i === 0 ? 'bg-white p-2 rounded-full shadow-md' : ''}`}
                >
                    <Icon size={24} className={i === 0 ? 'text-blue-700' : 'text-gray-400'} />
                </div>
            ))}
        </nav>
    );
}
