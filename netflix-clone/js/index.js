const api = "api_key=afdb767474830e812eb518325527da43";

const homeurl = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w400";
const base_url = "https://api.themoviedb.org/3";

const requests = {
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
  fetchDrama: `${base_url}/discover/movie?${api}&with_genres=18`,
  fetchThriller: `${base_url}/discover/movie?${api}&with_genres=53`,
  fetchMusic: `${base_url}/discover/movie?${api}&with_genres=10402`,
  fetchCrime: `${base_url}/discover/movie?${api}&with_genres=80`,
  fetchKids: `${base_url}/discover/tv?${api}&with_genres=10762`,
  fetchAnimation: `${base_url}/discover/tv?${api}&with_genres=16`,
  fetchSciFiFantasy: `${base_url}/discover/tv?${api}&with_genres=10765`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
};

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())
  .then((data) => {
    const setMovie =data.results[Math.floor(Math.random() * data.results.length - 1)];
    var home = document.querySelector(".home");
    var hometitle = document.querySelector(".hometitle");
    var homedesc = document.querySelector(".homedescription");
    home.style.backgroundImage ="url(" + homeurl + setMovie.backdrop_path + ")";
    homedesc.innerText = truncate(setMovie.overview, 150);
    hometitle.innerText = setMovie.name;
  });

fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("netflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h1");
    title.className = "rowtitle";
    title.innerText = "NETFLIX ORIGINALS";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "rowposters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "rowposterLarge";
      var s = movie.name.replace(/\s+/g, "");
      poster.id = s;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

fetch(requests.fetchTrending)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h1");
    title.className = "rowtitle";
    title.innerText = "Top Rated";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "rowposters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "rowposterLarge";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      row_posters.appendChild(poster);
    });
  });

  fetch(requests.fetchKids)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h1");
    title.className = "rowtitle";
    title.innerText = "Kids Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "rowposters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "rowposter";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });

  fetch(requests.fetchAnimation)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h1");
    title.className = "rowtitle";
    title.innerText = "Animation Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "rowposters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "rowposter";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });



fetch(requests.fetchActionMovies)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h1");
    title.className = "rowtitle";
    title.innerText = "Action Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "rowposters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "rowposter";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });

fetch(requests.fetchComedyMovies)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h1");
    title.className = "rowtitle";
    title.innerText = "Comedy Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "rowposters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "rowposter";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });

fetch(requests.fetchHorrorMovies)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h1");
    title.className = "rowtitle";
    title.innerText = "Horror Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "rowposters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "rowposter";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });

  fetch(requests.fetchCrime)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h1");
    title.className = "rowtitle";
    title.innerText = "Crime Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "rowposters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "rowposter";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });


fetch(requests.fetchRomanceMovies)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h1");
    title.className = "rowtitle";
    title.innerText = "Romance Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "rowposters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "rowposter";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });

fetch(requests.fetchDocumentaries)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h1");
    title.className = "rowtitle";
    title.innerText = "Documentaries";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "rowposters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "rowposter";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });

  fetch(requests.fetchDrama)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h1");
    title.className = "rowtitle";
    title.innerText = "Drama";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "rowposters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "rowposter";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });

  fetch(requests.fetchSciFiFantasy)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h1");
    title.className = "rowtitle";
    title.innerText = "Sci-Fi & Fantasy Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "rowposters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "rowposter";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });


  fetch(requests.fetchThriller)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h1");
    title.className = "rowtitle";
    title.innerText = "Thriller Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "rowposters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "rowposter";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });

  fetch(requests.fetchMusic)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h1");
    title.className = "rowtitle";
    title.innerText = "Music";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "rowposters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "rowposter";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });

  window.addEventListener("scroll",function(){
    var nav = document.querySelector(".navbar");
    nav.classList.toggle("active", window.scrollY > 0);
  })