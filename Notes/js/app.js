let students = [
    {
        "name": "User1",
        "note": 1.1,
    },
    {
        "name": "User2",
        "note": 2,
    },
    {
        "name": "User3",
        "note": 3.5,
    }
],
    name = document.getElementById("name"),
    note = document.getElementById("note"),
    StudentsNote = {
        AddNewNote: function () {
            if (name.value != "" && note.value != "") {
                students.push({
                    name: name.value,
                    note: parseFloat(note.value)
                })
                alert("New student note add!");
                name.value = "";
                note.value = "";
                this.ShowData();
            } else if (!isNaN(parseFloat(note.value)) && isFinite(note.value)) {
                alert("Field not numeric note");
            } else {
                alert("Please enter fields value");
            }
        },
        ShowData: function () {
            let listStudent = [];
            students.forEach(data => {
                listStudent += `
                <tr>
                <td>${data.name}</td>
                <td>${data.note}</td>
                </tr>`;
            })
            document.getElementById("tbody").innerHTML = listStudent;
        },
        ShowMaxMinNote: function (isMaxNote) {
            let notes = Object.keys(students).map(key => students[key].note);
            alert(isMaxNote ? "Maximum note: " + Math.max(...notes) : "Minimum note: " + Math.min(...notes))
        },
        ShowAverage: function () {
            let sumTotalNotes = Object.keys(students).reduce((next, key) => {
                return next + students[key].note;
            }, 0);
            alert(`
                Total sum of notes:  ${sumTotalNotes} 

                Total amount of notes:  ${students.length}

                Average of notes (${sumTotalNotes} / ${students.length}) :  ${Math.round((sumTotalNotes / students.length) * 100) / 100}
            `)
        }
    }