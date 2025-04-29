import React from 'react';

export default function ProductList({ products }) {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { 
            style: 'currency', 
            currency: 'VND' 
        }).format(amount);
    };

    return (
        <div className="row">
            {products.length === 0 ? (
                <div className="col-12 text-center">
                    <p className="alert alert-info">Chưa có sản phẩm nào. Hãy thêm sản phẩm mới!</p>
                </div>
            ) : (
                products.map(product => (
                    <div className="col-md-3 mb-3" key={product.id}>
                        <div className="card h-100 shadow-sm">
                            <div className="position-relative">
                                <img 
                                    src={product.image} 
                                    className="card-img-top" 
                                    alt={product.name}
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />
                                {product.old_price > product.price && (
                                    <div className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 m-2 rounded">
                                        Sale {Math.round((1 - product.price / product.old_price) * 100)}%
                                    </div>
                                )}
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text text-muted mb-1">Danh mục: {product.name_category}</p>
                                <p className="card-text text-muted mb-2">Mã: {product.code}</p>
                                <div className="mt-auto">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="text-primary fw-bold fs-5">
                                            {formatCurrency(product.price)}
                                        </span>
                                        {product.old_price && product.old_price > product.price && (
                                            <span className="text-muted text-decoration-line-through">
                                                {formatCurrency(product.old_price)}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
