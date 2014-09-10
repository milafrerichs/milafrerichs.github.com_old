---
---
$ ->
  if('#pay-me').length > 0
    handler = StripeCheckout.configure({
      key: 'pk_live_4W08g0QnXjtV2SZW2BCKOyex',
      token: (token) ->
        $('#thank-you').show()
        $('#thank-you #email').val(token.email)
        $('#amount').val('')
        $('#description').val('')
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
