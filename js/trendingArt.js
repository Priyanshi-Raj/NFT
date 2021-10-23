const trending = [
    {
        "id" : "51",
        "subject" : "Chemistry",
        "name" : "Juliet",
        "topic" : "Physical",
        "about" : "Environment",
        "img" : "./assets/alumna.jpg",
       
    },
    {
        "id" : "52",
        "subject" : "English",
        "name" : "Bill Gates",
        "topic" : "Leaders Speak",
        "about" : "Environment",
        "img" : "./assets/2021-10-09 (2).png",
       
    },
    {
        "id" : "52",
        "subject" : "English",
        "name" : "Bill Gates",
        "topic" : "Leaders Speak",
        "about" : "Environment",
        "img" : "./assets/sdfsd 1.png",
        
    },
    {
        "id" : "52",
        "subject" : "English",
        "name" : "Romeo Juliet",
        "topic" : "Leaders Speak",
        "about" : "Environment",
        "img" : "./assets/college-student.jpg",
       
    },
    {
        "id" : "52",
        "subject" : "English",
        "name" : "Juliet",
        "topic" : "Leaders Speak",
        "about" : "Environment",
        "img" :"./assets/alumna.jpg",
       
    }
    
]


for(let j =0;j<trending.length;j++)
{
    let createCard = document.createElement('div');
             createCard.innerHTML= `<div class="card bg-light m-3 card-style" style="width: 14rem; height:24.5rem; border-radius:20px;">
        
          <img style="border-radius: 20px;" class="trending-img" width="100%" height="100%" src="${trending[j].img}" alt="">
             <div class="card-body trending-body"  style = "background: rgba(255,255,255,0.55);
             color: #000000;width:100%;">
             <h5 class="card-title makeBold">${trending[j].name}</h5>
             <p class="card-text">
             SmartEd
             </p>
             </div>
             </div>`
             document.getElementById('card-add').appendChild(createCard);
   
}
