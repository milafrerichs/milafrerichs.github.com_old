---
---
$ ->
  if('#pay-me').length > 0
    handler = StripeCheckout.configure({
      key: 'pk_live_4W08g0QnXjtV2SZW2BCKOyex',
      token: (token) ->
        amount = parseFloat($('#amount').val())*100
        description = $('#description').val()
        $('#thank-you').show()
        $('#thank-you #email').val(token.email)
        $('#amount').val('')
        $('#description').val('')
        data = {amount: amount, description: description, stripeToken: token.id}
        $.ajax({
          url: 'http://civicvision-payment.herokuapp.com/pay',
          method: 'post'
          data: data
        })
      })
    $('#customButton').click (e) ->
      e.preventDefault()
      amount = parseFloat($('#amount').val())*100
      description = $('#description').val()
      handler.open({
        name: 'Civic Vision UG',
        description: description,
        amount: amount,
        currency: 'EUR'
      })
