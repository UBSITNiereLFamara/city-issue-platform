const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb://20246896_db_user:Alyzter012345@ac-a6axmht-shard-00-00.wobahvn.mongodb.net:27017,ac-a6axmht-shard-00-01.wobahvn.mongodb.net:27017,ac-a6axmht-shard-00-02.wobahvn.mongodb.net:27017/cityIssueDB?ssl=true&replicaSet=atlas-1eveh8-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

const issueSchema = new mongoose.Schema({
  issueType: String,
  location: String,
  description: String,
  status: {
    type: String,
    default: "Pending",
  },
});

const Issue = mongoose.model("Issue", issueSchema);

app.post("/issues", async (req, res) => {
  const issue = await Issue.create(req.body);
  res.json(issue);
});

app.get("/issues", async (req, res) => {
  const issues = await Issue.find();
  res.json(issues);
});

app.get("/issues/:id", async (req, res) => {
  const issue = await Issue.findById(req.params.id);
  res.json(issue);
});

app.put("/issues/:id", async (req, res) => {
  const issue = await Issue.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(issue);
});

app.delete("/issues/:id", async (req, res) => {
  await Issue.findByIdAndDelete(req.params.id);
  res.json({ message: "Issue deleted successfully" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
