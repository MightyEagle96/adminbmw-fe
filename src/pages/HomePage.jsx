import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import adminAvatar from "../assets/images/admin.png";
import TextInputComponent from "../components/TextInputComponent";
import { PrimaryButton } from "../components/MyButtons";
import { grey } from "@mui/material/colors";
import { httpService } from "../services/services";
import { useDispatch } from "react-redux";
import { signIn, authType } from "../redux/actions";

export default function HomePage() {
  const defaultData = { email: "", password: "" };
  const [loginForm, setLoginForm] = useState(defaultData);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  const Login = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const path = "login";
      const res = await httpService.post(path, loginForm);

      if (res) {
        localStorage.setItem(process.env.REACT_APP_TOKEN, res.data.accessToken);
        localStorage.setItem(
          process.env.REACT_APP_PROJECT_NAME,
          JSON.stringify(res.data.user)
        );

        dispatch(authType("jwt"));
        dispatch(signIn(res.data.user));
        window.location.assign("/");
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Container>
        <div className="shadow rounded-3">
          <Row>
            <div className="col-md-6 " style={{ backgroundColor: grey[50] }}>
              <img src={adminAvatar} className="img-fluid" alt="logo" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="col-md-6 ms-2">
                <div className="mb-4">
                  <Typography variant="h4" fontWeight={700}>
                    Admin Login
                  </Typography>
                </div>
                <div>
                  <form onSubmit={Login}>
                    <TextInputComponent
                      label="Email"
                      name="email"
                      handleChange={handleChange}
                    />
                    <TextInputComponent
                      label="Password"
                      type={"password"}
                      name="password"
                      handleChange={handleChange}
                    />
                    <PrimaryButton
                      label={"login"}
                      fullWidth
                      type="submit"
                      loading={loading}
                    />
                  </form>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}
