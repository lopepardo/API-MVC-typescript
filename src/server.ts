import app from "./app";

app.listen(app.get("port"), () => {
  console.log(
    "\n\x1b[36m%s\x1b[0m",
    "==============================================================="
  );
  console.log(
    "\x1b[32m%s\x1b[0m",
    `Server is running at http://localhost:${app.get("port")} in ${app.get(
      "env"
    )} mode!`
  );
  console.log("\x1b[32m%s\x1b[0m", "Press CTRL-C to stop");
  console.log(
    "\x1b[36m%s\x1b[0m",
    "===============================================================\n"
  );
});
