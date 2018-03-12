var more = document.querySelector(".more");
more.onclick = function(){
  const deals = Array.from( document.querySelectorAll( '.adeal' ) );
  const width = deals[0].style.width;

  deals.forEach( ( deal ) => {
    const left = deals.style.marginLeft.replace( 'px', '' ); // '20px' -> 20

    deals.style.marginLeft = `${left - width}px`;
  } );
};

document.querySelector("#items.swiper-button-next").onclick = function(){
  document.querySelector("#items.swiper-button-prev").classList.add("fade");
}
