function lus(string) {
	let prev = null;
    let highestValueSoFar = 1;
    let count = 1;
    let map = {};
    
    for (let i=0; i<string.length ; i++) {
        let char = string[i]

        if (char === prev) {
            count++
            map[count++] = char
            if (highestValueSoFar < count) {
            	highestValueSoFar = count
            }
        } else { 
        	count = 1 
        }

        prev = char
    }
	console.log(map)
    return [map[highestValueSoFar], highestValueSoFar]
}