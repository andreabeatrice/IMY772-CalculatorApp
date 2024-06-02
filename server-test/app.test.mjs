import chai from "chai";
import chaiHttp from "chai-http";
const should = chai.should();
import server from "../src/app.js";

chai.use(chaiHttp);

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
