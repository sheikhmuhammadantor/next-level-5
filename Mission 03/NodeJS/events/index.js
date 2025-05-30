const School = require("./school");

const school = new School();

school.on("bellRing", ({ period, text }) => {
  console.log(`We Need To Run Because ${period} ${text}`);
});

school.startPeriod();
