const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + '/static'));

app.get("/", (req, res) => {
	var data = {
		context: [
			{task:"feed cats"},
			{task:"apartment shop"},
			{task:"play RuneScape"},
			{task:"grocery shopping"},
			{task:"make bed"}
		]
	}
  res.render("index", data);
});

app.get("/about", (req, res) => {
	res.render("about", { title: "Hey", message: "Hello there!" });
});

app.get("/cssPractice", (req, res) => {
	var data = {
		context2: [
			{task:"A Message From Warren E. Buffett",},
			{task: "Annual & Interim Reports",
			 	subtask: "Updated November 7, 2020"},
			{task:"Link to SEC Filings"},
			{task:"Special Letters From Warren & Charlie RE:Past, Present and Future"},
			{task:"Links to Berkshire Subsidiary Companies"},
			{task:"Corporate Governance"},
			{task:"Sustainability"},
			{task:"Letters from Warren E. Buffett Regarding Pledges to Make Gifts of Berkshire Stock"},
			{task:"News Releases"},
			{task:"Annual Meeting Information"},
			{task:"Proxy Statement - 2020"},
			{task:"Warren Buffett's Letters to Berkshire Shareholders"},
			{task:"Charlie Munger's Letters to Wesco Shareholders"},
			{task:"Celebrating 50 Years of a Profitable Partnership",
				subtask: "(A commemorative book first sold at the 2015 Annual Meeting and now for sale on eBay.)"},
			{task:"Comparative Rights and Relative Prices of Class A and B Stock"},
			{task:"Berkshire Activewear"}
		]
	}
	res.render("cssPractice", data);
});

app.get("/other", (req, res) => {
	res.render("other");
});

app.listen(process.env.port || 3000);

console.log(`Server running at http://127.0.0.1:3000/`);