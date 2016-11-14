# hapi-mailgun
Simple Hapi Plugin for [Mailgun](http://www.mailgun.com).

## Installation

`npm install hapi-mailgun`

## Usage overview

This plugin is based on [mailgun-js](https://github.com/1lobby/mailgun-js) and is just a simple wrapper plugin for sending raw text and HTML emails.

Please see [Mailgun Documentation](https://documentation.mailgun.com) for full Mailgun API reference.

The mailgun configuration should be passed at the plugin registration as option parameters with the following format:

```json
{ "apiKey": "key-XXXXXXXXXXXXXXXXXXXXXXX", "domain": "mydomain.mailgun.org" }
```

### Example usage

```js
server.plugins['hapi-mailgun'].sendHTMLEmail(
  'John Doe <john@doe.com>',  // from
  'john@doe.com',             // to
  'Hello',                    // subject
  'Test email text',          // body
  '<b>Test email text</b>'    // HTML content
);
```
