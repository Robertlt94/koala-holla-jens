$( document ).ready( onReady );

function onReady(){
  console.log( 'js' );
  // Establish Click Listeners
  $( '#addButton' ).on( 'click', addKoala );
  // load existing koalas on page load
  getKoalas();
  $( '#viewKoalas' ).on( 'click', '.transferButton', transferKoala );
};

function addKoala() {
  // user input and put in an object
  let koalaToSend = {
    name: $( '#nameIn' ).val(),
    age: $( '#ageIn' ).val(),
    gender: $( '#genderIn' ).val(),
    readyToTransfer: $( '#readyToTransferIn' ).val(),
    notes: $( '#notesIn' ).val()
  };
  console.log( 'adding:', koalaToSend );
  $.ajax({
    method: 'POST',
    url: '/koalaChart',
    data: koalaToSend
  }).then( function( response ){
    console.log( 'back from /koalaChart POST:', response );
    // display on the DOM
    getKoalas();
    // empty inputs
    $( '#nameIn' ).val( ' ' );
    $( '#ageIn' ).val( ' ' );
    $( '#genderIn' ).val( ' ' );
    $( '#readyToTransferIn' ).val( ' ' );
    $( '#notesIn' ).val( ' ' );
  }).catch( function( err ){
    console.log( err );
    alert( 'Could not add Koala!' );
  });
};

function getKoalas(){
  console.log( 'in getKoalas' );
  $.ajax({
    method: 'GET',
    url: '/koalaChart'
  }).then( function( response ){
    console.log( 'back from /koalaChart GET:', response );
    let el = $( '#viewKoalas' );
    el.empty();
    for(let i=0; i<response.length; i++) {
        el.append( `<tr><td>${response[i].name}</td><td>${response[i].age}</td><td>${response[i].gender}</td><td>${response[i].ready_to_transfer}</td><td>${response[i].notes}</td><td><button class="transferButton" data-id="${response[i].id}">Ready To Transfer</button></td></tr>` );
      }
    }).catch( function( err ){
      console.log( err );
      alert( 'GET Error' );
    })
    } // ajax call to server to get koalas

function transferKoala() {
  console.log( 'in transferKoala:', $( this ).data( 'id' ) );
  $.ajax({
    method: 'PUT',
    url: '/koalaChart?id=' + $( this ).data( 'id' )
  }).then( function( response ){
    console.log( 'back from PUT:', response );
    getKoalas();
  }).catch( function( err ){
    console.log( err );
    alert( 'Transfer Failed' );
  })
}