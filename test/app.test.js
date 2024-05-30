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
describe("The state of the server", function () {
  it("should be running", function (done) {
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

describe("The contents of the page", function () {
  describe("Input 1", function () {
    it("should exist", function (done) {
      request("http://localhost:4000", function (error, response) {
        response.body.should.include("<input id='input1'");
        done();
      });
    });

    it("Needs to limit input #1 to being 3 characters long", function (done) {
      request("http://localhost:4000", function (error, response) {
        response.body.should.include("<input id='input1' maxlength='3'");
        done();
      });
    });

    it("Needs to have a name", function (done) {
      request("http://localhost:4000", function (error, response) {
        response.body.should.include(
          "<input id='input1' maxlength='3' name='input1'",
        );
        done();
      });
    });

    it("Needs to have a label", function (done) {
      request("http://localhost:4000", function (error, response) {
        response.body.should.include("<label for='input1'");
        done();
      });
    });
  });

  describe("Input 2", function () {
    it("should exist", function (done) {
      request("http://localhost:4000", function (error, response) {
        response.body.should.include("<input id='input2'");
        done();
      });
    });

    it("Needs to limit input #2 to being 3 characters long", function (done) {
      request("http://localhost:4000", function (error, response) {
        response.body.should.include("<input id='input2' maxlength='3'");
        done();
      });
    });

    it("Needs to have a name", function (done) {
      request("http://localhost:4000", function (error, response) {
        response.body.should.include(
          "<input id='input2' maxlength='3' name='input2'",
        );
        done();
      });
    });

    it("Needs to have a label", function (done) {
      request("http://localhost:4000", function (error, response) {
        response.body.should.include("<label for='input2'");
        done();
      });
    });
  });

  describe("Input 3 (Operation)", function () {
    it("should allow users to pick addition", function (done) {
      request("http://localhost:4000", function (error, response) {
        response.body.should.include(
          "<input type='radio' name='operation' value='addition'>",
        );
        done();
      });
    });

    it("should allow users to pick subtraction", function (done) {
      request("http://localhost:4000", function (error, response) {
        response.body.should.include(
          "<input type='radio' name='operation' value='subtraction'>",
        );
        done();
      });
    });

    it("should allow users to pick multiplication", function (done) {
      request("http://localhost:4000", function (error, response) {
        response.body.should.include(
          "<input type='radio' name='operation' value='multiplication'>",
        );
        done();
      });
    });

    it("should allow users to pick division", function (done) {
      request("http://localhost:4000", function (error, response) {
        response.body.should.include(
          "<input type='radio' name='operation' value='division'>",
        );
        done();
      });
    });
  });

  describe("Input 4 (Submit Button)", function () {
    it("Should be an input of type submit", function (done) {
      request("http://localhost:4000", function (error, response) {
        response.body.should.include("<input type='submit' ");
        done();
      });
    });

    it("Should be inside a form", function (done) {
      request("http://localhost:4000", function (error, response) {
        response.body.should.include("<form ");
        done();
      });
    });
  });
});
