import React from 'react'

const RepoList = ({ repoList }) => {
  return (
    <div>
      {repoList.map((repo) => {
        return <div key={repo.id}>{repo.name}</div>
      })}
    </div>
  )
}

export default RepoList
