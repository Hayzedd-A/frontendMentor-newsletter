let inputEl = $('input')
let emailErrorSpan = $('#emailError')

inputEl.keyup(function() {
    $(this).css({'borderColor': 'gray', 'color': 'inherit'})
    emailErrorSpan.hide()
})

$('button').click(function(e) {
   switch (e.target.id) {
    case 'dismiss':
        $('.container, .response').toggle()
        break;
    case 'subscribe':
        let success = true
        let email = inputEl.val()
        let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (!emailReg.test(email)) {
            emailErrorSpan.show()
            inputEl.css({'borderColor': 'red', 'color': 'red'})
            success = false
        }
        else {
            $('.emailVal').text(email)
            $('.container').toggle()
            $('.response').css('display', 'grid')
        }
        break;
    }
})