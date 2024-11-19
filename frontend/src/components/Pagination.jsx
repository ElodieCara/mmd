import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    if (totalPages <= 1) return null;

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        const halfRange = Math.floor(maxPagesToShow / 2);

        let start = Math.max(1, currentPage - halfRange);
        let end = Math.min(totalPages, currentPage + halfRange);

        if (currentPage <= halfRange) {
            end = Math.min(totalPages, maxPagesToShow);
        } else if (currentPage + halfRange >= totalPages) {
            start = Math.max(1, totalPages - maxPagesToShow + 1);
        }

        for (let i = start; i <= end; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    className={`pagination__button ${i === currentPage ? "active" : ""}`}
                    onClick={() => onPageChange(i)}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <div className="pagination">
            <button
                className="pagination__arrow"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &laquo;
            </button>
            {renderPageNumbers()}
            <button
                className="pagination__arrow"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                &raquo;
            </button>
        </div>
    );
};

export default Pagination;
