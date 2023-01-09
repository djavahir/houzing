const { REACT_APP_BASE_URL } = process.env;


const useRequest = () => {
  const request = async ({ url, method = 'GET', body, token, headers = {} }) => {
    headers['Content-Type'] = 'application/json';
    if (token) headers.Authorization = `Bearer${localStorage.getItem('token')}`;

    return fetch(`${REACT_APP_BASE_URL}${url}`, {
      method,
      headers,
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((res) => res)
  }


  return request
}

export default useRequest