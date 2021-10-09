var counter = (function () {
    
    // private stuff
    let count = 0;


    function print(message){
        console.log(message + '---' + count);
    };

    // return an object
    return {
        // value: count,
        get: () => { return count; },

        set: value => { count = value; },

        increment: function () {
            count += 1;
            print('After Increment: ');
        },

        reset: function(){
            print('Before reset: ');
            count = 0;
            print('After reset: ');
        }
    }
})();

//console.log(counter.count);

counter.increment();
counter.increment();
counter.increment();
counter.increment();

// console.log(counter.value);  // accidentally created a closure

counter.set(7);
console.log(counter.get());

counter.reset();