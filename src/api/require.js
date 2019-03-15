/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
import axios from 'axios'

const baseUrl='http://39.105.161.0'
function parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
      return null;
    }
    return response.data;
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

  function errorUrl(err){
    const error = new Error(err);
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
    return axios(url, options)
      .then(checkStatus)
      .then(parseJSON)
      .catch(errorUrl)
  }
  
  export const get = (url, params)=>{
    let {obj,server} = params
    
    server && (url = baseUrl+url)
    if (obj) {  
        let paramsArray = [];  
        //拼接参数  
        Object.keys(obj).forEach(key => paramsArray.push(key + '=' + obj[key]))  
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