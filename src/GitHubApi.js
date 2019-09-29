const API_URL = process.env.REACT_APP_API_URL;

export async function fetchMembers() {
  let response = await fetch(`${API_URL}/orgs/emberjs/members`);
  return response.json();
}

export async function fetchRepos() {
  let response = await fetch(`${API_URL}/orgs/emberjs/repos`);
  return response.json();
}