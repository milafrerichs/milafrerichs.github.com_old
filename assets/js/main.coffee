---
---
payMe = (amount, description, success) ->
  StripeCheckout.configure({
    key: 'pk_live_4W08g0QnXjtV2SZW2BCKOyex',
    token: (token) ->
      success(token)
      data = {amount: amount, description: description, stripeToken: token.id}
      $.ajax({
        url: 'http://civicvision-payment.herokuapp.com/pay',
        method: 'post'
        data: data
      })
    })

$ ->
  if('#pay-me').length > 0
    $('#customButton').click (e) ->
      e.preventDefault()
      amount = parseFloat($('#amount').val())*100
      description = $('#description').val()
      success = (token) ->
        $('#thank-you').show()
        $('#thank-you #email').val(token.email)
        $('#amount').val('')
        $('#description').val('')
      handler = payMe(amount, description, success)
      handler.open({
        name: 'Civic Vision UG',
        description: description,
        amount: amount,
        currency: 'EUR'
      })
  if $('#cv.ch4').length > 0
    $('#bookme-week').click (e) ->
      e.preventDefault()
      amount = 1600*100
      description = "A work week of Mila Frerichs"
      success = (token) ->
        $('#thank-you').show()
      handler = payMe(amount, description, success)
      handler.open({
        name: 'Civic Vision UG',
        description: description,
        amount: amount,
        currency: 'EUR'
      })
