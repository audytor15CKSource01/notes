<!DOCTYPE html>
<html>
<head>
  <title>Simple JS Prompt</title>
</head>
<body>
  <script>
    // Prompt the user for their name
    let name = prompt("What's your name?");

    // Show a message
    alert("Hello, I'm from external site" + (name ? ", " + name : "") + "!");
  </script>
</body>
</html>
