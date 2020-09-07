
const app = require('./app.js');

const supertest = require('supertest');

describe("POST /obfuscate", function(){
  it("Shoud return status code 200 if everything is ok.", function(done) {
    supertest(app)
      .post("/obfuscate")
      .send({ code: "console.log('hello world!');", domains: [] })
      .expect(200)
      .end(function(err, res){
        if (err) done(err); else done();
      });
  });
});
