export default function Data(dataName) {
    switch(dataName) {
        case "products":
            const products = [
                {
                    id: 1,
                    name: "Wireless Bluetooth Headphones",
                    name_category: "Electronics",
                    code: 100100101,
                    image: "https://i5.walmartimages.com/seo/Bluetooth-Headphones-Ear-Hi-Fi-Stereo-Wireless-Foldable-Headset-Soft-Memory-Protein-Earmuffs-Built-in-Mic-Wired-Mode-PC-Cell-Phones-TV-Black_3bd2e804-330a-4030-be13-fd5e3e8fb502.4ef46f597f7df779363095999629cf55.jpeg",
                    price: 850000,
                    old_price: 950000
                },
                {
                    id: 2,
                    name: "Men's Running Shoes",
                    name_category: "Footwear",
                    code: 100100102,
                    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5bacded4-89e7-4964-a072-f46ddc7f242c/custom-invincible-3-by-you.png",
                    price: 1200000,
                    old_price: 1500000
                },
                {
                    id: 3,
                    name: "Smart Fitness Watch",
                    name_category: "Wearable Tech",
                    code: 100100103,
                    image: "https://m.media-amazon.com/images/I/61OnCnv1fJL._AC_UF1000,1000_QL80_.jpg",
                    price: 2500000,
                    old_price: 2800000
                },
                {
                    id: 4,
                    name: "Ceramic Coffee Mug",
                    name_category: "Home & Kitchen",
                    code: 100100104,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGjNOB-H3V47fPpztpCwWZn1w1CckLPWd-8Q&s",
                    price: 150000,
                    old_price: 200000
                },
                {
                    id: 5,
                    name: "Organic Cotton T-shirt",
                    name_category: "Apparel",
                    code: 100100105,
                    image: "https://solidthreads.com/cdn/shop/files/SS400_Slate_Front_e4b74e60-cc21-4449-b865-730ddb788816_1200x.jpg?v=1700006512",
                    price: 300000,
                    old_price: 400000
                },
            ];            
            return products;
        default:
            return [];   
    }
}