    var toggle = true;
    function changeimg() {
        if (toggle === false) {
            document.getElementById('sun').src = 'images/sun.png';
        }
        else {
            document.getElementById('sun').src = 'images/moon.png';
        }
        toggle = !toggle;
    }

    function changeback() {
        if (toggle === false) {
            document.getElementById('back').style.backgroundColor = 'lightblue';
        }
        else {
            document.getElementById('back').style.backgroundColor = 'midnightblue';
        }
        toggle = !toggle;
    }

    function changetree() {
        if (toggle === false) {
            document.getElementById('tree').src = 'images/tree.png';
            document.getElementById('tree').style.width = '390px';            
        }
        else {
            document.getElementById('tree').src = 'images/spookytree.png';
            document.getElementById('tree').style.width = '470px';
            
        }
        toggle = !toggle;
    }

    function changegrass() {
        if (toggle === false) {
            document.getElementById('grass').style.backgroundColor = '#6CB610';
        }
        else {
            document.getElementById('grass').style.backgroundColor = '#172802';
        }
        toggle = !toggle;
    }

    function changedog() {
        if (toggle === false) {
            document.getElementById('dog').src = 'images/dog.png';
        }
        else {
            document.getElementById('dog').src = 'images/werewolf.png';
        }
        toggle = !toggle;
    }

    function changecloud() {
        if (toggle === false) {
            document.getElementById('cloud').src = 'images/cloud.png';
        }
        else {
            document.getElementById('cloud').src = 'images/spookycloud.png';
        }
        toggle = !toggle;
    }

    function changebench() {
        if (toggle === false) {
            document.getElementById('bench').src = 'images/bench.png';
        }
        else {
            document.getElementById('bench').src = 'images/grave.png';
        }
        toggle = !toggle;
    }

    function changebush() {
        if (toggle === false) {
            document.getElementById('bush').src = 'images/bush.png';
        }
        else {
            document.getElementById('bush').src = 'images/pump.png';
        }
        toggle = !toggle;
    }

    function changeplane() {
        if (toggle === false) {
            document.getElementById('plane').src = 'images/plane.png';
        }
        else {
            document.getElementById('plane').src = 'images/witch.png';
        }
        toggle = !toggle;
    }