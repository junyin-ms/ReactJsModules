function shape1() {
    home();
    hideturtle();
    color("white");
    repeat(36, function() {
        repeat(4, function() {
            forward(100);
            right(90);
        });
        right(10);
    });
}

function shape2() {
    home();
    wrap(false);
    hideturtle();
    let colors = ['red', 'purple', 'blue', 'green', 'yellow', 'orange'];
    for (let x = 0; x < 320; x++) {
        color(colors[x % 6]);
        forward(x);
        left(59);
    }
}
