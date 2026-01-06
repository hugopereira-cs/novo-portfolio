// Função assíncrona para lidar com a promisse retornada pelo método fetch
async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/hugopereira-cs/novo-portfolio/refs/heads/main/data/profile.json'
  const fetching = await fetch(url)
  return await fetching.json()
}