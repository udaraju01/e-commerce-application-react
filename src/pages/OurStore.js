import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import ProductCards from '../components/ProductCards';
import Colors from '../components/Colors';
import Container from '../components/Container';





const OurStore = ({ products }) => {
    const [grid, setGrid] = useState(4);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => { setSearchTerm(e.target.value); };

    return (
        <>
            <Meta title={"Our Store"}></Meta>
            <Breadcrumb title="Our Store" />
            <Container class1='store-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Shop By Categories</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>filter By</h3>
                            <div>
                                <h5 className='sub-title'>Availablity</h5>
                                <div>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='checkbox' value={""} id='' />
                                        <label className='form-check-label ' htmlFor=''>In Stock (2)</label>
                                    </div>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='checkbox' value={""} id='' />
                                        <label className='form-check-label ' htmlFor=''>Out of Stock (0)</label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating ">
                                        <input type="email" className="form-control py-1" id="floatingInput" placeholder="From" />
                                        <label for="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating ">
                                        <input type="email" className="form-control py-1" id="floatingInput" placeholder="To" />
                                        <label for="floatingInput1">To</label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>colors</h5>
                                <div>
                                    <Colors />
                                </div>
                            </div>
                            <h5 className='sub-title'>Size</h5>
                            <div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' value={""} id='color-1' />
                                    <label className='form-check-label ' htmlFor='color-1'>S (2)</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' value={""} id='color-2' />
                                    <label className='form-check-label ' htmlFor='color-2'>M (2)</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' value={""} id='color-3' />
                                    <label className='form-check-label ' htmlFor='color-3'>L (2)</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' value={""} id='color-3' />
                                    <label className='form-check-label ' htmlFor='color-3'>XL (2)</label>
                                </div>
                                <div className='form-check'>
                                    <input className='form-check-input' type='checkbox' value={""} id='color-4' />
                                    <label className='form-check-label ' htmlFor='color-4'>XXL (2)</label>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>product Tags</h3>
                            <div>
                                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3' > Headphone</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3' > Laptop</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3' > Mobile</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3' > Oppo</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3' > Speaker</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3' > Tabiet</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3' > Vivo</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3' > wire</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-9'>
                        <div className='filter-sort-grid mb-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="input-group  ">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="search"
                                            value={searchTerm}
                                            onChange={handleSearch}
                                            aria-label="Recipient's username"
                                  
                                            aria-describedby="basic-addon2" />
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className='d-flex gap-10 align-items-center grid'>
                                        <img
                                            onClick={() => {
                                                setGrid(3)
                                            }}
                                            src='images/gr4.svg'
                                            className='d-block img-fluid'
                                            alt='grid' />

                                        <img
                                            onClick={() => {
                                                setGrid(4)
                                            }}
                                            src='images/gr3.svg'
                                            className='d-block img-fluid'
                                            alt='grid' />
                                        <img
                                            onClick={() => {
                                                setGrid(6)
                                            }}
                                            src='images/gr2.svg'
                                            className='d-block img-fluid'
                                            alt='grid' />
                                        <img
                                            onClick={() => {
                                                setGrid(12)
                                            }}
                                            src='images/gr.svg'
                                            className='d-block img-fluid'
                                            alt='grid' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='products-list pb-4'>
                            <div className='d-flex gap-10  flex-wrap'>
                                <ProductCards grid={grid} searchTerm={searchTerm} products={products} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default OurStore
