type RequestMethodTypes = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';


/**
 * Create configuration for every request with `fetch`
 */
function makeGenericReq(method: RequestMethodTypes, body = null, customHeader = {}): any {
    let reqDebug;

    // @ts-ignore
    if (window.requestDebug) {
        // eslint-disable-next-line no-param-reassign
        reqDebug = 'on';
    }

    return {
        method,
        body: body ? JSON.stringify(body) : undefined,
        credentials: 'include', // ['same-origin', 'include']
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // debugging purpose
            'Ttws-Debug': reqDebug, // TODO: this name should be in settings
            //
            ...customHeader,
        },
    };
}

/**
 * Create generic `GET` request
 */
export function makeGetReq(options?: {} | undefined): RequestInit {
    return makeGenericReq('GET', null, options);
}

/**
 * Create generic `POST` request
 */
export function makePostReq(body?: null | undefined, options?: {} | undefined): RequestInit {
    return makeGenericReq('POST', body, options);
}

/**
 * Create generic `PATCH` request
 */
export function makePatchReq(body: null | undefined, options?: {} | undefined): RequestInit {
    return makeGenericReq('PATCH', body, options);
}

/**
 * Create generic `DELETE` request
 */
export function makeDeleteReq(options?: {} | undefined): RequestInit {
    return makeGenericReq('DELETE', null, options);
}
