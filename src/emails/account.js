const mailgun = require("mailgun-js");
const DOMAIN = "sandboxdf64e3a78f6f4b85bb00ca1e9b56daaa.mailgun.org";
const mgAPIKey = process.env.MAILGUN_API_KEY;
const mg = mailgun({
  apiKey: mgAPIKey,
  domain: DOMAIN,
});

const sendWelcomeEmail = (email, name) => {
  mg.messages().send(
    {
      from: "Kyle Starrett <kylestarrett1@gmail.com>",
      to: email,
      subject: "Hello and Welcome...",
      text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    },
    function (error, body) {
      console.log(body);
    }
  );
};

const sendCancellationEmail = (email, name) => {
  mg.messages().send(
    {
      from: "Kyle Starrett <kylestarrett1@gmail.com>",
      to: email,
      subject: "Sorry to see you go :(",
      text: `...but get bent ${name}.`,
    },
    function (error, body) {
      console.log(body);
    }
  );
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
