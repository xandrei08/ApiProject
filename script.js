function fetchUser(first){
   fetch("https://randomuser.me/api")
   .then((res) => res.json())
   .then((data) => {
        displayUser(data.results[0],first);
   });
}


const userDisplay = document.querySelector('#user')
const userDisplay2 = document.querySelector("#user2");
const userDisplay3 = document.querySelector("#user3");

function userInfo(info,insertUser){
  insertUser.innerHTML = `
    <div class="flex justify-between">
    <div class="flex">
      <img
        class="w-48 h-48 rounded-full mr-8"
        src="${info.picture.large}"
      />
      <div class="space-y-3">
        <p class="text-xl">
          <span class="font-bold">Name: </span>${info.name.first} ${info.name.last}
        </p>
        <p class="text-xl">
          <span class="font-bold">Email: </span> ${info.email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Phone: </span> ${info.phone}
        </p>
        <p class="text-xl">
          <span class="font-bold">Location: </span> ${info.location.country}, ${info.location.city}
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span> ${info.dob.age}</p>
      </div>
    </div>
    </div>
    `
}

function displayUser(fetchedData,displayedInfo){
  if(user.gender ==='female'){
      document.body.style.backgroundColor = '#CE4322'
  }else{
      document.body.style.backgroundColor = '#283747'
  }
  userInfo(fetchedData,displayedInfo);

  }



document.querySelector("#generate").addEventListener('click', function(){
  return fetchUser(userDisplay);
});
fetchUser(userDisplay);
document.querySelector("#generate2").addEventListener('click', function(){
  return fetchUser(userDisplay2);
});
fetchUser(userDisplay2);
document.querySelector("#generate3").addEventListener('click', function(){
  return fetchUser(userDisplay3);
});
fetchUser(userDisplay3);


