$(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBUtqYQvxxfcdhQz7RcsCNMIwlODpc8Cmc",
    authDomain: "fir-for.firebaseapp.com",
    databaseURL: "https://fir-for.firebaseio.com",
  }
  firebase.initializeApp(config);
  var database = firebase.database()
  var table = database.ref('form')
  table.push({
    lastname: 'bailey',
    firstname: 'mariah',
    email: 'jackieosan@gmail.com',
    message: 'hello'
})
  
$('.js-form').on('submit', event => {
      event.preventDefault();
  });
});
</script>