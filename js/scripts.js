$(document).ready(function() {

//======================== Below sets up the starring system ================
// gets favorites from local storage or empty array
var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// add class 'fav' to each favorite
favorites.forEach(function(favorite) {
  document.getElementById(favorite).className ='fav';
});

// register click event listener
document.querySelector('.uselessDiv').addEventListener('click', function(e) {
  var id = e.target.id,
  item = e.target,
  index = favorites.indexOf(id);
  // return if target doesn't have an id (shouldn't happen)
  if (!id) return;
  // item is not favorite
  if (index == -1) {
    favorites.push(id);
    item.className ='fav';
  // item is already favorite
} else {
  favorites.splice(index, 1);
  item.className = '';
}
  // store array in local storage
  localStorage.setItem('favorites', JSON.stringify(favorites));
});
// local storage stores strings so we use JSON to stringify for storage and parse to get out of storage

// ======== End star system ========

var containerEl = document.querySelector('.mixitupContainer');

var mixer = mixitup(containerEl, {
  controls: {
                    toggleLogic: 'and' //can switch to OR logic
                  },
                  animation: {
                    effects: 'fade',
                    duration: 200,
                    nudge: false,
                    reverseOut: false
                  }
                });

      // the below code allows js to remember what filter the user last clicked
      var id = "all";
      $(function() {
        $(".control").click(function () {
          id = ($(this).attr('id'));
          console.log(id);
        });
      });

      // the below code makes sure that when modal is clicked out, the previous filter is clicked
      $('.modal').on('hidden.bs.modal', function(e) {
        console.log(id);
      });

      // check if it is a touch device
      function isTouchDevice(){
        return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
      }

      // if not touch device (<991px), trigger tooltip
      if (!window.matchMedia || (window.matchMedia("(min-width: 991px)").matches)) {
          // enable tooltips
          $('[data-toggle="tooltip"').tooltip();
        }
      });
