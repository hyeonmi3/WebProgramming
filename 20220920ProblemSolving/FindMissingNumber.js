function solution(numbers) {
    let n = 0;
    for(let i = 1; i < 10; i++) { if(!numbers.includes(i)) n += i; }

    return n;
}