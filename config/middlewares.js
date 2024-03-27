module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  // {
  //   name: "strapi::cors",
  //   config: {
  //     enabled: true,
  //     headers: ["Content-Type", "Authorization", "X-Frame-Options", "Accept"],
  //     origin: ["http://localhost:3000"], // Add your front-end's origin here
  //   },
  // },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
