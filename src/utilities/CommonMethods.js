export const convertDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
}

export const comaSeparateNames = (arr) => {
    return arr.length ? arr.map((name, i) => { 
            return name + (i < arr?.length - 1 ? ' ,' : '') 
        })
        : [];
};