import React from 'react';
import SearchForm from '../shared/SearchForm';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children, setSearch, result }) => {
    return (
        <>
            {/* <!-- Responsive navbar--> */}
            <Navbar />
            {/* <!-- Page header with logo and tagline--> */}
            <header className="py-5 bg-light border-bottom mb-4">
                <div className="container">
                    <div className="text-center my-5">
                        <h1 className="fw-bolder">Welcome to Blog Home!</h1>
                        <p className="lead mb-0">A Bootstrap 5 starter layout for your next blog homepage</p>
                    </div>
                </div>
            </header>
            {/* <!-- Page content--> */}
            <div className="container">
                <div className="row">
                    {/* <!-- Blog entries--> */}
                    <div className="col-lg-8">
                        {children}
                    </div>
                    {/* <!-- Side widgets--> */}
                    <Sidebar>
                        {/* <!-- Search widget--> */}
                        <SearchForm setSearch={setSearch} result={result}/>
                        {/* <!-- Categories widget--> */}
                        <div className="card mb-4">
                            <div className="card-header">Categories</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <ul className="list-unstyled mb-0">
                                            <li><a href="/#!">Web Design</a></li>
                                            <li><a href="/#!">HTML</a></li>
                                            <li><a href="/#!">Freebies</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <ul className="list-unstyled mb-0">
                                            <li><a href="/#!">JavaScript</a></li>
                                            <li><a href="/#!">CSS</a></li>
                                            <li><a href="/#!">Tutorials</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Side widget--> */}
                        <div className="card mb-4">
                            <div className="card-header">Side Widget</div>
                            <div className="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
                        </div>
                    </Sidebar>
                </div>
            </div>
            {/* <!-- Footer--> */}
            <Footer />
        </>
    )
}

export default Layout;