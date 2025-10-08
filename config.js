module.exports = {
  Admins: ["645753735225802752"],
  ExpressServer: true,
  DefaultPrefix: "%",
  Port: 3000,
  Website: "https://Discord-MusicBot.xbotx.repl.co",
  SupportServer: "https://discord.gg/5uzB8bN6NV",
  Token: process.env.Token,
  ClientID: "1053270717686362112",
  ClientSecret: process.env.Discord_ClientSecret,
  Scopes: ["identify", "guilds", "applications.commands"],
  CallbackURL: "/api/callback",
  "24/7": false,
  CookieSecret: "Pikachu is cute",
  IconURL:
    "https://images-ext-2.discordapp.net/external/UvpFsqryt3iULiknKxPrJOb765orl10kqUnqIAbGZTY/https/raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif",
  Permissions: 2205280576,
  Lavalink: {
    id: "Main",
    host: "lava-all.ajieblogs.eu.org",
    port: 80,
    pass: "https://dsc.gg/ajidevserver",
    secure: true,
  },
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "bf5ee2a72bae40ffadc71a47280e5ff9",
    ClientSecret: process.env.Spotify_ClientSecret || "053469ffeb3844079fab734ebf3090c2",
  },
};
