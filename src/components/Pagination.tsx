interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
    return (
        <div className="flex justify-center my-4 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i}
                    onClick={() => onPageChange(i + 1)}
                    className={`px-3 py-1 rounded ${i + 1 === currentPage ? 'bg-orange-400 text-white' : 'bg-gray-700 text-white'}`}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
