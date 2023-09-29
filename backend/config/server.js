module.exports = ({ env }) => ({
  host: env("HOST", "https://dental-braces.onrender.com"),
  port: env.int("PORT", 1337),
  app: {
    keys: [
      "ow0LpAHL5bKQGB4T6gBgwg",
      "ow0LpAHL5bKQGB4T6gBgwg1212",
      "dhflsfow0LpAHL5bKQGB4T6gBgwg",
    ],
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
