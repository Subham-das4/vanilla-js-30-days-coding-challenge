let inputArray = document.querySelectorAll('.controls input');
console.log(inputArray)

inputArray.forEach(element => {
    element.addEventListener('input', (event) => {
        let value = event.target.value
        let suffix = element.dataset.suffix? element.dataset.suffix:"" 
        
        document.documentElement.style.setProperty(`--${event.target.name}`, value + suffix)
    })
});