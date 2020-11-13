import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import RepoList from './RepoList'
import ReadMe from './ReadMe'

const Home = () => {
  const { userName } = useParams()
  const [repoList, setRepoList] = useState([])
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) => setRepoList(data))
  }, [userName])

  return (
    <div>
      <Route exact path="/:userName" component={() => <RepoList repoList={repoList} />} />
      <Route exact path="/:userName/:repositoryName" component={() => <ReadMe />} />
    </div>
  )
}

Home.propTypes = {}

export default Home
