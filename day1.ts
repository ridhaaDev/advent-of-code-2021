import fs from 'fs/promises';

const variable: string = "hello ridhaa"

const getIncreases = async () => {
    const file = await fs.readFile('input.txt', { encoding: 'utf8' });
    let numLines = 0;
    let prevDepth = -1;

    for (let currVal of file.split("\n")) {
        const depth = Number(currVal)
        
        if (prevDepth == -1) { // first value
            prevDepth = depth;
            continue;
        }

        if (depth > prevDepth) { // increment
            numLines++;
        }

        prevDepth = depth; // update
    }
    
    return numLines;
}

const answer = getIncreases();
console.log(answer)