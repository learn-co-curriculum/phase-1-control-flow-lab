const expect = chai.expect;

describe('index.js', () => {
  describe('first 400 feet are free', () => {
    it('gives customers a free sample', () => {
      expect(scuberGreetingForFeet(199)).to.equal("This one is on me!");
    })

    it('charges 25 dollars for a distance over 2000 feet', () => {
      expect(scuberGreetingForFeet(2001)).to.equal("I will gladly take your thirty bucks.")
    })

    it('does not allow rides over 2500 feet', () => {
      expect(scuberGreetingForFeet(2501)).to.equal("No can do.")
    })

  })

  describe('allowable destination', () => {
    it('returns "Ok, sounds good." when the city is NYC', () => {
      expect(ternaryCheckCity("NYC")).to.equal("Ok, sounds good.")
    })

    it('should return "No go." if the destination city is not NYC', () => {
      expect(ternaryCheckCity("Pittsburgh")).to.equal("No go.")
    })
  })

  describe('switchAge', () => {
    it('should return "Thank you so much." if the tip is generous', () => {
      expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.')
    })

    it('should return "Thank you." if the tip is not so generous', () => {
      expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.')
    })

    it('should return "Bye." if anything else', () => {
      expect(switchOnCharmFromTip('thanks for everything')).to.equal("Bye.")
    })
  })
});
