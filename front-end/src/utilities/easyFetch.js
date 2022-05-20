export async function easyGET(url, callback) {
  const response = await fetch(url);
  const data = await response.json();

  callback(data);
}

export async function easyPOST(data, url, token) {
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else {
        throw new Error('Something went wrong on api server!');
      }
    })
    .then((response) => {
      console.debug(response.message);
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function easyUPDATE(data, url, token) {
  fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else {
        throw new Error('Something went wrong on api server!');
      }
    })
    .then((response) => {
      console.debug(response.message);
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function easyDELETE(data, url, token) {
  fetch(url, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res.message));
}
