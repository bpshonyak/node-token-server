/**
 * Created by bogdan on 5/6/16.
 */
var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;

var server = require("../server");
var api;

chai.use(chaiHttp);

describe("api", function() {

  before(function () {
    api = server.listen(1337);
  });

  after(function () {
    api.close();
  });

  it("should have a status of 403", function (done) {
    chai.request("http://localhost:1337")
        .get("/api")
        .end(function(err, res){
            expect(res).to.have.status(403);
            done();
        });
  });

  // it("should return text/plain", function (done) {
  //   chai.request('http://localhost:1337')
  //       .get("/")
  //       .end(function(err, res){
  //         expect(res).to.have.header('content-type', 'text/plain');
  //         done();
  //       });
  // });

});
