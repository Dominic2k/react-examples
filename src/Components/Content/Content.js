import React, { Component } from 'react';
import ShowCard from './ShowCard';

class Content extends Component {
   constructor(props) {
      super(props);
      this.state = {
          products: [],
          isLoading: true,
          error: null
      };
   }
   
   componentDidMount() {
      fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              const formattedData = data.map(item => ({
                  id: item.id,
                  name: item.name,
                  avatar: item.avatar
              }));
              
              console.log("API data formatted:", formattedData);
              this.setState({ 
                  products: formattedData,
                  isLoading: false 
              });
          })
          .catch(error => {
              console.error('Error fetching data:', error);
              this.setState({ 
                  error: error.message,
                  isLoading: false 
              });
          });
   }

   render() {
      const { products, isLoading, error } = this.state;

      if (isLoading) {
          return <div>Loading...</div>;
      }

      if (error) {
          return <div>Error: {error}</div>;
      }

      return (
         <div id="content">
               {/* This is the content for menu */}
               <div id="left-content">
                  <h1>Category</h1>
                  <ul className="drop">
                     <li><a href="#!">Menu item 1</a></li>
                     <li><a href="#!">Menu item 2</a></li>
                     <li>
                           <a href="#!">Menu item 3</a>
                           <ul className="drop">
                              <li><a href="#!">Menu item 3.1</a></li>
                              <li><a href="#!">Menu item 3.2</a></li>
                              <li><a href="#!">Menu item 3.3</a></li>
                              <li>
                                 <a href="#!">Menu item 3.4</a>
                                 <ul className="drop">
                                       <li><a href="#!">Menu item 3.4.1</a></li>
                                       <li><a href="#!">Menu item 3.4.2</a></li>
                                       <li><a href="#!">Menu item 3.4.3</a></li>
                                       <li>
                                          <a href="#!">Menu item 3.4.4</a>
                                          <ul className="drop">
                                             <li><a href="#!">Menu item 3.4.5.1</a></li>
                                             <li><a href="#!">Menu item 3.4.5.2</a></li>
                                             <li><a href="#!">Menu item 3.4.5.3</a></li>
                                             <li>
                                                   <a href="#!">Menu item 3.4.5.4</a>
                                                   <ul className="drop">
                                                      <li><a href="#!">Menu item 3.4.5.1.1</a></li>
                                                      <li><a href="#!">Menu item 3.4.5.1.2</a></li>
                                                      <li><a href="#!">Menu item 3.4.5.1.3</a></li>
                                                      <li>
                                                         <a href="#!">Menu item 3.4.5.1.4</a>
                                                         <ul className="drop">
                                                               <li><a href="#!">Menu item 3.4.5.1.4.1</a></li>
                                                               <li><a href="#!">Menu item 3.4.5.1.4.2</a></li>
                                                               <li><a href="#!">Menu item 3.4.5.1.4.3</a></li>
                                                               <li><a href="#!">Menu item 3.4.5.1.4.4</a></li>
                                                         </ul>
                                                      </li>
                                                   </ul>
                                             </li>
                                          </ul>
                                       </li>
                                 </ul>
                              </li>
                           </ul>
                     </li>
                     <li><a href="#!">Menu item 4</a></li>
                     <li><a href="#!">Menu item 5</a></li>
                     <li><a href="#!">Menu item 6</a></li>
                  </ul>
               </div>

               {/* This is the content for item */}
               <div id="right-content">
                    <h2>Product:</h2>
                    <div id="products">
                        {products && products.length > 0 ? (
                            products.map((product) => (
                                <ShowCard
                                    key={product.id}
                                    name={product.name}
                                    avatar={product.avatar}
                                />
                            ))
                        ) : (
                            <p>No products available</p>
                        )}
                    </div>
                    <div style={{ clear: 'both' }} />
                </div>
               <div style={{ clear: 'both' }} />
         </div>
      );
   }
}

export default Content;
