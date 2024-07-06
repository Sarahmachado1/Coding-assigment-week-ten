let id = 0;

document.getElementById('add').addEventListener('click', () => {
    var table = document.getElementById('list');
    var row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('family-name').value;
    row.insertCell(1).innerHTML = document.getElementById('party-number').value;
    row.insertCell(2).innerHTML = document.getElementById('food').value;
    document.getElementById('family-name').value = '';
    document.getElementById('party-number').value = '';
    document.getElementById('food').value = '';
})