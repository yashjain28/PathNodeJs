function TestPathNodeJs(req, resp) {
  const path = PathNodeJs();
  
  const resolvedPath = path.resolve('/foo/bar', './baz'); // output: /foo/bar/baz
  log(resolvedPath);

  const parsedpathObj = path.parse('/welcome/to/clearblade.js'); // output: {"root":"/","dir":"/welcome/to","base":"clearblade.js","ext":".js","name":"clearblade"}
  log(parsedpathObj);

  resp.success('Success');
}
