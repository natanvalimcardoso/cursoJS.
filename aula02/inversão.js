<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Exercício</title>
    <script>
      function inverter() {
        var nome = document.getElementById("nome").value;
        var nomeInvertido = '';
        for (var i = nome.length - 1; i >= 0; i--) {
          nomeInvertido += nome[i];
        }
        return nomeInvertido;
      }
    </script>
  </head>
  <body>
    <h1>Exercício 12</h1>
    <label for="nome">Informe um nome qualquer: </label>
    <input id="nome" type="text" maxlength=100 minlength=2><br>    
    <button onclick="alert(inverter())">Retrevni (Inverter)</button>
  </body>
</html>
