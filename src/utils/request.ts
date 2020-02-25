import { log } from './log';

export class ResponseError extends Error {
    public response: Response;

    constructor(response: Response) {
        super(response.statusText);
        this.response = response;
    }
}
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response: { status: number; json: () => Promise<any>; }): any {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    // when empty body occur, .json is going to fail, in that case just return null
    return response.json().catch(() => null);
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: Response): any {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new ResponseError(response);
    error.response = response;
    throw error;
}

function printRequestDebug(response: { headers: { get: (arg0: string) => string; }; url: any; }): any {
    // @ts-ignore
    if (window.requestDebug) {
        const header = JSON.parse(response.headers.get('Ttws-Debug-Trace')); // TODO: this should be in settings

        log.debug('Api: ', response.url);

        if (header.queries && header.queries.length > 0) {
            log.debug('========== TTWS DEBUG TRACE ==========');
            header.queries.forEach((q: string) => log.debug(`${header.url}/?${encodeURI(q)}`));
            log.debug('======================================');
        } else {
            log.debug('No Ttws requests for this API call.');
        }
    }

    return response;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default async function request(url: string, options?: RequestInit): Promise<{} | { err: ResponseError; }> {
    return fetch(url, options)
        .then(checkStatus)
        .then(printRequestDebug)
        .then(parseJSON);
}
