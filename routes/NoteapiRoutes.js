const fs = require("fs");
const { v4: noteuuid } = require("uuid");

module.exports = function (app) {
  app.get("/api/notes", (request, response) => {
    let notedata = JSON.parse(fs.readFileSync("./db/db_notes.json", "utf8"));
    console.log("\nGET request: " + JSON.stringify(notedata));
    response.json(notedata);
  });

  app.post("/api/notes", (request, response) => {
    const newNote = request.body;
    console.log("\n\nExecuting a POST - New Note : " + JSON.stringify(newNote));
    newNote.id = noteuuid();
    let notedata = JSON.parse(fs.readFileSync("./db/db_notes.json", "utf8"));
    notedata.push(newNote);
    fs.writeFileSync("./db/db_notes.json", JSON.stringify(notedata));
    console.log("\nSuccessfully new note  addedto 'db_notes.json' file!");
    response.json(notedata);
  });
  app.delete("/api/notes/:id", (request, response) => {
    let noteId = request.params.id.toString();
    console.log(`\n\nDELETE noteId: ${noteId}`);
    let notedata = JSON.parse(fs.readFileSync("./db/db_notes.json", "utf8"));
    const newnotedata = notedata.filter(
      (note) => note.id.toString() !== noteId
    );
    fs.writeFileSync("./db/db_notes.json", JSON.stringify(newnotedata));
    console.log(`\nSuccessfully deleted id : ${noteId}`);
    se;
    response.json(newnotedata);
  });
};
