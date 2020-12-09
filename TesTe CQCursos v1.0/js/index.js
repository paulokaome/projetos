var repoHidden = document.querySelector('.challenge_Repo');
var favoHidden = document.querySelector('.challenge_Fav');

var repoTable = document.querySelector('.challenge_table_rep');
var favoTable = document.querySelector('.challenge_table_fav');

var profile = document.querySelector('.profile_link');

async function GetGitData(name) {
  try {
    const response = await fetch(`https://api.github.com/users/${name}`)

    const data = await response.json()

    const image = document.querySelector('.profile_image');

    image.src = data.avatar_url;

    document.querySelector('.repositories').innerText = `Repositório: ${data.public_repos}`

    document.querySelector('.followers').innerText = `Seguidores: ${data.followers}`

    document.querySelector('.following').innerText = `Seguindo: ${data.following}`

    document.querySelector('.challenge_card').style.display = "flex";

  } catch (error) {
    console.error(error);
  }
}
async function RepoData() {

  const nameValue = document.querySelector('input').value;

  favoHidden.classList.add('hidden')
  repoHidden.classList.remove('hidden');

  repoTable.innerHTML = '';

  const response = await fetch(`https://api.github.com/users/${nameValue}/repos`)

  const data = await response.json()

  if (data.length === 0) {
    return alert("Esse Usuário Não tem Repositórios")
  }

  data.map(repo => {
    const template = `
        <tr>
        <td><a href="${repo.html_url}">${repo.name}</a></td>
        </tr>

    `
    repoTable.classList.add('link')
    repoTable.classList.remove('hidden');
    repoTable.innerHTML += template;
  });

}
async function FavData() {
  favoHidden.classList.remove('hidden')
  repoHidden.classList.add('hidden');

  const nameValue = document.querySelector('input').value;

  favoTable.innerHTML = '';

  const response = await fetch(`https://api.github.com/users/${nameValue}/starred`)

  const data = await response.json()

  if (data.length === 0) {
    return alert("Esse Usuário Não tem Favoritos")
  }

  data.map(fav => {
    const template = `
        <tr>
          <td><a href="${fav.html_url}">${fav.name}</a></td>
        </tr>
  
    `
    favoTable.classList.add('link')
    favoTable.classList.remove('hidden');
    favoTable.innerHTML += template;
  });
}
function Onclose() {
  repoHidden.classList.add('hidden');
  favoHidden.classList.add('hidden')
}
async function SearchValue() {
  repoHidden.classList.add('hidden');
  favoHidden.classList.add('hidden')

  try {
    var nameValue = document.querySelector('input').value;

    profile.href = `https://github.com/${nameValue}`

    GetGitData(nameValue);

  } catch (error) {
    return console.error(error);
  }
}
