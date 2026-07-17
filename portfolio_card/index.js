const cardDetails = [
    {
        image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Adetutu John Adedeji",
        title: "Drummer/Software Developer",
        bio: "Adetutu John Adedeji is a versatile professional who combines his passion for music with his skills in software development. He is dedicated to creating innovative digital solutions that bridge the gap between creativity and technology."
    },

    {
        image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Adetutu John Adedeji",
        title: "Drummer/Software Developer",
        bio: "Adetutu John Adedeji is a versatile professional who combines his passion for music with his skills in software development. He is dedicated to creating innovative digital solutions that bridge the gap between creativity and technology."
    },
    {
        image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Adetutu John Adedeji",
        title: "Drummer/Software Developer",
        bio: "Adetutu John Adedeji is a versatile professional who combines his passion for music with his skills in software development. He is dedicated to creating innovative digital solutions that bridge the gap between creativity and technology."
    }
];



// map , turn each data into a card
const cards = cardDetails.map(card =>{
    return `
     <div class="card-grid">
      

      <img class="card-image" srcset="${card.image}"
       alt="Random image from net" />
      
      <div class="card-description">
        <h4 class="card-name">${card.name}</h4>
        <p class="card-title">${card.title}</p>
        <p class="card-bio">${card.bio}</p>
      </div>

    </div>
    `
}).join("");

document.getElementById("cards").innerHTML = cards;