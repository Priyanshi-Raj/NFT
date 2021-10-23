const explore = [
    {
        "id" : "4.56",
        "name" : "Juliet",
        "profile" : "./images/Ellipse 1 (1).png",
        "img" : "./images/Rectangle 7 (4).png",
       
    },
    {
        "id" : "5.20",
        "name" : "Bill Gates",
        "profile" : "./images/Ellipse 1 (2).png",
        "img" : "./images/Rectangle 7 (5).png",
       
    },
    {
        "id" : "5.04",
        "name" : "Bill Gates",
        "profile" : "./images/Ellipse 1 (3).png",
        "img" : "./images/Rectangle 7 (6).png",
        
    },
    {
        "id" : "4.56",
        "name" : "Romeo Juliet",
        "profile" : "./images/Ellipse 1 (4).png",
        "img" : "./images/Rectangle 7 (7).png",
       
    },
    {
        "id" : "5.24",
        "name" : "Juliet",
        "profile" : "./images/Ellipse 1 (5).png",
        "img" :"./images/Rectangle 7 (8).png",
    },
    
    {
        "id" : "4.56",
        "name" : "Juliet",
        "profile" : "./images/Ellipse 1 (1).png",
        "img" : "./images/Rectangle 7 (9).png",
       
    },
    {
        "id" : "4.56",
        "name" : "Bill Gates",
        "profile" : "./images/Ellipse 1 (2).png",
        "img" : "./images/Rectangle 7 (10).png",
       
    },
    {
        "id" : "4.56",
        "name" : "Bill Gates",
        "profile" : "./images/Ellipse 1 (3).png",
        "img" : "./images/Rectangle 7 (11).png",
        
    },
    {
        "id" : "4.56",
        "name" : "Romeo Juliet",
        "profile" : "./images/Ellipse 1 (4).png",
        "img" : "./images/Rectangle 7 (12).png",
       
    },
    {
        "id" : "4.56",
        "name" : "Juliet",
        "profile" : "./images/Ellipse 1 (5).png",
        "img" :"./images/Rectangle 7 (4).png",
       
    },
    {
        "id" : "51",
        "name" : "Juliet",
        "profile" : "./images/Ellipse 1 (1).png",
        "img" : "./images/Rectangle 7 (5).png",
       
    },
    {
        "id" : "4.56",
        "name" : "Bill Gates",
        "profile" : "./images/Ellipse 1 (2).png",
        "img" : "./images/Rectangle 7 (6).png",
       
    },
    {
        "id" : "4.56",
        "name" : "Bill Gates",
        "profile" : "./images/Ellipse 1 (3).png",
        "img" : "./images/Rectangle 7 (7).png",
        
    },
    {
        "id" : "4.56",
        "name" : "Romeo Juliet",
        "profile" : "./images/Ellipse 1 (4).png",
        "img" : "./images/Rectangle 7 (8).png",
       
    },
    {
        "id" : "4.56",
        "name" : "Juliet",
        "profile" : "./images/Ellipse 1 (8).png",
        "img" :"./images/Rectangle 7 (9).png",
       
    }
    
]

for(let j =0;j<explore.length;j++)
{
    let createCard = document.createElement('div');
             createCard.innerHTML= `<div class="d-flex flex-column align-items-center"><div class="card m-3 card-style" style="width: 14rem; height:24rem; border-radius:20px;">
        
          <div class="d-flex justify-content-center mt-1" style="width:100%;height:100%;"><img style="border-radius: 20px;" class="trending-img" width="95%" height="100%" style="border-radius:20px;" src="${explore[j].img}" alt=""></div>
             <div class="card-body trending-body pt-0";
             color: #000000;width:100%;">
             <h5 class="card-title makeBold">${explore[j].name}</h5>
             <div class="d-flex">
             <img style="border-radius: 50%; margin-right:0.8rem;" class="trending-img" width="20%" height="20%" style="border-radius:20px;" src="${explore[j].profile}" alt="">
             <p class="card-text mt-2" style="color:white">
             SmartEd
             </p></div>
             </div>
             </div>
             <a href="#" class=" py-1 m-2 mt-0 text-center rounded-pill text-light" style="background:#5c45ab;width: 14rem;text-decoration:none"><p class="w-100 text-center text-light my-auto py-2">Sold for <span style="font-weight:650;">${explore[j].id} ETH</span></p></a></div>`
             document.getElementById('card-add').appendChild(createCard);
   
}

// for(let j =0;j<popular.length;j++)
// {
//     let createCard = document.createElement('div');
//              createCard.innerHTML= `<div class="card m-3 card-style" style="background:956ff;width: 14rem; height:24rem; border-radius:20px;">
        
//              <div class="d-flex justify-content-center mt-1" style="width:100%;height:100%;"><img style="border-radius: 20px;" class="trending-img" width="95%" height="100%" style="border-radius:20px;" src="${popular[j].img}" alt=""></div>
//              <div class="card-body trending-body pt-0";
//              color: #000000;width:100%;">
//              <h5 class="card-title makeBold">${popular[j].name}</h5>
//              <div class="d-flex">
//              <img style="border-radius: 50%; margin-right:0.8rem;" class="trending-img" width="20%" height="20%" style="border-radius:20px;" src="${popular[j].profile}" alt="">
//              <p class="card-text mt-2" style="color:white">
//              SmartEd
//              </p></div>
//              </div>
//              </div>
//              <a href="#" class=" py-1 m-2 mt-0 text-center rounded-pill text-light" style="background:#5c45ab;width: 14rem;text-decoration:none"><p class="w-100 text-center text-light my-auto py-2">Hemlo</p></a></div>`
//              document.getElementById('card-add-2').appendChild(createCard);
   
// }