import React, { useState, useEffect } from 'react';
import Data from './Data';
import ProductList from './ProductList';

export default function Add() {
    const [name, setName] = useState('');
    const [nameCategory, setNameCategory] = useState('Thời trang nam');
    const [code, setCode] = useState('');
    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [price, setPrice] = useState('');
    const [oldPrice, setOldPrice] = useState('');
    const [products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const storedProducts = localStorage.getItem("products");
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        } else {
            const initialProducts = Data("products");
            setProducts(initialProducts);
            localStorage.setItem("products", JSON.stringify(initialProducts));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        if (name === 'name_category') setNameCategory(value);
        if (name === 'code') setCode(value);
        if (name === 'price') setPrice(value);
        if (name === 'old_price') setOldPrice(value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const preview = URL.createObjectURL(file);
            setImage(preview);
            setImagePreview(preview);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: Date.now(),
            name,
            name_category: nameCategory,
            code,
            image: image || "https://via.placeholder.com/150",
            price,
            old_price: oldPrice
        };

        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));

        
        setName('');
        setNameCategory('Thời trang nam');
        setCode('');
        setImage('');
        setImagePreview('');
        setPrice('');
        setOldPrice('');
        setShowForm(false);
    };

    const toggleForm = () => setShowForm(prev => !prev);

    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center">Quản lý sản phẩm</h2>

            <div className="row mb-4">
                <div className="col-12 text-end">
                    <button className="btn btn-primary" onClick={toggleForm}>
                        {showForm ? 'Đóng form' : 'Thêm sản phẩm mới'}
                    </button>
                </div>
            </div>

            {showForm && (
                <div className="row mb-4">
                    <div className="col-md-6 mx-auto">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">Thêm sản phẩm mới</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className='form-group mb-3'>
                                        <label htmlFor='name'>Tên sản phẩm</label>
                                        <input className='form-control' id="name" name='name' value={name} placeholder='Nhập tên sản phẩm' onChange={handleChange} />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label htmlFor='name_category'>Danh mục</label>
                                        <select className='form-control' id="name_category" name='name_category' value={nameCategory} onChange={handleChange}>
                                            <option value="Thời trang nam">Nam</option>
                                            <option value="Thời trang nữ">Nữ</option>
                                        </select>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label htmlFor='code'>Mã sản phẩm</label>
                                        <input className='form-control' id="code" name='code' value={code} placeholder='XXXXXXX' onChange={handleChange} />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label htmlFor='image'>Hình ảnh</label>
                                        <input type='file' className='form-control' id="image" name='image' onChange={handleImageChange} />
                                        {imagePreview && (
                                            <div className="mt-2">
                                                <p>Xem trước:</p>
                                                <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} className="mt-2 border rounded" />
                                            </div>
                                        )}
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label htmlFor='price'>Giá</label>
                                        <input className='form-control' id="price" name='price' value={price} placeholder='10000' onChange={handleChange} />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label htmlFor='old_price'>Giá cũ</label>
                                        <input className='form-control' id="old_price" name='old_price' value={oldPrice} placeholder='1500' onChange={handleChange} />
                                    </div>
                                    <div className="text-center">
                                        <button type='submit' className="btn btn-success" id="submit">Lưu sản phẩm</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="row">
                <div className="col-12">
                    <h3 className="mb-3">Danh sách sản phẩm</h3>
                    <ProductList products={products} />
                </div>
            </div>
        </div>
    );
}
