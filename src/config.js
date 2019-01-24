const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://what2eat-graphql.herokuapp.com/";
//process.env.REACT_APP_API_BASE_URL  ||   "https://what2eat-server.herokuapp.com";

module.exports = API_BASE_URL;
