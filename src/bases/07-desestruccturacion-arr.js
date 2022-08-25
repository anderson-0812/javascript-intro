const characters = ['Goku', 'Vegeta', 'Trunks']


const [g,v,t, gothen ='Sin nombre '] = characters
const [ , ,trunks] = characters

console.log(g,v,t, gothen);
console.log(trunks);



const returnArray = () => {
    return ['ABC',123]
}

const [letter, number] = returnArray();

console.log(letter,number)