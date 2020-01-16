import React from 'react';

const Shopbar = () => {
    return (
        <div className="shop-bar pb-60">
            <div className="shop-found-selector">
                <div className="shop-found">
                    <p><span>23</span> Product Found of <span>50</span></p>
                </div>
                <div className="shop-selector">
                    <label>Sort By : </label>
                    <select name="select">
                        <option value="">Default</option>
                        <option value="">A to Z</option>
                        <option value=""> Z to A</option>
                        <option value="">In stock</option>
                    </select>
                </div>
            </div>
        </div>
    )
} 

export default Shopbar;