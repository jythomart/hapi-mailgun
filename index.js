const mailcomposer = require('mailcomposer');

module.exports.register = (server, options, next) => {
  const mailgun = require('mailgun-js')(options);

  server.expose('sendTextEmail', (from, to, subject, text) => {
    const data = { from, to, subject, text };

    mailgun.messages().send(data, (sendError) => {
      if (sendError) {
        server.log('mailgun', sendError);
        return;
      }
    });
  });

  server.expose('sendHTMLEmail', (from, to, subject, text, html) => {
    const mail = mailcomposer({ from, to, subject, body: text, html });

    mail.build((mailBuildError, message) => {
      const dataToSend = {
        to,
        message: message.toString('ascii'),
      };

      mailgun.messages().sendMime(dataToSend, (sendError) => {
        if (sendError) {
          server.log('mailgun', sendError);
          return;
        }
      });
    });
  });

  return next();
};

module.exports.register.attributes = {
  pkg: require('./package.json'),
};
