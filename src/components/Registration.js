import "../app.css";

function Registration() {
    return (
      <div class="registrationapp">
        <p className="title">Registration Form</p>
        <form className="registration">
            <input type="text" value="Write your name..."/>
            <input type="email" value="Write your email..."/>
            <input type="text" value="Write your password..."/>
            <input type={"submit"}
                style={{ backgroundColor: "#a1eafb" }} />
        </form>
        </div>
    );
  }
  
  export default Registration;