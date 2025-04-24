import React from 'react';

const ShowCard = ({ name, avatar }) => {
    console.log("ShowCard props:", { name, avatar }); // Kiểm tra props

    return (
        <div className="product">
            <div className="p-img">
                <img
                    src={avatar || 'https://via.placeholder.com/200'}
                    alt={name}
                    style={{ maxWidth: '200px', height: 'auto' }}
                />
            </div>
            <div className="text">
                <div className="p-name">
                    <a href="#!">{name || 'Không có tên'}</a>
                </div>
            </div>
        </div>
    );
};

export default ShowCard;
