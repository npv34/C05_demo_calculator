function changeSrcImage() {

    let srcImage;
    let valueDataId;

    let nameDataID = document.getElementById('image-1').getAttribute('data-id');
    if (nameDataID === 'monkey') {
        srcImage = 'images/panda_swap_part1x1.jpeg';
        valueDataId = 'panda';
    } else {
        srcImage = 'images/monkey_part1x1.jpeg'
        valueDataId = 'monkey'
    }

    document.getElementById('image-1').setAttribute('src', srcImage);
    document.getElementById('image-1').setAttribute('data-id',valueDataId)
    checkWin()
}


function changeSrcImage2() {

    let srcImage;
    let valueDataId;

    let nameDataID = document.getElementById('image-2').getAttribute('data-id');
    if (nameDataID === 'monkey') {
        srcImage = 'images/panda_swap_part2x1.jpeg';
        valueDataId = 'panda';
    } else {
        srcImage = 'images/monkey_part2x1.jpeg'
        valueDataId = 'monkey'
    }

    document.getElementById('image-2').src = srcImage;
    document.getElementById('image-2').setAttribute('data-id',valueDataId)
    checkWin()
}

function checkWin() {
    let nameDataID1 = document.getElementById('image-1').getAttribute('data-id');
    let nameDataID2 = document.getElementById('image-2').getAttribute('data-id');

    if (nameDataID1 === nameDataID2) {
        document.getElementById('image-1').style.border = '2px solid red';
        document.getElementById('image-2').style.border = '2px solid red';
    } else {
        document.getElementById('image-1').style.border = '';
        document.getElementById('image-2').style.border = '';
    }
}
