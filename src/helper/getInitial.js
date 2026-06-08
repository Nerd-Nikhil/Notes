export const getInitial = (name)=>{
    const word = name.split(" ");
    let initial = "";

    for (let i=0;i<Math.min(word.length,2);i++){
        initial+=word[i][0];
    }
    return initial.toUpperCase();
}
export const getFirst = (name)=>{
    const word = name.split(" ");
    return word[0];
}