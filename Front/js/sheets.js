/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
async function getTurnos() {
    let turnos;
    let response;
    try {
      // Fetch first 10 files
      response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1K24nLbfVkU_vFfnZuhDpkxXC1AkhxwwuTrllYqAdjqQ',
        range: 'UserLoginAdmin!A:K',
  
      });
    } catch (err) {
      console.error(err);
      // document.getElementById('content').innerText = err.message;
      return;
    }
    const range = response.result;
    if (!range || !range.values || range.values.length == 0) {
      console.warn("no se encontraron valores");
      //document.getElementById('content').innerText = 'No values found.';
      return;
    }
    console.log(range.values);
    // Flatten to string to display
    
  

    turnos = [];
    range.values.forEach((fila) => {
        //if(isNaN(parseInt(fila[0])) || fila[4] !== undefined) return;
        const nuevoTurno = {
            id:         fila[0],
            name:       fila[1],
            email:      fila[2],
            role:       fila[3],
            admin:      fila[4],
            password:   fila[5],
            lastname:   fila[6],
            staff:      fila[7],
            purchaseHistoryId:     fila[8],
            purchaseHistorySale:   fila[9],
            purchaseHistoryDate:   fila[10],
       };
       turnos.push(nuevoTurno);
       console.log("fila =" + fila)
    });

    console.log("console.log(turnos);")
    console.log(turnos);

    const output = range.values.reduce(
        (str, row) => `${str}${row[0]}, ${row[1]}, ${row[2]}, ${row[3]}, ${row[4]}\n`,
        'id,	name,	email,	role,	admin:\n');
        //'Name, LoL:\n');
    document.getElementById('content').innerText = output;
    
  }



