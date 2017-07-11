var suits = [ "hearts", "diams", "clubs", "spades" ];
var ranks = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A" ];
var deck = [];

$("#drawbtn").click( function() {
  if ($(".red").length <= 0 ){
    for (var i in deck) {
       makeCard(deck[i].suit , deck[i].rank);
    }
  }
});

function makeDeck() {
  deck = [];
  //for each type of suit
  for( var i = 0; i < suits.length; i++ ) {
    //and for each rank
    for( var j = 0; j < ranks.length; j++ ) {
      //make a card
      var card = {};
      card.suit = suits[i];
      card.rank = ranks[j];

      deck.push(card);
    }
  }
}

function shuffleDeck() {
  var nums = deck,
  ranNums = [],
  i = nums.length,
  j = 0;

  while (i--) {
      j = Math.floor(Math.random() * (i+1));
      ranNums.push(nums[j]);
      nums.splice(j,1);
  }
  for (var d in ranNums) {
     makeCard(ranNums[d].suit , ranNums[d].rank);
  };
};

function makeCard( suit, rank ) {
  var card = $(".card.template").clone();

  card.removeClass("template");

  card.find(".rank").html(rank);
  card.find(".suit").html("&"+suit+";");

  if( suit === "hearts" || suit === "diams" ) {
    card.addClass("red");
  }

  $("body").append(card);
}
