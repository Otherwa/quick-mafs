class MensurationEquations {
    // Circle
    circleArea(radius) {
        return Math.PI * Math.pow(radius, 2);
    }

    circleCircumference(radius) {
        return 2 * Math.PI * radius;
    }

    // Rectangle
    rectangleArea(length, width) {
        return length * width;
    }

    rectanglePerimeter(length, width) {
        return 2 * (length + width);
    }

    // Square
    squareArea(side) {
        return Math.pow(side, 2);
    }

    squarePerimeter(side) {
        return 4 * side;
    }

    // Triangle
    triangleArea(base, height) {
        return 0.5 * base * height;
    }

    trianglePerimeter(side1, side2, side3) {
        return side1 + side2 + side3;
    }

    // Sphere
    sphereVolume(radius) {
        return (4 / 3) * Math.PI * Math.pow(radius, 3);
    }

    sphereSurfaceArea(radius) {
        return 4 * Math.PI * Math.pow(radius, 2);
    }

    // Cube
    cubeVolume(side) {
        return Math.pow(side, 3);
    }

    cubeSurfaceArea(side) {
        return 6 * Math.pow(side, 2);
    }

    // Cylinder
    cylinderVolume(radius, height) {
        return Math.PI * Math.pow(radius, 2) * height;
    }

    cylinderSurfaceArea(radius, height) {
        return 2 * Math.PI * radius * height + 2 * Math.PI * Math.pow(radius, 2);
    }

    // Cone
    coneVolume(radius, height) {
        return (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    }

    coneSurfaceArea(radius, height) {
        const slantHeight = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
        return Math.PI * radius * slantHeight + Math.PI * Math.pow(radius, 2);
    }


}

module.exports = MensurationEquations;