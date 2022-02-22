const assert = require('chai').assert;
const expect = require('chai').expect;
const funcions = require('../operacions')
const llista = require('../llista')



describe(" Test ", function() {
  describe("Check 1: ", function() {
    it("Ordenar per Nom EXPECT", function() {
      expect(funcions.ordenar_per_nom(llista.alumnes)).to.eql(llista.alumnesPerNom)
    })

  it("Ordenar per Data ASSERT", function() {
          for (var i = 0; i < llista.alumnes.length; i++) {
            assert.equal(funcions.ordenar_per_nom(llista.alumnes)[i]['nom'], llista.alumnesPerNom[i]['nom'])
  }  
  });

  });
});