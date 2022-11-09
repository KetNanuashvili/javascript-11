//this
//function Person (){
//    console.log(this);
//}
//let user2= {
//    name:'goga'
//}

//let user3= {
//    name:'sandro'
//}

//let user= {
//    name: 'levani',
//    printPerson: function(){
//        console.log(this.name);
//    }
//}

//როცა ვიყენებ callს შემიძლია განვსაზღვრო რომელი user იყოს this.
//user.printPerson.call(user3);

//როცა ვიყენებ apply
//user.printPerson.apply(user2, ['helloa','hellob']);

// bind გამოძახებამდე განაზღვრავს თუ რა უნდა იყოს this მნიშვნელობა.
//let printName = user.printPerson.bind(user3);
//printName();



//let obj1 ={
//    text:'hello',
//}

//function userName(person){
//    console.log(this.text + person);
//}

//userName.call(obj1,'goga')
//userName.call(obj1,'levani')


//accordion
let accordion = document.querySelectorAll('.container');

for (let item of accordion) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    })
}



//scroll to top

let scrollBtn = document.getElementById('top');

scrollBtn.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})


//filter
let result = document.getElementById('result');
let filter = document.getElementById('filter');

let listItems = [];


function getUsers(){
    fetch('https://reqres.in/api/users?page=2',{
        method: 'GET',
    })
    .then(response =>{
        return response.json();
    })
    .then(responseData =>{
        responseData.data.forEach(element => {
            let li = document.createElement('li');
            li.innerHTML = `${element.first_name} ${element.last_name}` ;
            listItems.push(li);

            result.appendChild(li);

        });
    })

    .catch(error=>{
        console.log(error);
    })
}

getUsers();

function filterData(searchItem){
    listItems.forEach(item=>{
        if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())){
            item.classList.remove('hide');
        }else{
            item.classList.add('hide');
        }
    })
}

filter.addEventListener('input', function(event){
    filterData(event.target.value)
})