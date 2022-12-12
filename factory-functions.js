const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const computerHTMLMaker = (computerObject) => {
    const computerHTMLSection = `<section id= ${computerObject.id}>
	<h1>${computerObject.manufacturer} ${computerObject.make}</h1>
	<div> Model: ${computerObject.model} </div>
	<div> Memory: ${computerObject.specs.memory} </div>
	<div>Hard drive space: ${computerObject.specs.hardDrive} </div>
	<div>Processor speed: ${computerObject.specs.processor} </div>
</section>`
        return computerHTMLSection
}


const stringFromFunction = computerHTMLMaker(computer);
console.log(stringFromFunction)