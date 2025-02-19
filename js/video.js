


function getTimeString(time){
   // get hour and rest seconds
   const hour = parseInt(time/3600);
   let remainingSecond = time % 3600;
   const minute = parseInt(remainingSecond/60);
   const second = remainingSecond % 60;
   return `${hour} hour ${minute} minute ${second} second ago`;
}


//create loadCategories 
const loadCategories = () =>{
fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
.then((res) => res.json())
.then((data) => displayCategories(data.categories))
.catch((error) => console.log(error));
};

const  loadVideos = () =>{
fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
.then((res) => res.json())
.then(data => displayVideos(data.videos))
.catch((error) => console.log(error))
};

const displayVideos = (videos) =>{
const videoContainer = document.getElementById("videos");

videos.forEach((video) => {
  console.log(video);
  const card = document.createElement('div');
  card.classList = "card card-compact ";
  card.innerHTML = `
  <figure class="h-[200px] rounded-md relative">
  <img class="h-full w-full object-cover"
    src=${video.thumbnail}
    alt="Shoes" />
    ${ video.others.posted_date?.length == 0 ? "": `<span class="absolute bg-black rounded p-1 text-white bottom-2 right-2">${getTimeString(video.others.posted_date)}</span> `

    }

</figure>
<div class="px-0 py-2 flex gap-2">
<div>
<img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
</div>

<div>
<h2 class="font-bold">${video.title}</h2>
<div class="flex items-center gap-2">
<p class="text-gray-400">${video.authors[0].profile_name}</p>

${video.authors[0].verified == true ? `<img class="w-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png"/>` : "" }
</div>

<p></p>
</div>
 
</div>
  `;
  videoContainer.append(card)
});
};


//create displayCategories 
const displayCategories = (categories) =>{
    const categoryContainer = document.getElementById("categories");

    categories.forEach( (item) => {
      console.log(item);

  //create a button
  const button = document.createElement("button");
  button.classList = "btn";
  button.innerText = item.category;

  //add button to category container
  categoryContainer.append(button);
    });

  
};


loadCategories();
loadVideos();