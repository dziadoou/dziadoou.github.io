export function getNumOfReposToFetch(
  numOfRepos: number,
  reposPerPage: number,
  currentPage: number,
) {
  const githubSearchAPILimit = 1000

  let reposPossibleToFetch: number = 0
  if (numOfRepos > githubSearchAPILimit) {
    reposPossibleToFetch = githubSearchAPILimit
  } else reposPossibleToFetch = numOfRepos

  const numOfPages = Math.ceil(reposPossibleToFetch / reposPerPage)
  let reposToFetch: number = 0
  if (currentPage === numOfPages - 1) {
    reposToFetch = reposPossibleToFetch - reposPerPage * currentPage
  } else reposToFetch = reposPerPage

  return { numOfPages, reposToFetch }
}
