import {data} from '../../data/products';

export const getProducts = () => {
    return new Promise(resolve => {
        resolve(data);
    })

}