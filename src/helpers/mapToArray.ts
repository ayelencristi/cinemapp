export const mapToArray = (object: any) => {
    const array = [];

    for (const elem in object) {
        array.push({
            ...object[elem],
            idDB: elem,
        })
    }

    return array;
}

export const mapToArrayFB = (object: any) => {
    const array = [];

    for (const elem in object) {
        array.push({
            idFB: elem,
            ...object[elem],
        });
    }

    return array;
};