// Code your solution in this file!

function distanceFromHqInBlocks(start) {
    const dist = 45;
    if (start < dist) {
        return (start + dist);
    } else {
        return (dist + start);
    }
}

function distanceFromHqInFeet(start) {
    return (parseInt(distanceFromHqInBlocks(start), 10) * 264);
}
function distanceTravelledInFeet(start, destination) {
    const block = 264;
    if (destination > start) {
        return (destination - start) * block;
    } else {
        return (start - destination) * block;
    }
}

function calculatesFarePrice(start, destination) {
    let dist = distanceTravelledInFeet(start, destination);
    if (dist <= 400) {
        return 0;
    } else if (dist <= 2000) {
        return (dist - 400) * 0.02;
    } else if (dist > 2000 && dist <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}