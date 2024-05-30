import chai from "chai";
import chaiHttp from "chai-http";
const should = chai.should();
import server from "../src/app.js";
import chaiDom from "chai-dom";
import $ from "jquery";
import request from "request";

chai.use(chaiHttp);
chai.use(chaiDom);

//Needs to start a server
describe("The state of the server", function() {
  it("should be running", function(done) {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        done();
      });
  });
});

describe("The contents of the page", function() {
  describe("Input 1", function() {

    it("should exist", function(done) {
      request("http://localhost:4000", function(error, response) {
        response.body.should.include("<input id='input1'");
        done();
      });

      it("should have a max length of 3", function(done) {
        request("http://localhost:4000", function(error, response) {
          response.body.should.include("<input id='input1' maxlength='3'");
          done();
        });
      });




    });
  });
