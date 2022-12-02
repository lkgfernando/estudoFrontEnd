(function(age, weight, height) {
    const lastName = 'Rodrigue';
    function creatName(name) {
        return name + ' ' + lastName;
    } 

    function speakName() {
        console.log(creatName('Fernando'))
    }
    
    speakName()
    console.log(age, weight, height)
})(37, 110, 1.85);