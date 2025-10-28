function mostrarOpciones() {
      const tipo = document.getElementById("tipoComida").value;
      const menuDiv = document.getElementById("menuOpciones");
      const horariosDiv = document.getElementById("horarios");

      menuDiv.innerHTML = "";
      horariosDiv.innerHTML = "";

      if (tipo === "desayuno") {
        menuDiv.innerHTML = `
          <label>Menú de desayuno:</label><br>
          <select name="menu" required>
            <option value="">Selecciona...</option>
            <option>HUEVOS CON SALCHICHA</option>
            <option>OMELETTE JAMÓN Y QUESO</option>
            <option>OMELETTE VEGETARIANO</option>
          </select>
        `;
        horariosDiv.innerHTML = `
          <label>Horario:</label><br>
          <input type="radio" name="hora" value="6-7" required> 6 - 7 am<br>
          <input type="radio" name="hora" value="7-8"> 7 - 8 am<br>
          <input type="radio" name="hora" value="8-9"> 8 - 9 am<br>
        `;
      } 
      else if (tipo === "almuerzo") {
        menuDiv.innerHTML = `
          <label>Menú de almuerzo:</label><br>
          <select name="menu" required>
            <option value="">Selecciona...</option>
            <option>POLLO FRITO</option>
            <option>CARNE MOLIDA</option>
            <option>FAJITAS DE CARNE</option>
            <option>FRIJOLES VEGETARIANOS</option>
          </select>
        `;
        horariosDiv.innerHTML = `
          <label>Horario:</label><br>
          <input type="radio" name="hora" value="11-12" required> 11 - 12 m<br>
          <input type="radio" name="hora" value="12-1"> 12 - 1 pm<br>
          <input type="radio" name="hora" value="1-2"> 1 - 2 pm<br>
        `;
      } 
      else if (tipo === "cena") {
        menuDiv.innerHTML = `
          <label>Menú de cena:</label><br>
          <select name="menu" required>
            <option value="">Selecciona...</option>
            <option>HUEVOS PERICOS</option>
            <option>SÁNDWICH JAMÓN Y QUESO + VEGETALES</option>
            <option>HUEVOS PERICOS VEGETARIANOS</option>
          </select>
        `;
        horariosDiv.innerHTML = `
          <label>Horario:</label><br>
          <input type="radio" name="hora" value="6-7" required> 6 - 7 pm<br>
          <input type="radio" name="hora" value="7-8"> 7 - 8 pm<br>
          <input type="radio" name="hora" value="8-9"> 8 - 9 pm<br>
        `;
      }
    }

    document.getElementById("registrationForm").addEventListener("submit", function(event) {
      if (!this.checkValidity()) {
        event.preventDefault();
        alert("Por favor, rellena todos los datos antes de enviar.");
      } 
    });