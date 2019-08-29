export async function fetchMembers() {
  let response = await fetch('https://api.github.com/orgs/emberjs/members');
  return response.json();
}

export async function fetchRepos() {
  let response = await fetch('https://api.github.com/orgs/emberjs/repos');
  return response.json();
}