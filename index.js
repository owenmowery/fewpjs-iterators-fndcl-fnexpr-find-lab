function superbowlWin(arr) {
    let win = arr.find(obj => {
        return obj.result === 'W';
    });
    return win ? win.year : undefined;
}
