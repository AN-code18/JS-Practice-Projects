const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const moiveBox = document.querySelector("#movie-box");
const getMovies = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  // showMovies(data)
  //console.log(data);
  showMovies(data.results);
};
//getMovies(APIURL);

const showMovies = (data) => {
  //console.log(data)

  moiveBox.innerHTML = ""; // reset first box then display searched items

  data.forEach((item) => {
    console.log(item);
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
            <img src="${IMGPATH + item.poster_path}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${item.original_title} </h2>
                        <span> ${
                          item.vote_average
                        }                            <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                       ${item.overview}
                    </p>
                 </div>
            `;
    moiveBox.appendChild(box);
  });
};

document.querySelector("#search").addEventListener("keyup", function (event) {
  //console.log(event.target.value)
  if (event.target.value != "") {
    getMovies(SEARCHAPI + event.target.value);
  } else {
    getMovies(APIURL);
  }
});

//Init call
getMovies(APIURL);

//title , overview , rating , image ---->dynamic
