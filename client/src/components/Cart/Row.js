import React from 'react';  

const Row = ({ id, name, price, quantity}) => { 
    return (
        <tr>
            <td>
                <figure className="itemside">
                    <div className="aside"><img src={ `images/items/${id}.jpg`} className="img-sm" /></div>
                    <figcaption className="info">
                        <a href="#" className="title text-dark">{ name }</a>
                    </figcaption>
                </figure>
            </td>
            <td> 
                <select className="form-control" value={quantity} onChange={() => null}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select> 
            </td>
            <td>    
                <div className="price-wrap"> 
                    <var className="price">$0.00</var> 
                </div>
            </td>
            <td className="text-right"> 
                <a data-original-title="Save to Wishlist" title="" href="" className="btn btn-light" data-toggle="tooltip" onClick={() => null}> <i className="fa fa-heart"></i></a> 
                <a href="" className="btn btn-light btn-round" onClick={removeFromCartAction}> Remove</a>
            </td>
    </tr>)
}
export default Row