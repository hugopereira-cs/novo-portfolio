// Arquivo Para Gerir o HTML

function updateProfileInfo(profileData) {
  const photo = document.getElementById('profile.photo')
  photo.src = profileData.photo
  photo.alt = `Foto de ${profileData.name}`

  const name = document.getElementById('profile.name')
  name.innerText = profileData.name

  const job = document.getElementById('profile.job')
  job.innerText = profileData.job

  const location = document.getElementById('profile.location')
  location.innerText = profileData.location

  const linkedin = document.getElementById('profile.linkedin')
  linkedin.href = profileData.linkedin
  linkedin.innerText = `LinkedIn`

  const mail = document.getElementById('profile.mail')
  mail.href = `mailto:${profileData.email}`
  mail.innerText = profileData.email
}

function updateSkillsInfo(profileData) {
  const softSkills = document.getElementById('profile.skills.softSkills')
  
  // Mapeia cada soft skill para um elemento de lista HTML (<li>) e atualiza a seção.
  softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
  const hardskills = document.getElementById('profile.skills.hardSkills')
  hardskills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></img></li>`).join('')
}

function updateLanguages(profileData) {
  const languages = document.getElementById('profile.languages')
  languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById('profile.portfolio')
  portfolio.innerHTML = profileData.portfolio.map(project => {
    return `
      <li>
        <span class="content-title${project.github ? ' github' : ''}">${project.name}</span>
        <a href="${project.url}" target="_blank">${project.url}</a>
      </li>
      `
  }).join('')
}

function updateProfessionalExperience(profileData) {
  const professionalXp = document.getElementById('profile.professionalExperience')
  professionalXp.innerHTML = profileData.professionalExperience.map(xp => {
    return `
      <li>
        <h3>${xp}</h3>
      </li>`
  }).join('')
}


// Cria uma função imediatamente invocada para buscar os dados na API
(async() => {
  const profileData = await fetchProfileData()
  updateProfileInfo(profileData)
  updateSkillsInfo(profileData)
  updateHardSkills(profileData)
  updateLanguages(profileData)
  updatePortfolio(profileData)
  updateProfessionalExperience(profileData)
})()