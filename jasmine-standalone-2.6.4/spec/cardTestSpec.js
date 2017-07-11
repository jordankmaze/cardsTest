describe('Make Deck', function() {
    it('passes if deck array = 52', function() {
      makeDeck();
      expect(deck.length).toEqual(52);
    });
});
