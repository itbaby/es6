import _ from 'cheerio';

/**
 * 
 */
export function a(dom) {
    return new Promise((resolve, reject) => {
        let $ = _.load(dom);
        resolve($('a'));
    })
}
/**
 * 
 */
export function links(dom) {
    return new Promise((resolve, reject) => {
        a(dom).then(links => {
            let _data = [];
            links.map((i, link) => {
                let uri = link.attribs.href;
                if (uri.includes('http://') && link.children[0].data) {
                    _data.push({
                        txt: link.children[0].data,
                        uri: uri
                    })
                }
            });
            _data.length ?  resolve(_data) : reject([]);
        })
    });
}

/**
 * 
 */
export function edu(txt){

}