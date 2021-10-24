
export default function RundomSeed(previous = 1) {
    function next(min = 60, max = 100) {
        previous = (previous + 123) * 1680716807 % 2147483647;
        previous = previous > 0
            ? previous
            : -previous;
        return previous % (max + 1 - min) + min;
    }
    return next;
}