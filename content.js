let allPhotos;
function refresh() {
  allPhotos = document.querySelectorAll('figure:not(.verified');
  // console.log(allPhotos);
}

function removePhotos() {
      refresh();
      updateTargets();
      // console.log(window.location.href);
  
  allPhotos.forEach(function(photo) {
    let photoAuthor = photo.querySelector('._1FfS9');
    if (photoAuthor) {
      photoAuthor = photoAuthor.href.toString().replace('https://unsplash.com/@', '')
    }


    
    if (photoAuthor === 'dollargill') {
      photo.remove();
    } else {
      photo.classList.add('verified');
    }
      
    
    
    
  });
}

window.addEventListener("load", removePhotos);


// je veux que ça change quand
// - on ouvre une photo (target body)
// - on passe à une autre photo 


var config = { attributes: true, childList: true, characterData: true };
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    // removePhotos();

    // quand <head> change
    if (mutation.target === document.head) {
      console.log("changement de head");

      updateTargets();

      
    } else {
      console.log('autre changement');
      removePhotos();
    }

  });
});

function updateTargets() {
  let newTargets = document.querySelectorAll('._1ZjfQ');

  newTargets.forEach(function(newTarget) {
    observer.observe(newTarget, config);
  });
}



// observer.observe(document.querySelector('._1ZjfQ'), config);
observer.observe(document.head, config);

// otherwise
observer.disconnect();
// observer.observe(document.querySelector('._1ZjfQ'), config);
observer.observe(document.head, config);

