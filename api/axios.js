import axios from 'axios'
import qs from 'qs'

//传递一个值
export const get = (ulr, paramsx) => {
    return axios.get(ulr, {
        params: paramsx, paramsSerializer: params => {
            return qs.stringify(params, { indices: false })
        }
    });
};

//post传递一个值
export const post = (ulr, params) => { return axios.post(ulr, qs.stringify(params,{ indices: false })); };

//put传递一个值
export const update = (ulr, params) => { return axios.put(ulr, qs.stringify(params,{ indices: false })); };


export const del = (ulr, paramsx) => {
    return axios.delete(ulr, {
        params: paramsx, paramsSerializer: params => {
            return qs.stringify(params, { indices: false })
        }
    });
};
