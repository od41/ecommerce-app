import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            
            <div className="col-lg-3">
                <div className="shop-sidebar mr-50">
                    <div className="sidebar-widget mb-50">
                        <h3 className="sidebar-title">Search Products</h3>
                        <div className="sidebar-search">
                            <form action="#">
                                <input placeholder="Search Products..." type="text" />
                                <button><i className="ti-search"></i></button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default Sidebar;