import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { width, height, background } = this.props;

        return (
            // <div className="container mt-4">
            //     <div className="row">
            //         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            //             <div className="card h-100 shadow-sm">
            //                 <img
            //                     src={imgLink}
            //                     className="card-img-top"
            //                     alt={title}
            //                     style={{
            //                         height: '250px',
            //                         objectFit: 'cover',
            //                     }}
            //                 />
            //                 <div className="card-body">
            //                     <h5 className="card-title">Sản phẩm: {title}</h5>
            //                     <p className="card-text">Giá: {0 || '???'} VNĐ</p>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            //             <div className="card h-100 shadow-sm">
            //                 <img
            //                     src={imgLink}
            //                     className="card-img-top"
            //                     alt={title}
            //                     style={{
            //                         height: '250px',
            //                         objectFit: 'cover',
            //                     }}
            //                 />
            //                 <div className="card-body">
            //                     <h5 className="card-title">Sản phẩm: {title}</h5>
            //                     <p className="card-text">Giá: {0 || '???'} VNĐ</p>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            //             <div className="card h-100 shadow-sm">
            //                 <img
            //                     src={imgLink}
            //                     className="card-img-top"
            //                     alt={title}
            //                     style={{
            //                         height: '250px',
            //                         objectFit: 'cover',
            //                     }}
            //                 />
            //                 <div className="card-body">
            //                     <h5 className="card-title">Sản phẩm: {title}</h5>
            //                     <p className="card-text">Giá: {0 || '???'} VNĐ</p>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            //             <div className="card h-100 shadow-sm">
            //                 <img
            //                     src={imgLink}
            //                     className="card-img-top"
            //                     alt={title}
            //                     style={{
            //                         height: '250px',
            //                         objectFit: 'cover',
            //                     }}
            //                 />
            //                 <div className="card-body">
            //                     <h5 className="card-title">Sản phẩm: {title}</h5>
            //                     <p className="card-text">Giá: {0 || '???'} VNĐ</p>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            //             <div className="card h-100 shadow-sm">
            //                 <img
            //                     src={imgLink}
            //                     className="card-img-top"
            //                     alt={title}
            //                     style={{
            //                         height: '250px',
            //                         objectFit: 'cover',
            //                     }}
            //                 />
            //                 <div className="card-body">
            //                     <h5 className="card-title">Sản phẩm: {title}</h5>
            //                     <p className="card-text">Giá: {0 || '???'} VNĐ</p>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div style={{ width: width, height: height, background: background }}></div>
        );
    }
}

export default Product;
