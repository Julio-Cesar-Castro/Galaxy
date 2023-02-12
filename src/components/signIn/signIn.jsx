import Galaxy from "../../assets/Galaxy.png";
import "./signIn.css";

export default function signIn() {
  return (
    <>
      <div className="container">
        <div className="titleBox">
          <h1>Galaxy</h1>
          <figure>
            <img src={Galaxy} alt="" />
          </figure>
        </div>
        <div className="inputsArea">
          <label htmlFor="username">Username</label>
          <div className="usernameInput">
            <input
              id="username"
              type="=text"
              placeholder="Username"
              name="username"
            />
          </div>
          <label htmlFor="password">Password</label>
          <div className="passwordInput">
            <input
              id="password"
              type="password"
              placeholder="**********"
              name="password"
            />
          </div>

          <button type="submit">Send</button>
          <div className="signIn">
            <p>
              I don't have my account yet.<span>Sign In!</span>{" "}
            </p>
            <p>
              Forget your password? <span>Click here!</span>
            </p>
          </div>
        </div>
      </div>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
      <span className="star"></span>
    </>
  );
}
