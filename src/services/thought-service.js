const API_HOST = process.env.API_HOST;

export function fetchThoughts() {
  return fetch(`${API_HOST}/api/thoughts/`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    });
}

export function postThought(message) {
  return fetch(`${API_HOST}/api/thoughts/`, {
    method: 'POST',
    body: JSON.stringify({ message }),
    headers:{
      'Content-Type': 'application/json'
    } })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    });
}

