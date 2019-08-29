import React from 'react';
import MemberImage from './MemberImage';
import GitHubRepoCard from './GitHubRepoCard';
import Loading from './Loading';
import { fetchMembers, fetchRepos } from './GitHubApi';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      repos: [],
      loading: true
    };
  }
  async componentDidMount() {
    let [ members, repos ] = await Promise.all([
      fetchMembers(),
      fetchRepos()
    ]);
    // let members = await fetchMembers();
    // let repos = await fetchRepos();
    this.setState({ members, repos, loading: false });
  }
  render() {
    return (
      <div>
        {this.state.loading ? <Loading /> : (
          <>
            <div className="members">
              {this.state.members.map((member) => {
                return <MemberImage member={member} key={member.id} />
              })}
            </div>
            <div className="repos">
              {this.state.repos.map((repo) => {
                return <GitHubRepoCard repo={repo} key={repo.id} />
              })}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
