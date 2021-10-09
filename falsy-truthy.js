// everything here is False
if (false) {} else { console.log('false is falsy'); };
if (null) {} else { console.log('null is falsy'); };
if (undefined) {} else { console.log('undefined is falsy'); };
if (0) {} else { console.log('0 is falsy'); };
if ((NaN)) {} else { console.log('NaN is falsy'); };
if (('')) {} else { console.log('An empty string with a single-quote is falsy'); };
if (("")) {} else { console.log('An empty string with a double-quote is falsy'); };

// Everything else is True

if (true)   { console.log('true is Truthy'); };
if ({})   { console.log('An empty Object is true'); };
if ([])   { console.log('An empty Array is true'); };

if('beau')  { console.log('a non-empty string is truthy'); };
if(new RegExp())  { console.log('a new instance of an object is truthy'); };

if(10)  { console.log('positive intergers are truthy'); };
if(-10)  { console.log('negative intergers are truthy'); };
if(1.23)  { console.log('positive floats are truthy'); };
if(-1.23)  { console.log('negative floats are truthy'); };
if(Infinity)  { console.log('positive infinity is truthy'); };
if(-Infinity)  { console.log('negative infinity is truthy'); };