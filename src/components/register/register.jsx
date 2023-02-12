import "./register.css";
import Galaxy from "../../assets/Galaxy.png";

export default function Register() {
  return (
    <>
      <div className="container">
        <div className="titleBox">
          <h1>Register now!</h1>
          <figure>
            <img src={Galaxy} alt="" />
          </figure>
        </div>
        <div className="form">
          <div className="inputsArea">
            <div className="boxName">
              <div className="firstNameDiv">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" name="firstName" />
              </div>
              <div className="lastNameDiv">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" name="lastName" />
              </div>
            </div>
          </div>
          <button type="submit">Send</button>
          <div className="signIn">
            <p>
              Already have an account <span>Login!</span>{" "}
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
