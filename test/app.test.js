import chai from "chai";
import chaiHttp from "chai-http";
const should = chai.should();
import server from "../src/app.js";

chai.use(chaiHttp);

describe("Server Tests", function () {
  it("Check Server Status", function (done) {
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
