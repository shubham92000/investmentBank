function initMap(){
  const loc = { lat : 19.199560 ,lng : 72.964256 } ;

  let map = new google.maps.Map(document.querySelector('.map'), {
    zoom : 14 ,
    center : loc
  });

  const marker = new google.maps.Marker({ position : loc , map : map });
}

// const initMap = async () => {
//   const loc = { lat : 19.199560 ,lng : 72.964256 } ;

//   let map = new google.maps.Map(document.querySelector('.map'), {
//     zoom : 14 ,
//     center : loc
//   });

//   const marker = new google.maps.Marker({ position : loc , map : map });
// }

// sticky menu background
window.addEventListener('scroll' , function () {
  if(window.scrollY > 150){
    document.querySelector('#navbar').style.opacity = 0.9;
  }else{
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// smooth scrolling
$('#navbar a, .btn').on('click' , function(event){
  if(this.hash !== ''){
    event.preventDefault();
    const hash = this.hash;
    $('html,body').animate(
      {
        scrollTop : $(hash).offset().top - 100
      },
      800
    );
  }
});