// Write a function called superbowlWin
// superbowlWin receives 1 arg, an array of JS objects
// each object has 2 properties: year and result
// use find() to test each object to see if the result is "W" (a win)
// superbowlWin should return the year when the win occured
// if no win found it should return undefined

const superbowlWin = (arrayofobjects) => {

    let result = arrayofobjects.find(arrayofobjects => arrayofobjects.result === "W")
    return !!result ? result.year : undefined
}
