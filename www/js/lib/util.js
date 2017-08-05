/**
 *
 * @param {number} start count
 * @param {number} end count
 * @param {function} callback will call for every time
 * @return {*[]} array of callback's result
 */
export function countFromTo(start, end, callback) {
    let ii = start;
    const result = [];

    for (; ii <= end; ii += 1) {
        result[ii] = callback(ii);
    }

    return result;
}

/**
 *
 * @param {number} end count
 * @param {function} callback will call for every time
 * @return {*[]} array of callback's result
 */
export function countTo(end, callback) {
    return countFromTo(0, end, callback);
}
