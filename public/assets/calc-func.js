$(document).ready(function(){

  $('#add').on('click', function(){

      var n1 = $('#n1').val();
      var n2 = $('#n2').val();

      $.ajax({
        type: 'POST',
        url: '/',
        data: {n1:n1,n2:n2,n3:"a"},
        success: function(data){
          $('#ans').text(data);
        }
      });

      return false;

  });

  $('#sub').on('click', function(){

      var n1 = $('#n1').val();
      var n2 = $('#n2').val();

      $.ajax({
        type: 'POST',
        url: '/',
        data: {n1:n1,n2:n2,n3:"s"},
        success: function(data){
          $('#ans').text(data);
        }
      });

      return false;

  });

  $('#mul').on('click', function(){

      var n1 = $('#n1').val();
      var n2 = $('#n2').val();

      $.ajax({
        type: 'POST',
        url: '/',
        data: {n1:n1,n2:n2,n3:"m"},
        success: function(data){
            $('#ans').text(data);
        }
      });

      return false;

  });

  $('#div').on('click', function(){

      var n1 = $('#n1').val();
      var n2 = $('#n2').val();

      $.ajax({
        type: 'POST',
        url: '/',
        data: {n1:n1,n2:n2,n3:"d"},
        success: function(data){
          $('#ans').text(data);
        }
      });

      return false;

  });

});
