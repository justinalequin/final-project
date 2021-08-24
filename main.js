let playList = []
let watchList = []
let theYear = ''
let movieClick = 0;
let musicClick = 0;



let midMain = document.querySelector('.mid-main')
let midLeft = document.querySelector('.mid-left')
let midRight = document.querySelector('.mid-right')
let movieExpand = document.querySelector('.movie-expand')
let musicExpand = document.querySelector('.music-expand')
let yearSelect = document.querySelector('#year')
let moviePic = document.querySelector('.movie-pic')
let musicPic = document.querySelector('.music-pic')
let reset = document.querySelector('.reset')

//==================================================
//GETS USER INPUTTED YEAR AND UPDATES GLOBAL VARIABLE

yearSelect.addEventListener('click', function(){
    theYear = yearSelect.value



    console.log(theYear)

  //createList();

    //RESET OF SORTS
    if (theYear === 'start'){
         midMain.style.backgroundColor = '#d7e1e3'
         musicPic.style.width = '20vw'
         musicPic.style.height = '20vh'
         moviePic.style.width = '20vw'
         moviePic.style.height = '20vh'
        }
})


//==================================================
//MOVIE PIC THAT STARTS THE LIST DISPLAY

moviePic.addEventListener('click', function(){
  // let moviesStep = `movies${theYear}`
  // let moviesYearTop = moviesList[moviesStep]
  // console.log(moviesYearTop)
  
   movieClick = 1;
   musicClick = 0;
createList();
   //console.log('movie: ',movieClick)
   //console.log('music: ',musicClick)


    //===========================
    //===========  Expanding area
    midMain.style.backgroundColor = '#F76D6D'
    midRight.style.opacity = '.75'
    midLeft.style.opacity = '1'
    movieExpand.style.backgroundColor = '#F76D6D'
    movieExpand.style.display = 'block'
    musicExpand.style.display = 'none'


    //===========================
    //==============        STYLE
    moviePic.style.width = '30vw'
    moviePic.style.height = '30vh'
    musicPic.style.width = '20vw'
    musicPic.style.height = '20vh'

    //===========================
    //NO CHANGES IF NO SELECTION
    // if (moviesStep === 'movies'){
    //     musicPic.style.width = '500px'
    //     musicPic.style.height = '300px'
    //     moviePic.style.width = '500px'
    //     moviePic.style.height = '300px'
    //     midMain.style.backgroundColor = '#d7e1e3'
    //     movieExpand.style.display = 'none'
    //     musicExpand.style.display = 'none'
    // }

})


musicPic.addEventListener('click', function(){
    // let musicStep = `music${theYear}`
    // let musicYearTop = musicList[musicStep]
    // console.log(musicYearTop)

    movieClick = 0;
    musicClick = 1;
createList();
    //console.log('movie',movieClick)
    //console.log('music',musicClick)

    //===========================
    //===========  Expanding area
    midMain.style.backgroundColor = '#A8D1E7'
    midLeft.style.opacity = '.25'
    midRight.style.opacity = '1'
    movieExpand.style.backgroundColor = '#A8D1E7'
    musicExpand.style.backgroundColor = '#A8D1E7'
    movieExpand.style.display = 'none'
    musicExpand.style.display = 'block'


    //===========================
    //==============        STYLE
    musicPic.style.width = '30vw'
    musicPic.style.height = '30vh'
    moviePic.style.width = '20vw'
    moviePic.style.height = '20vh'

    // if (musicStep === 'music'){
    //     musicPic.style.width = '500px'
    //     musicPic.style.height = '300px'
    //     moviePic.style.width = '500px'
    //     moviePic.style.height = '300px'
    //     midMain.style.backgroundColor = '#d7e1e3'
    //     movieExpand.style.display = 'none'
    //     musicExpand.style.display = 'none'
    // }
})



//LAZY RESET BUTTON

reset.addEventListener('click', function(){
    location.reload();
})


//NOT SURE IF THIS IS GOING TO STAY OR NOT
//****************************************
let aboutClickedStatus = false;
let aboutSection = document.querySelector('.about-section')
let headImage = document.querySelector('.header-image');
headImage.addEventListener('click', function(){
    aboutSection.style.display = 'block'
    aboutSection.style.opacity = '.75'
    aboutClickedStatus = true
   // console.log(aboutClickedStatus)
    if (aboutClickedStatus === true){
        headImage.addEventListener('click', function(){
            aboutSection.style.display = 'none' 
            aboutClickedStatus = false;
            //console.log(aboutClickedStatus)
        })

                               
    }

})



// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let watchButt = document.querySelector(".watchlist-text");
let playButt = document.querySelector(".playlist-text");
let modalText = document.querySelector('.modal-text')
let modalContentMovie = document.querySelector('.modal-content-movie')
let modalContentMusic = document.querySelector('.modal-content-music')

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

watchButt.onclick = function() {
  modal.style.display = "block";
  modalWatchList();
  movieStrike();
  checkValue();
}

playButt.onclick = function() {
    modal.style.display = "block";
    modalPlayList();
    songStrike();
    checkValue();
  }



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  while (modalContentMusic.firstChild){
    modalContentMusic.removeChild(modalContentMusic.firstChild)
  }

  while (modalContentMovie.firstChild){
    modalContentMovie.removeChild(modalContentMovie.firstChild)
  }

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    while (modalContentMusic.firstChild){
      modalContentMusic.removeChild(modalContentMusic.firstChild)
    }

    while (modalContentMovie.firstChild){
      modalContentMovie.removeChild(modalContentMovie.firstChild)
    }
    
  }

}
