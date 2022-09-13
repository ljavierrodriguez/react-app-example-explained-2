import React, { useEffect, useState } from 'react';
import Layout from '../components/template/Layout';

const Home = () => {

    const [search, setSearch] = useState("");

    const [posts, setPosts] = useState([
        { id: 1, title: 'Featured Post Title', resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!', date: 'January 1, 2022', link: { url: '/#', text: 'Read more' }, active: true },
        { id: 2, title: 'Post ADD Title 1', resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!', date: 'January 2, 2022', link: { url: '/#', text: 'Read more' }, active: false },
        { id: 3, title: 'Post CREATE Title 2', resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!', date: 'January 3, 2022', link: { url: '/#', text: 'Read more' }, active: false },
        { id: 4, title: 'Post UPDATE Title 3', resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!', date: 'January 4, 2022', link: { url: '/#', text: 'Read more' }, active: false },
        { id: 5, title: 'Post DELETE Title 4', resume: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!', date: 'January 5, 2022', link: { url: '/#', text: 'Read more' }, active: false },
    ])

    const [postActive, setPostActive] = useState(null);

    const [result, setResult] = useState([]);


    useEffect(() => {
        console.log('llegue...');
        setPostActive(posts.find((post) => post.active === true))

        return () => {
            console.log('me voy...')
        }
    }, []);


    useEffect(() => {
        setResult(posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase())))
    }, [search])

    const saludo = () => {
        alert('Hola Mundo con Click');
    }

    return (
        <>
            <Layout setSearch={setSearch} result={result}>
                <h4>Buscando... {search}</h4>
                {/* <!-- Featured blog post--> */}
                {
                    postActive !== null && (
                        <div className="card mb-4">
                            <a href="/#!"><img className="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
                            <div className="card-body">
                                <div className="small text-muted">{postActive.date}</div>
                                <h2 className={"card-title " + (postActive.active ? "text-danger" : "text-info")}>{postActive.title}</h2>
                                <p className="card-text">{postActive.resume}</p>
                                <a className="btn btn-primary" href="/#!">{postActive.link.text}</a>
                            </div>
                        </div>
                    )
                }
                {/* <!-- Nested row for non-featured blog posts--> */}
                <div className="row">

                    {
                        posts.filter((post) => post.active === false).map((post) => {
                            return (
                                <div className="col-lg-6">
                                    {/* <!-- Blog post--> */}
                                    <div className="card mb-4">
                                        <a href="/#!"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                                        <div className="card-body">
                                            <div className="small text-muted">{post.date}</div>
                                            <h2 className="card-title h4">{post.title}</h2>
                                            <p className="card-text">{post.resume}</p>
                                            {
                                                post.active ? (
                                                    <button className="btn btn-primary" href="/#!" onClick={saludo}>Read more →</button>
                                                ):(
                                                    <button className="btn btn-danger" href="/#!" onClick={saludo}>Read more →</button>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {/* <!-- Pagination--> */}
                <nav aria-label="Pagination">
                    <hr className="my-0" />
                    <ul className="pagination justify-content-center my-4">
                        <li className="page-item disabled"><a className="page-link" href="/#" tabIndex="-1" aria-disabled="true">Newer</a></li>
                        <li className="page-item active" aria-current="page"><a className="page-link" href="/#!">1</a></li>
                        <li className="page-item"><a className="page-link" href="/#!">2</a></li>
                        <li className="page-item"><a className="page-link" href="/#!">3</a></li>
                        <li className="page-item disabled"><a className="page-link" href="/#!">...</a></li>
                        <li className="page-item"><a className="page-link" href="/#!">15</a></li>
                        <li className="page-item"><a className="page-link" href="/#!">Older</a></li>
                    </ul>
                </nav>
            </Layout>
        </>
    )
}

export default Home;