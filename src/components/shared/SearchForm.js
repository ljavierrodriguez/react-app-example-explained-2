import React from 'react';

const SearchForm = ({ setSearch, result }) => {

    const getInputValue = (evento) => setSearch(evento.target.value);

    return (
        <>
            <div className="card mb-4">
                <div className="card-header">Search</div>
                <div className="card-body">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search"
                            onChange={getInputValue} list="result"
                        />
                        <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                        <datalist id="result">
                            {
                                result.map((post) => {
                                    return <option value={post.title} />
                                })
                            }
                        </datalist>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchForm;