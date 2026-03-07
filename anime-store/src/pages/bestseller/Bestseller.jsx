import React, { useState } from 'react'
import './style.css';
import ProductCard from './ProductCard';

function Bestseller() {
  const products = [
    {
      image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1200&q=100', // Japanese aesthetic graphic tee back
      hoverImage: 'https://images.unsplash.com/photo-1562157705-52df5ee12db1?auto=format&fit=crop&w=1200&q=100', // Same tee front
      title: 'Solo Leveling Oversized T-shirt',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=100', // Black grunge graphic tee front
      hoverImage: 'https://images.unsplash.com/photo-1583744366322-ce53dfc06cb4?auto=format&fit=crop&w=1200&q=100', // Same tee close-up
      title: 'Megumi Oversized T-shirt',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1200&q=100', // White graphic tee front
      hoverImage: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=100', // Same tee back
      title: 'Vagabond Oversized T-shirt',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=100', // Dark premium flatlay front
      hoverImage: 'https://images.unsplash.com/photo-1618354691438-25af04aaf5fa?auto=format&fit=crop&w=1200&q=100', // Dark premium flatlay alt
      title: 'Vagabond Oversized T-shirt',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1200&q=100',
      hoverImage: 'https://images.unsplash.com/photo-1562157705-52df5ee12db1?auto=format&fit=crop&w=1200&q=100',
      title: 'Vagabond Oversized T-shirt',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=100',
      hoverImage: 'https://images.unsplash.com/photo-1583744366322-ce53dfc06cb4?auto=format&fit=crop&w=1200&q=100',
      title: 'Solo Leveling V2',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1200&q=100',
      hoverImage: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=100',
      title: 'Megumi V2',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=100',
      hoverImage: 'https://images.unsplash.com/photo-1618354691438-25af04aaf5fa?auto=format&fit=crop&w=1200&q=100',
      title: 'Vagabond V2',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1200&q=100',
      hoverImage: 'https://images.unsplash.com/photo-1562157705-52df5ee12db1?auto=format&fit=crop&w=1200&q=100',
      title: 'Vagabond Special',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=100',
      hoverImage: 'https://images.unsplash.com/photo-1583744366322-ce53dfc06cb4?auto=format&fit=crop&w=1200&q=100',
      title: 'Jujutsu Kaisen Tee',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1200&q=100',
      hoverImage: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=100',
      title: 'Demon Slayer Tee',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=100',
      hoverImage: 'https://images.unsplash.com/photo-1618354691438-25af04aaf5fa?auto=format&fit=crop&w=1200&q=100',
      title: 'Naruto Oversized',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1200&q=100',
      hoverImage: 'https://images.unsplash.com/photo-1562157705-52df5ee12db1?auto=format&fit=crop&w=1200&q=100',
      title: 'Gojo Satoru T-shirt',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=100',
      hoverImage: 'https://images.unsplash.com/photo-1583744366322-ce53dfc06cb4?auto=format&fit=crop&w=1200&q=100',
      title: 'Itachi Uchiha Tee',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1200&q=100',
      hoverImage: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=100',
      title: 'Luffy Gear 5 Tee',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=100',
      hoverImage: 'https://images.unsplash.com/photo-1618354691438-25af04aaf5fa?auto=format&fit=crop&w=1200&q=100',
      title: 'Zoro Three Sword Tee',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1200&q=100',
      hoverImage: 'https://images.unsplash.com/photo-1562157705-52df5ee12db1?auto=format&fit=crop&w=1200&q=100',
      title: 'Hunter x Hunter Tee',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1200&q=100',
      hoverImage: 'https://images.unsplash.com/photo-1583744366322-ce53dfc06cb4?auto=format&fit=crop&w=1200&q=100',
      title: 'AOT Survey Corps Tee',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1200&q=100',
      hoverImage: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=100',
      title: 'Death Note Ryuk Tee',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
    {
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=100',
      hoverImage: 'https://images.unsplash.com/photo-1618354691438-25af04aaf5fa?auto=format&fit=crop&w=1200&q=100',
      title: 'Bleach Ichigo Tee',
      oldPrice: 'Rs. 1,899.00',
      price: 'Rs. 1,099.00',
    },
];

  const [visibleCount, setVisibleCount] = useState(8);
  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className='bestseller-container'>
      <div className='bestseller-banner'>
        <p >OUR BESTSELLERS</p>
      </div>


      <div className='products'>

        <div className="bestseller-grid">

          {visibleProducts.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              hoverImage={product.hoverImage}
              title={product.title}
              oldPrice={product.oldPrice}
              price={product.price}
              className="product-card"
            />
          ))}

        </div>
        {hasMore && (
          <div className="bestseller-load-more">
            <button onClick={handleLoadMore}>
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Bestseller