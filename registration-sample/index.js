document.getElementById('singlePet').addEventListener('change', function() {
    document.getElementById('singlePetInfo').style.display = this.checked ? 'block' : 'none';
    if (this.checked) {
        document.getElementById('multiplePet').checked = false;
        document.getElementById('multiplePetInfo').style.display = 'none';
    }
});


document.getElementById('multiplePet').addEventListener('change', function() {
    document.getElementById('multiplePetInfo').style.display = this.checked ? 'block' : 'none';
    if (this.checked) {
        document.getElementById('singlePet').checked = false;
        document.getElementById('singlePetInfo').style.display = 'none';
    }
});


let petCount = 1;
function addPet() {
    petCount++;
    let newPetDiv = document.createElement('div');
    newPetDiv.id = 'pet' + petCount;
    newPetDiv.innerHTML = `
        <input type="text" placeholder="Photo">
        <input type="text" placeholder="Name">
        <input type="text" placeholder="Breed">
        <input type="text" placeholder="Age">
        <input type="date" placeholder="Birthday">
    `;
    document.getElementById('multiplePetInfo').insertBefore(newPetDiv, document.getElementById('addPet'));
}
