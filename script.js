$(function() {
  $('h1').hide().slideDown(700);
  $('section').hide().fadeIn(700);
  var $textInput = $('input:text');
  var $list = $('#list');
  var $addButton = $('#addButton');
  
  // add todo
  $addButton.on('click', function () {
    var $text = $textInput.val();

    if ($text === '') {
      setTimeout(() => {
        $('#alert').addClass('visual');
      }, 8);
    } else {
      $list.append('<li><input type="checkbox" id=" ' + $text + ' "><label for=" ' + $text + ' "><i class="fas fa-check"></i>' + $text + '</label></li>');

      $textInput.val('');
    };
  });

  // reset todo
  $('#reset').on('click', function() {
    $('li').remove();
  });

  // remove todo
  $('#remove').on('click', function() {
    var $completed = $('input:checked');

    $completed.parentsUntil('ul').remove();
  });

})