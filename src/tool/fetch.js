import {get, post} from 'request'

export function q(opts) {
    return new Promise((resolve, reject) => {
        get(Object.assign({}, opts), function (err, stat, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    })
}