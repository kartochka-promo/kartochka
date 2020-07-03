export const globalConsts={
  colors: {
    mainGradient: "linear-gradient(#FCCC8B, #8EBBC7)",
    blue: "#8EBBC7",
    orange: "#FFB24E"
  },
  validator:{
    minPassLength: 8,
    minNameLength: 2,
    emailRegexp: "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])",
    passwordRegexp: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
    nameRegexp: "^[_A-zА-я0-9]*((-|\\s)*[_A-zА-я0-9]){2,}",

  },
  server:{
    PATH: 'http://localhost:8080',
    PATH_STAFF:'http://localhost:8084',
    PATH_SURVEY:'http://localhost:8086',
    CURRENT_PATH: 'http://localhost:3000'
    // CURRENT_PATH: 'https://www.s-soboy.com',
    // PATH: 'https://s-soboy.com',
    // PATH_STAFF:'https://s-soboy.com',
    // PATH_SURVEY:'https://s-soboy.com',
  }
};
