//person button
const leanne = document.getElementById("butLeanneId");
const erwin = document.getElementById("butErwinId");
const clementin = document.getElementById("butClementineId");
const patricia = document.getElementById("butPatriciaId");
const chersey = document.getElementById("butCherseyId");
const dennis = document.getElementById("butDennisId");

//Table
const nameInfo = document.getElementById("nameId");
const usernameInfo = document.getElementById("usernameId");
const adressInfo = document.getElementById("adressId");
const emailInfo = document.getElementById("emailId");
const phoneInfo = document.getElementById("phoneId");
const websiteInfo = document.getElementById("websiteId");

class Person{
    #id;
    #name;
    #username;
    #adress;
    #email;
    #phone;
    #website;

    setId(id){
        this.#id = id;
    }
    setName(name){
        this.#name = name;
    }
    setUsername(username){
        this.#username = username;
    }
    setAdress(adress){
        this.#adress = adress;
    }
    setEmail(email){
        this.#email = email;
    }
    setPhone(phone){
        this.#phone = phone;
    }
    setWebsite(website){
        this.#website = website;
    }

    getId(){
    return this.#id;
    }
    getName(){
        return this.#name;
    }
    getUsername(){
        return this.#username;
    }
    getAdress(){
        return this.#adress;
    }
    getEmail(){
        return this.#email;
    }
    getPhone(){
        return this.#phone;
    }
    getWebsite(){
        return this.#website;
    }
}

let person = new Person();

const divTitleAdd = document.getElementById("postsId");

function getFuncDataLeanne(){
    divTitleAdd.innerHTML = "";

    leanne.style["font-weight"] = "bolder";
    erwin.style["font-weight"] = "normal";
    clementin.style["font-weight"] = "normal";
    patricia.style["font-weight"] = "normal";
    chersey.style["font-weight"] = "normal";
    dennis.style["font-weight"] = "normal";

    let request = new XMLHttpRequest();
    request.open("get", "https://jsonplaceholder.typicode.com/users/1");

    request.onreadystatechange = () =>{
        if(request.readyState == 4){
            var status = request.status;
            if(status == 200){
                console.log(request.responseText);
                const text = JSON.parse(request.responseText);
                console.log(text);
                console.log(text.name);

                person.setId(text.id);
                person.setName(text.name);
                person.setUsername(text.username);
                person.setAdress(text.address.city+', '+text.address.street);
                person.setEmail(text.email);
                person.setPhone(text.phone);
                person.setWebsite(text.website                    );

                nameInfo.innerText = person.getName();
                usernameInfo.innerText = person.getUsername();
                adressInfo.innerText = person.getAdress();
                emailInfo.innerText = person.getEmail();
                phoneInfo.innerText = person.getPhone();
                websiteInfo.innerText = person.getWebsite();
            }
            else{
                allert("Error");
            }
        }
    }
    request.send();
}

function getFuncDataErwin(){
    divTitleAdd.innerHTML = "";

    leanne.style["font-weight"] = "normal";
    erwin.style["font-weight"] = "bolder";
    clementin.style["font-weight"] = "normal";
    patricia.style["font-weight"] = "normal";
    chersey.style["font-weight"] = "normal";
    dennis.style["font-weight"] = "normal";

    let request = new XMLHttpRequest();
    request.open("get", "https://jsonplaceholder.typicode.com/users/2");

    request.onreadystatechange = () =>{
        if(request.readyState == 4){
            var status = request.status;
            if(status == 200){
                console.log(request.responseText);
                const text = JSON.parse(request.responseText);
                console.log(text);
                console.log(text.name);

                person.setId(text.id);
                person.setName(text.name);
                person.setUsername(text.username);
                person.setAdress(text.address.city+', '+text.address.street);
                person.setEmail(text.email);
                person.setPhone(text.phone);
                person.setWebsite(text.website                    );

                nameInfo.innerText = person.getName();
                usernameInfo.innerText = person.getUsername();
                adressInfo.innerText = person.getAdress();
                emailInfo.innerText = person.getEmail();
                phoneInfo.innerText = person.getPhone();
                websiteInfo.innerText = person.getWebsite();
            }
            else{
                allert("Error");
            }
        }
    }
    request.send();
}

