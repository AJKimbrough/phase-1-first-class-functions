function runFiveMiles() {
    console.log("Go for a five-mile run")
}

function liftWeights() {
    console.log("Pump Iron")
}

function swimFortyLaps() {
    console.log("Swim 40 laps")
}


/*function Monday() {
    exerciseRoutine(liftWeights)
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles()
    postRunActivity()
}

exerciseRoutine(() => console.log("Stretch! Work that core!"))


function Tuesday() {
    exerciseRoutine(swimFortyLaps)
}
*/

/*function morningRoutine(exercise) {
    let breakfast

    if(exercise === liftWeights) {
        breakfast = "protein bar"
    }
    else if(exercise === swimFortyLaps) {
        breakfast = "kale smoothie"
    }
    else {
        breakfast = "granola"
    }
    exerciseRoutine(exercise)

    return function () {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`)
    }
}

const afterExercise = morningRoutine(liftWeights)


afterExercise()




Monday()
Tuesday()

morningRoutine()
*/



function receivesAFunction(callback) {
    callback()
    return "HI"
}

function returnsANamedFunction() {
    return runFiveMiles
}

const f = function () {
    console.log("Hi")
}


function returnsAnAnonymousFunction() {
   
    return function () {
        console.log("Hi")
    }
}

returnsAnAnonymousFunction()