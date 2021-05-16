const toBlock = ['ralphkayden', 'elise_outside'];


let allPhotos;
function refresh() {
  allPhotos = document.querySelectorAll('figure');
  console.log(allPhotos);
}
  



function removePhotos() {
      refresh();
  
  
  allPhotos.forEach(function(photo) {
    let photoAuthor = photo.querySelector('._1FfS9').href.toString().replace('https://unsplash.com/@', '');
    

      console.log(photoAuthor);
    
    if (photoAuthor === 'elise_outside') { photo.remove(); }
      
    
    
    
  });
}

if( document.readyState !== 'loading' ) {
    console.log( 'document is already ready, just execute code here' );
    removePhotos();

} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log( 'document was not ready, place code here' );
        removePhotos();
    });
}
