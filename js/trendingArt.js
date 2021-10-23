const trending = [
    {
        "id" : "51",
        "subject" : "Chemistry",
        "name" : "Juliet",
        "profile" : "./images/Ellipse 1 (1)",
        "about" : "Environment",
        "img" : "./images/Rectangle 7 (4).png",
       
    },
    {
        "id" : "52",
        "subject" : "English",
        "name" : "Bill Gates",
        "profile" : "Leaders Speak",
        "about" : "Environment",
        "img" : "./images/Rectangle 7 (4).png",
       
    },
    {
        "id" : "52",
        "subject" : "English",
        "name" : "Bill Gates",
        "profile" : "Leaders Speak",
        "about" : "Environment",
        "img" : "./images/Rectangle 7 (4).png",
        
    },
    {
        "id" : "52",
        "subject" : "English",
        "name" : "Romeo Juliet",
        "profile" : "Leaders Speak",
        "about" : "Environment",
        "img" : "./images/Rectangle 7 (4).png",
       
    },
    {
        "id" : "52",
        "subject" : "English",
        "name" : "Juliet",
        "profile" : "Leaders Speak",
        "about" : "Environment",
        "img" :"./images/Rectangle 7 (4).png",
       
    }
    
]


for(let j =0;j<trending.length;j++)
{
    let createCard = document.createElement('div');
             createCard.innerHTML= `<div class="card bg-light m-3 card-style" style="width: 14rem; height:24.5rem; border-radius:20px;">
        
          <img style="border-radius: 20px;" class="trending-img" width="95%" height="70%" style="border-radius:20px;" src="${trending[j].img}" alt="">
             <div class="card-body trending-body"  style = "background: rgba(255,255,255,0.55);
             color: #000000;width:100%;">
             <h5 class="card-title makeBold">${trending[j].name}</h5>
             <div>
             <img style="border-radius: 20px;" class="trending-img" width="95%" height="70%" style="border-radius:20px;" src="${trending[j].profile}" alt="">
             <p class="card-text">
             SmartEd
             </p></div>
             </div>
             </div>`
             document.getElementById('card-add').appendChild(createCard);
   
}
