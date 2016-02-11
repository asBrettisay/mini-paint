var color = 'white';
var colors = 'white green red blue yellow';
var box = $('.box');

$(document).ready(function() {

  var isDragging = false;
  box.mousedown(function() {
    isDragging = true;
  })
  box.mouseup(function() {
    isDragging = false;
  })




  $('#red').on('click', function() {
    color = 'red';
  });
  $('#blue').on('click', function() {
    color = 'blue';
  });
  $('#green').on('click', function() {
    color = 'green';
  });
  $('#yellow').on('click', function() {
    color = 'yellow';
  });
  $('#white').on('click', function() {
    color = 'white';
  });
  box.on('click', function() {
    $(this).addClass(color);
  });

  box.on('dblclick', function() {
    $(this).removeClass(color);
  });
  box.on('mouseover', function() {
    if (isDragging) {
      $(this).addClass(color);
    }
  })

  $('#reset').on('click', function() {
    box.removeClass(colors);
  });
})
