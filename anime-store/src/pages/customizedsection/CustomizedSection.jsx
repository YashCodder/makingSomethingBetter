import React from 'react'
import './style.css';

function CustomizedSection() {
  return (
    <div className='custom-container'>
        <div className="custom-image">
            <img
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1974&auto=format&fit=crop"
                alt="Customization Process"
            />
        </div>

        <div className='custom-text'>
            <div className='custom-text-container'>
                <h2>Crafted. Customized. Yours.</h2>
                <p>Every piece is carefully tailored in-house. From fabric
                    selection to final detailing, our team refines each design
                    to ensure a premium fit and distinctive identity.
                </p>
                <button><span>Learn More</span></button>
            </div>
        </div>
    </div>
  )
}

export default CustomizedSection