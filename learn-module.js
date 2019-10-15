// (1)名前空間の準備
var MYAPP = MYAPP || {
    util: {
        math: {}
    },
    data: {
        int: {}
    }
};

// (2)モジュールの定義
MYAPP.util.math = (function(){
    
    add = function(x, y) {
        return x + y;
    },
    minus = function(x, y) {
        return x > y ? x - y : y - x;
    },
    multiply = function(x, y) {
        return x * y;
    },
    divide = function(x, y) {
        return y !== 0 ? x / y : y / "NaN"; 
    }
    
    // public API
    return {
        add: add,
        minus: minus,
        multiply: multiply,
        divide: divide
    }
}());

// (3)モジュールを使う
MYAPP.util.math.add(4,5);
MYAPP.util.math.minus(4,5);
MYAPP.util.math.multiply(4,5);
MYAPP.util.math.divide(4,5);