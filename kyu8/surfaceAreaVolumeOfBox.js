/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
 */

function getSize(width, height, depth){
    return [((width * height) + (width * depth) + (depth * height)) * 2,
        width * height * depth]
}