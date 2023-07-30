export async function getContributors(repository: string, path: string) {
  const commits: any[] = await fetch(
    `https://api.github.com/repos/${repository}/commits?path=${path}`,
  ).then((res) => res.json());
  const contributorLogins = [...new Set(commits.map((commit) => commit.author.login))];
  return Promise.all(
    contributorLogins.map((login) => {
      return fetch(`https://api.github.com/users/${login}`).then((res) => res.json());
    }),
  );
}
