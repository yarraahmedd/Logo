let parent= document.querySelector("#parent");
parent.classList.add("vh-100")
//NAVBAR//
let navbar= document .createElement("div");
navbar.classList.add("navbar","bg-white","container-fluid");
let logo= document.createElement("div");
logo.classList.add("py-1","ms-3","d-flex")
let title=document.createElement("h4");
title.classList.add("text-success");
title.innerHTML="Logo";
let links=document.createElement("div");
let ul= document.createElement("ul");
ul.classList.add("ms-auto","me-3","mb-2","d-flex","flex-row")
let li1=document.createElement("li");
let li2=document.createElement("li");
let li3=document.createElement("li");
let li4=document.createElement("li");
li1.classList.add("me-3", "ms-3","d-flex","text-secondary")
li2.classList.add("me-3", "ms-3","d-flex","text-secondary")
li3.classList.add("me-3", "ms-3","d-flex","text-secondary")
li4.classList.add("me-3", "ms-3","d-flex","text-secondary")
li1.innerHTML="Home";
li2.innerHTML="About";
li3.innerHTML="Service";
li4.innerHTML="Contact";
parent.appendChild(navbar);
navbar.appendChild(logo);
logo.appendChild(title);
navbar.appendChild(links);
links.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
//PRODUCTS//
let container= document.createElement("div");
container.classList.add("s");
let row=document.createElement("div");
row.classList.add("row","m-2","d-flex");
let product1=document.createElement("div");
let product2=document.createElement("div");
let product3=document.createElement("div");
let product4=document.createElement("div");
let product5=document.createElement("div");
product1.classList.add("col-12","text-center","bg-white","my-1","py-4");
product2.classList.add("col-12","text-center","bg-white","my-1","py-4");
product3.classList.add("col-12","text-center","bg-white","my-1","py-4");
product4.classList.add("col-12","text-center","bg-white","my-1","py-4");
product5.classList.add("col-12","text-center","bg-white","my-1","py-4");
let num1=document.createElement("h2");
let num2=document.createElement("h2");
let num3=document.createElement("h2");
let num4=document.createElement("h2");
let num5=document.createElement("h2");
num1.innerHTML="1";
num2.innerHTML="2";
num3.innerHTML="3";
num4.innerHTML="4";
num5.innerHTML="5";
let desc1=document.createElement("h7");
let desc2=document.createElement("h7");
let desc3=document.createElement("h7");
let desc4=document.createElement("h7");
let desc5=document.createElement("h7");
desc1.classList.add("text-secondary");
desc2.classList.add("text-secondary");
desc3.classList.add("text-secondary");
desc4.classList.add("text-secondary");
desc5.classList.add("text-secondary");
desc1.innerHTML="Product";
desc2.innerHTML="Product";
desc3.innerHTML="Product";
desc4.innerHTML="Product";
desc5.innerHTML="Product";
parent.appendChild(container);
container.appendChild(row);
row.appendChild(product1);
product1.appendChild(num1);
product1.appendChild(desc1);
row.appendChild(product2);
product2.appendChild(num2);
product2.appendChild(desc2);
row.appendChild(product3);
product3.appendChild(num3);
product3.appendChild(desc3);
row.appendChild(product4);
product4.appendChild(num4);
product4.appendChild(desc4);
row.appendChild(product5);
product5.appendChild(num5);
product5.appendChild(desc5);
//FOOTER//
let footer=document.createElement("div");
footer.classList.add("row","bg-success","py-2")
let text=document.createElement("div");
text.classList.add("col-12");
let desc= document.createElement("h5");
desc.classList.add("text-white","text-center");
desc.innerHTML="Copyright @ Yara";
parent.appendChild(footer);
footer.appendChild(text);
text.appendChild(desc);