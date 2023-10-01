const today = new Date();

const date = today.toLocaleDateString('ja', {
    year:'numeric', 
    month:'long', 
    day:'numeric'
});

console.log(date);

