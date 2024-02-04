import React from 'react';



const ProductCards = ({ productData }) => {
    //console.log(productData);

    return (
        <>
            <section className="main-card--cointainer1">
                {productData.map((curElem) => {
                    const { id, ProductName, Image, Description, viewProduct, Price, BuyLink} = curElem;
                    return (
                        <>
                            <div className="Product-card-Top">
                                <div className="Product-card"  >
                                    <img className="card-img-top" style={{height:"250px"}}src={Image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{ProductName}</h5>
                                        <p className="card-text">{Description}</p>
                                    </div>
                                    <div className="card-body">
                                        {/* <h4 className="card-link" style={{textAlign:"center"}}>{Price}</h4> */}
                                        <div >
                                            <a className="card-link" href = {viewProduct} target = "_blank" >
                                                <button type="button" class="btn btn-warning" style={{ width: "95%" , marginLeft:"2.5%"}}>View Details</button>
                                            </a>
                                            <a className="card-link" href = {BuyLink}  target = "_blank">
                                                <button type="button" class="btn btn-danger" style={{ width: "95%", marginTop: "2%" , marginLeft:"2.5%"}}>BUY NOW @ {Price}</button>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}

            </section>
        </>

    )
}

export default ProductCards;