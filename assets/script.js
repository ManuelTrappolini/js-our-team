//Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
//(trovate l’array del team all’interno della cartella in allegato)
//Bonus
//Rendere l’esercizio responsive, mandando a capo le card
//Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! :sorridere:)
//Buon divertimento e confermate lettura come al solito :baby-yoda:


const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];

const cardEl = document.getElementById('card')
const teamEl = document.querySelector('#team')
const formEl = document.querySelector('form')






let finalMarkup = ''

for (let i = 0; i < teamMembers.length; i++) {
  const teamMember = teamMembers[i];
  console.log(teamMember);
  const {name, role , email, img} = teamMember
  const markup = generateTeamMemberCard(teamMember)
  finalMarkup += markup
  console.log(markup);
  
}

teamEl.innerHTML = finalMarkup


function generateTeamMemberCard(teamMember){
  const {name, role , email, img} = teamMember
  return `
    <div class="col-md-4 g-5 col-sm-12">
      <div class="card ">
        <img  width = 40% src="${img}" alt="">
        <h3>${name}</h3>
        <h4>${role}</h4>
        <a class="text-decoration-none" href=""><h4 class="text-primary pb-3">${email}</h4></a>
      </div>
    </div>  
    `
  }
  
  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value
    let role = document.getElementById('role').value
    let email = document.getElementById('email').value
    let image = document.getElementById('image').value
    
    const newMember = {
      name,
      role,
      email,
      image
    }
   
    const markup = generateTeamMemberCard(newMember)
    console.log(newMember);
    teamEl.insertAdjacentHTML("beforeend", markup)
  })

 