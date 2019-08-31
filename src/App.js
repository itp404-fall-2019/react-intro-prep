import React, { useState, useEffect } from 'react';
import MemberImage from './MemberImage';
import GitHubRepoCard from './GitHubRepoCard';
import Loading from './Loading';
import { fetchMembers, fetchRepos } from './GitHubApi';
import './App.css';

export default function App() {
  const [ members, setMembers ] = useState([]);
  const [ repos, setRepos ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    Promise.all([
      fetchMembers(),
      fetchRepos()
    ]).then(([ members, repos ]) => {
      setLoading(false);
      setMembers(members);
      setRepos(repos);
    });
  }, []);

  return (
    <div>
      {loading ? <Loading /> : (
        <>
          <div className="members">
            {members.map((member) => {
              return <MemberImage member={member} key={member.id} />
            })}
          </div>
          <div className="repos">
            {repos.map((repo) => {
              return <GitHubRepoCard repo={repo} key={repo.id} />
            })}
          </div>
        </>
      )}
    </div>
  );
}