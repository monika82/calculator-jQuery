
$(function () {
  $('button').on('click', function () {
    let nmb1 = parseInt($('#first_number').val());
    let nmb2 = parseInt($('#second_number').val());
    let operator = $('#operator').val();
   
    $('p').text(calculate(nmb1, nmb2, operator));
  });


  $(document).ready(function() {
    $('input').keyup(function() {

        var empty = false;
        $('input').each(function() {
            if ($(this).val().length == 0) {
                empty = true;
            }
        });

        if (empty) {
            $('#btn').attr('disabled', 'disabled');
        } else {
            $('#btn').attr('disabled', false);
        }
    });
});

  let calculate = (numb1, numb2, operator) => {
    let nmb;
    switch (operator) {
      case 'add':
        nmb = numb1 + numb2;
        break;
      case 'substract':
        nmb = numb1 - numb2;
        break;
      case 'multiply':
        nmb = numb1 * numb2;
        break;
      case 'divide':
          nmb = numb1 / numb2;
          if (!isFinite(nmb)) {
            if (isNaN(nmb)) {
              nmb = "broke";
            } else {
              nmb = "try again";
            }
          }
    }
    return nmb;
  }
});

