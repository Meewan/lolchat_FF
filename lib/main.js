var pageMod = require("sdk/page-mod");
var self = require("sdk/self");


pageMod.PageMod({
  include: "*.landsoflords.fr",
  contentScriptFile: [self.data.url("jquery-1.10.2.min.js"), self.data.url("title.js")]
});