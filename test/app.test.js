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
      request("http://localhost:4000", function(error, response, body) {
        body.should.have.descendants("input");
        done();
      });

      it("should have an id", function(done) {
        request("http://localhost:4000", function(error, response, body) {
          $('input').should.have.id('#input1');
          done();
        });

      });
    });
  });
