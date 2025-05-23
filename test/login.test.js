import request from "supertest";
import { expect } from "chai";
import app from "../src/app.js";

describe("POST /login", () => {
  it("should login successfully with correct credentials", (done) => {
    request(app)
      .post("/login")
      .send({
        email: process.env.USER_EMAIL,
        password: process.env.USER_PASSWORD,
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).to.equal("✅ Login succeeded");
        expect(res.body).to.have.property("token");
        done();
      });
  });

  it("should return 401 with incorrect credentials", (done) => {
    request(app)
      .post("/login")
      .send({
        email: process.env.USER_EMAIL,
        password: "wrongPassword", // <-- fix: use email, not "username"
      })
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).to.equal("❌ Invalid email or password");
        done();
      });
  });

  it("should return 400 if email or password is missing", (done) => {
    request(app)
      .post("/login")
      .send({ email: "" }) // only email, missing password
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).to.equal("❌ Email and password are required");
        done();
      });
  });
});
