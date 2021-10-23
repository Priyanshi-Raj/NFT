const trending = [
    {
        "id" : "4.56",
        "name" : "Silent Color",
        "profile" : "./images/Ellipse 1 (1).png",
        "img" : "./images/Rectangle 7 (11).png",
       
    },
    {
        "id" : "4.65",
        "name" : "Pricy Peace",
        "profile" : "./images/Ellipse 1 (2).png",
        "img" : "./images/Rectangle 7 (12).png",
       
    },
    {
        "id" : "4.12",
        "name" : "Brushified",
        "profile" : "./images/Ellipse 1 (3).png",
        "img" : "./images/Rectangle 7 (10).png",
        
    },
    {
        "id" : "4.56",
        "name" : "Lusty Green",
        "profile" : "./images/Ellipse 1 (4).png",
        "img" : "./images/Rectangle 7 (4).png",
       
    },
    {
        "id" : "5",
        "name" : "Yellow Horse",
        "profile" : "./images/Ellipse 1 (5).png",
        "img" :"./images/Rectangle 7 (5).png",
       
    }
    
]


const popular = [
    {
        "id" : "5.12",
        "name" : "Untold",
        "profile" : "./images/Ellipse 1 (1).png",
        "img" : "./images/Rectangle 7 (6).png",
       
    },
    {
        "id" : "5.04",
        "name" : "Alone",
        "profile" : "./images/Ellipse 1 (2).png",
        "img" : "./images/Rectangle 7 (7).png",
       
    },
    {
        "id" : "4.56",
        "name" : "Remler",
        "profile" : "./images/Ellipse 1 (3).png",
        "img" : "./images/Rectangle 7 (8).png",
        
    },
    {
        "id" : "4.02",
        "name" : "Untold",
        "profile" : "./images/Ellipse 1 (4).png",
        "img" : "./images/Rectangle 7 (9).png",
       
    },
    {
        "id" : "5.02",
        "name" : "Proxima",
        "profile" : "./images/Ellipse 1 (5).png",
        "img" :"./images/Rectangle 7 (4).png",
       
    }
    
]

for(let j =0;j<trending.length;j++)
{
    let createCard = document.createElement('div');
             createCard.innerHTML= `<div class="d-flex flex-column align-items-center"><div class="card m-3 card-style" style="width: 14rem; height:24rem; border-radius:20px;">
        
          <div class="d-flex justify-content-center mt-1" style="width:100%;height:100%;"><img style="border-radius: 20px;" class="trending-img" width="95%" height="100%" style="border-radius:20px;" src="${trending[j].img}" alt=""></div>
             <div class="card-body trending-body pt-0";
             color: #000000;width:100%;">
             <h5 class="card-title makeBold">${trending[j].name}</h5>
             <div class="d-flex w-100" style="position:relative;">
             <img style="border-radius: 50%; margin-right:0.8rem;" class="trending-img" width="20%" height="20%" style="border-radius:20px;" src="${trending[j].profile}" alt="">
             <p class="card-text mt-2" style="color:white">
             SmartEd
             </p> <p class="mt-2" style="position:absolute;right:0;"><i  class="far fa-heart text-light"></i></p></div>
             </div>
             </div>
             <a href="#" class=" py-1 m-2 mt-0 text-center rounded-pill text-light" style="background:#5c45ab;width: 14rem;text-decoration:none"><p class="w-100 text-center text-light my-auto py-2">Sold for <span style="font-weight:650;">${trending[j].id} ETH</span></p></a></div>`
             document.getElementById('card-add').appendChild(createCard);
   
}

for(let j =0;j<popular.length;j++)
{
    let createCard = document.createElement('div');
    createCard.innerHTML= `<div class="d-flex flex-column align-items-center"><div class="card m-3 card-style" style="width: 14rem; height:24rem; border-radius:20px;">
        
    <div class="d-flex justify-content-center mt-1" style="width:100%;height:100%;"><img style="border-radius: 20px;" class="trending-img" width="95%" height="100%" style="border-radius:20px;" src="${popular[j].img}" alt=""></div>
       <div class="card-body trending-body pt-0";
       color: #000000;width:100%;">
       <h5 class="card-title makeBold">${popular[j].name}</h5>
       <div class="d-flex w-100" style="position:relative;">
       <img style="border-radius: 50%; margin-right:0.8rem;" class="trending-img" width="20%" height="20%" style="border-radius:20px;" src="${popular[j].profile}" alt="">
       <p class="card-text mt-2" style="color:white">
       SmartEd
       </p> <p class="mt-2" style="position:absolute;right:0;"><i  class="far fa-heart text-light"></i></p></div>
       </div>
       </div>
       <a href="#" class=" py-1 m-2 mt-0 text-center rounded-pill text-light" style="background:#5c45ab;width: 14rem;text-decoration:none"><p class="w-100 text-center text-light my-auto py-2">Sold for <span style="font-weight:650;">${popular[j].id} ETH</span></p></a></div>`
             document.getElementById('card-add-2').appendChild(createCard);
   
}