function getFuncDataClementine(){
    divTitleAdd.innerHTML = "";

    leanne.style["font-weight"] = "normal";
    erwin.style["font-weight"] = "normal";
    clementin.style["font-weight"] = "bolder";
    patricia.style["font-weight"] = "normal";
    chersey.style["font-weight"] = "normal";
    dennis.style["font-weight"] = "normal";

    let request = new XMLHttpRequest();
    request.open("get", "https://jsonplaceholder.typicode.com/users/3");

    request.onreadystatechange = () =>{
        if(request.readyState == 4){
            var status = request.status;
            if(status == 200){
                console.log(request.responseText);
                const text = JSON.parse(request.responseText);
                console.log(text);
                console.log(text.name);

                person.setId(text.id);
                person.setName(text.name);
                person.setUsername(text.username);
                person.setAdress(text.address.city+', '+text.address.street);
                person.setEmail(text.email);
                person.setPhone(text.phone);
                person.setWebsite(text.website                    );

                nameInfo.innerText = person.getName();
                usernameInfo.innerText = person.getUsername();
                adressInfo.innerText = person.getAdress();
                emailInfo.innerText = person.getEmail();
                phoneInfo.innerText = person.getPhone();
                websiteInfo.innerText = person.getWebsite();
            }
            else{
                allert("Error");
            }
        }
    }
    request.send();
}

function getFuncDataPatricia(){
    divTitleAdd.innerHTML = "";

    leanne.style["font-weight"] = "normal";
    erwin.style["font-weight"] = "normal";
    clementin.style["font-weight"] = "normal";
    patricia.style["font-weight"] = "bolder";
    chersey.style["font-weight"] = "normal";
    dennis.style["font-weight"] = "normal";

    let request = new XMLHttpRequest();
    request.open("get", "https://jsonplaceholder.typicode.com/users/4");

    request.onreadystatechange = () =>{
        if(request.readyState == 4){
            var status = request.status;
            if(status == 200){
                console.log(request.responseText);
                const text = JSON.parse(request.responseText);
                console.log(text);
                console.log(text.name);

                person.setId(text.id);
                person.setName(text.name);
                person.setUsername(text.username);
                person.setAdress(text.address.city+', '+text.address.street);
                person.setEmail(text.email);
                person.setPhone(text.phone);
                person.setWebsite(text.website                    );

                nameInfo.innerText = person.getName();
                usernameInfo.innerText = person.getUsername();
                adressInfo.innerText = person.getAdress();
                emailInfo.innerText = person.getEmail();
                phoneInfo.innerText = person.getPhone();
                websiteInfo.innerText = person.getWebsite();
            }
            else{
                allert("Error");
            }
        }
    }
    request.send();
}

function getFuncDataChersey(){
    divTitleAdd.innerHTML = "";

    leanne.style["font-weight"] = "normal";
    erwin.style["font-weight"] = "normal";
    clementin.style["font-weight"] = "normal";
    patricia.style["font-weight"] = "normal";
    chersey.style["font-weight"] = "bolder";
    dennis.style["font-weight"] = "normal";

    let request = new XMLHttpRequest();
    request.open("get", "https://jsonplaceholder.typicode.com/users/5");

    request.onreadystatechange = () =>{
        if(request.readyState == 4){
            var status = request.status;
            if(status == 200){
                console.log(request.responseText);
                const text = JSON.parse(request.responseText);
                console.log(text);
                console.log(text.name);

                person.setId(text.id);
                person.setName(text.name);
                person.setUsername(text.username);
                person.setAdress(text.address.city+', '+text.address.street);
                person.setEmail(text.email);
                person.setPhone(text.phone);
                person.setWebsite(text.website                    );

                nameInfo.innerText = person.getName();
                usernameInfo.innerText = person.getUsername();
                adressInfo.innerText = person.getAdress();
                emailInfo.innerText = person.getEmail();
                phoneInfo.innerText = person.getPhone();
                websiteInfo.innerText = person.getWebsite();
            }
            else{
                allert("Error");
            }
        }
    }
    request.send();
}

