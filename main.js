const arrow = document.querySelector('.header__downArrow');
const btnArrow = document.querySelector('.arrow');
const tableRef = document.getElementById('my-table');
const btnDelete = document.querySelector('.table__buttons');
const btnGenerate = document.querySelector(".generate");
const sectionTable = document.querySelector(".table");

window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        arrow.classList.add('show');
    } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
        arrow.classList.remove('show');
    }
}


btnArrow.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})




function addRow(workType, maxValue) {
    btnGenerate.disabled = true;
    tableRef.style.display = "block";
    btnDelete.style.display = "block";
    sectionTable.style.display = "block";

    const newRow = tableRef.insertRow(-1);


    for (let i = 0; i < 8; i++) {
        newRow.insertCell(i)
    }


    newRow.cells[0].innerHTML = workType;
    newRow.cells[1].innerHTML = maxValue;
    newRow.cells[2].innerHTML = Math.floor(maxValue - (maxValue * 0.5));
    newRow.cells[3].innerHTML = Math.floor(maxValue - (maxValue * 0.4));
    newRow.cells[4].innerHTML = Math.floor(maxValue - (maxValue * 0.3));
    newRow.cells[5].innerHTML = Math.floor(maxValue - (maxValue * 0.2));
    newRow.cells[6].innerHTML = Math.floor(maxValue - (maxValue * 0.1));
    newRow.cells[7].innerHTML = maxValue;



}

function handleAddRow() {



    const chest = document.getElementById('inputChest').value;
    const maxChest = document.getElementById('controlChest').value;
    const chest2 = document.getElementById('inputChest2').value;
    const maxChest2 = document.getElementById('controlChest2').value;

    const back = document.getElementById('inputBack').value;
    const maxBack = document.getElementById('controlBack').value;
    const back2 = document.getElementById('inputBack2').value;
    const maxBack2 = document.getElementById('controlBack2').value;

    const leg = document.getElementById('inputLeg').value;
    const maxLeg = document.getElementById('controlLeg').value;
    const leg2 = document.getElementById('inputLeg2').value;
    const maxLeg2 = document.getElementById('controlLeg2').value;

    const shoulder = document.getElementById('inputShoulder').value;
    const maxShoulder = document.getElementById('controlShoulder').value;
    const shoulder2 = document.getElementById('inputShoulder2').value;
    const maxShoulder2 = document.getElementById('controlShoulder2').value;

    const arm = document.getElementById('inputArm').value;
    const maxArm = document.getElementById('controlArm').value;
    const arm2 = document.getElementById('inputArm2').value;
    const maxArm2 = document.getElementById('controlArm2').value;


    if (maxChest && maxChest2 && maxBack && maxBack2 && maxLeg && maxLeg2 && maxShoulder && maxShoulder2 && maxArm && maxArm2) {
        addRow(chest, maxChest);
        addRow(chest2, maxChest2);
        addRow(back, maxBack);
        addRow(back2, maxBack2);
        addRow(leg, maxLeg);
        addRow(leg2, maxLeg2);
        addRow(shoulder, maxShoulder);
        addRow(shoulder2, maxShoulder2);
        addRow(arm, maxArm);
        addRow(arm2, maxArm2);
    } else {
        alert("Wypełnij wszystkie wymagane pola.")
    }
}


function deleteTable() {
    let tds = document.querySelectorAll('td');
    tds.forEach((td) => {
        td.remove();
    })
    tableRef.style.display = "none";
    btnDelete.style.display = "none";
    btnGenerate.disabled = false;
    sectionTable.style.display = "none";
}



var myApp = new function () {
    this.printTable = function () {
        const tab = document.getElementById('my-table');

        let style = "<style>";
        style = style + "table {width: 100%;font: 17px Calibri;}";
        style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style = style + "padding: 4px 5px;text-align: center;}";
        style = style + "td:nth-of-type(1){color: red;}"
        style = style + "</style>";

        const win = window.open('', '', 'height=700,width=700');
        win.document.write(style); //  add the style.
        win.document.write(tab.outerHTML);
        win.document.close();
        win.print();
    }
}

function exportTableToExcel(tableID, filename = '') {
    let downloadLink;
    let dataType = 'application/vnd.ms-excel; charset=UTF-8;';
    let tableSelect = document.getElementById("my-table");
    let tableHTML = "\uFEFF" + tableSelect.outerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename ? filename + '.xls' : 'treningHST.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    // Create a link to the file
    downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

    // Setting the file name
    downloadLink.download = filename;

    //triggering the function
    downloadLink.click();

}


// JQ FUNCTION----------------------------------------------------------------------------
$('#generator').on('click', function () {
    const goToSection = "[data-key=" + $(this).attr('id') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 1000)
})



$('.about a').on('click', function () {
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 1000)
})