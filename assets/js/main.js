// Arquivo Para Gerir o HTML

function updateProfileInfo(profileData) {
  const photo = document.getElementById('profile.photo')
  photo.src = profileData.photo
  photo.alt = `Foto de ${profileData.name}`

  const name = document.getElementById('profile.name')
  name.textContent = profileData.name
}






// Cria uma função imediatamente invocada para buscar os dados na API
(async() => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData)
})()