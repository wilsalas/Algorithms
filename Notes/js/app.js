let students = [
    {
        "name": "User1",
        "note": 1,
    },
    {
        "name": "User2",
        "note": 2,
    },
    {
        "name": "User3",
        "note": 3,
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
        ShowMaxNote: function () {
            students.reduce(function (max, x) {
                console.log(
                    (x.note > max) ? x.note : max
                )
            }, 0)
            // var lowest = Number.POSITIVE_INFINITY;
            // var highest = Number.NEGATIVE_INFINITY;
            // var tmp;
            // for (var i = students.length - 1; i >= 0; i--) {
            //     tmp = students[i].Cost;
            //     if (tmp < lowest) lowest = tmp;
            //     if (tmp > highest) highest = tmp;
            // }
            // console.log(highest, lowest);
        }
    }