class Quadratic {
    quadraticFormula(a, b, c) {
        const discriminant = b ** 2 - 4 * a * c;
        if (discriminant < 0) {
            return [];
        } else if (discriminant === 0) {
            return [-b / (2 * a)];
        } else {
            const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return [root1, root2];
        }
    }

    absoluteValue(x) {
        if (x < 0) {
            return -x;
        } else {
            return x;
        }
    }

    factorial(n) {
        if (n < 0) {
            return NaN;
        } else if (n === 0) {
            return 1;
        } else {
            let result = 1;
            for (let i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        }
    }

    gcd(a, b) {
        if (b === 0) {
            return a;
        } else {
            return this.gcd(b, a % b);
        }
    }

    lcm(a, b) {
        return (a * b) / this.gcd(a, b);
    }

    permutation(n, r) {
        if (n < 0 || r < 0 || r > n) {
            return NaN;
        } else {
            return this.factorial(n) / this.factorial(n - r);
        }
    }

    combination(n, r) {
        if (n < 0 || r < 0 || r > n) {
            return NaN;
        } else {
            return this.permutation(n, r) / this.factorial(r);
        }
    }

    logarithm(base, x) {
        if (base <= 0 || x <= 0) {
            return NaN;
        } else {
            return Math.log(x) / Math.log(base);
        }
    }

    midpoint(x1, y1, x2, y2) {
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        return [midX, midY];
    }

    distance(x1, y1, x2, y2) {
        const deltaX = x2 - x1;
        const deltaY = y2 - y1;
        return Math.sqrt(deltaX ** 2 + deltaY ** 2);
    }

}
module.exports = Quadratic;
