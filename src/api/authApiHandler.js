import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/api/auth",
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default {
  service,

  signupPlayer(playerInfo) {
    return service
      .post("/signup/player", playerInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signupClub(clubInfo) {
    return service
      .post("/signup/club", clubInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signinPlayer(player) {
    return service
      .post("/signin/player", player)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signinClub(club) {
    return service
      .post("/signin/club", club)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },
};