function getFuncDataDennis(){
    divTitleAdd.innerHTML = "";

    leanne.style["font-weight"] = "normal";
    erwin.style["font-weight"] = "normal";
    clementin.style["font-weight"] = "normal";
    patricia.style["font-weight"] = "normal";
    chersey.style["font-weight"] = "normal";
    dennis.style["font-weight"] = "bolder";

    let request = new XMLHttpRequest();
    request.open("get", "https://jsonplaceholder.typicode.com/users/6");

    request.onreadystatechange = () =>{
        if(request.readyState == 4){
            var status = request.status;
            if(status == 200){
                console.log(request.responseText);
                const text = JSON.parse(request.responseText);
                console.log(text);
                console.log(text.name);

                person.setId(text.id);
                person.setName(text.name);
                person.setUsername(text.username);
                person.setAdress(text.address.city+', '+text.address.street);
                person.setEmail(text.email);
                person.setPhone(text.phone);
                person.setWebsite(text.website                    );

                nameInfo.innerText = person.getName();
                usernameInfo.innerText = person.getUsername();
                adressInfo.innerText = person.getAdress();
                emailInfo.innerText = person.getEmail();
                phoneInfo.innerText = person.getPhone();
                websiteInfo.innerText = person.getWebsite();
            }
            else{
                allert("Error");
            }
        }
    }
    request.send();
}

//POSTS
function getDataPosts(){
    let request = new XMLHttpRequest();
    request.open("get", `https://jsonplaceholder.typicode.com/posts?userId=${person.getId()}`)
    request.onreadystatechange =() =>{
        if(request.readyState == 4){
            var status = request.status;
            if(status == 200){
                const text = JSON.parse(request.responseText);
                console.log(text);

                const mainTitleOfPosts = document.createElement("p");
                mainTitleOfPosts.innerText = "User`s posts:";
                mainTitleOfPosts.style["font-weight"] = "bolder";
                mainTitleOfPosts.style["font-size"] = "16px";
                mainTitleOfPosts.style["text-align"] = "center";
                divTitleAdd.appendChild(mainTitleOfPosts);

                const mainDivAdd = document.createElement("div");
                mainDivAdd.style["display"] = "flex";
                mainDivAdd.style["flex-wrap"] = "wrap";
                mainDivAdd.style["justify-content"] = "space-between";
                mainDivAdd.style["margin-top"] = "20px";

                divTitleAdd.appendChild(mainDivAdd);

                for (let i = 0; i < text.length; i++) {
                    const divAdd = document.createElement("div");
                    divAdd.style["width"] = "360px";
                    divAdd.style["padding"] = "20px";
                    divAdd.style["border"] = "1px solid black";
                    divAdd.style["margin-bottom"] = "20px";
                    
                    const titleOfDiv = document.createElement("p");
                    titleOfDiv.style["text-align"] = "center";
                    titleOfDiv.style["font-size"] = "14px";
                    titleOfDiv.style["margin-bottom"] = "20px";
                    titleOfDiv.innerText = text[i].title;

                    const textOfDiv = document.createElement("p");
                    textOfDiv.style["text-align"] = "justify";
                    textOfDiv.innerText = text[i].body;

                    divAdd.appendChild(titleOfDiv);
                    divAdd.appendChild(textOfDiv);
                    mainDivAdd.appendChild(divAdd); 
                }
            }
            else{
                allert("Error");
            }
        }
    }
    request.send();
}