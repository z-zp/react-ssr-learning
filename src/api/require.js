/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
const baseUrl = {}
function parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
      return null;
    }
    return response.json();
  }
  
  /**
   * Checks if a network request came back fine, and throws an error if not
   *
   * @param  {object} response   A response from a network request
   *
   * @return {object|undefined} Returns either the response, or throws an error
   */
  function checkStatus(response) {
    
    if (response.status >= 200 && response.status < 300) {
      
      return response;
    }  
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  
  /**
   * Requests a URL, returning a promise
   *
   * @param  {string} url       The URL we want to request
   * @param  {object} [options] The options we want to pass to "fetch"
   *
   * @return {object}           The response data
   */
  export default function request(url, options) {
    return fetch(url, options)
      .then(checkStatus)
      .then(parseJSON);
  }
  
  export const get = (url, params)=>{
    if (params) {  
        let paramsArray = [];  
        //拼接参数  
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))  
        if (url.search(/\?/) === -1) {  
            url += '?' + paramsArray.join('&')  
        } else {  
            url += '&' + paramsArray.join('&')  
        }  
    }  
    return request(url)
  }
  export const post = (url, options)=>{
    return request(url,{method: 'POST',...options,...baseUrl})
  }