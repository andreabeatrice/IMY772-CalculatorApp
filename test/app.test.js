import chai from "chai";
import chaiHttp from "chai-http";
const should = chai.should();

chai.use(chaiHttp);

import server from "../src/app.js";

// const chai = { expect, should };
// chai.use(chaiHttp);

describe("Init", function () {
  it("check app status", function (done) {
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
