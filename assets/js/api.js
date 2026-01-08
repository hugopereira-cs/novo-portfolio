// Função assíncrona para lidar com a promisse retornada pelo método fetch
async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/hugopereira-cs/novo-portfolio/refs/heads/main/data/profile.json'
  try {
    const fetching = await fetch(url)
    
    if (!fetching.ok) {
      throw new Error(`HTTP error! status: ${fetching.status}`)
    }
    
    return await fetching.json()
    
  } catch (error) {
    console.error('Erro ao buscar dados:', error)
    return null
  }
}