/**
 * Created by tim on 7/28/2015.
 */
console.clear();
var _ = R;
var P = PointFree;
var map = P.fmap;
var compose = P.compose;
var Maybe = P.Maybe;
var Identity = P.Id;

// Exercise 1
// ==========
// Use _.add(x,y) and map(f,x) to make a function that increments
// a value inside a functor
console.log("--------Start exercise 1--------")

var ex1 = map(_.add(1));

assertDeepEqual(Identity(3), ex1(Identity(2)))
console.log("exercise 1...ok!")

// Exercise 2
// ==========
// Use _.head to get the first element of the list
var xs = Identity(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
console.log("--------Start exercise 2--------")

var thing = map(function (x) {
    return x.reverse();
}, Identity([1,2,3,4,5]));

//var ex2 = xs.map(_.head);
var inc = _.add(1);
var test = map(inc, [4]);
//var ex2 = map(map(_.head), Identity(['do', 'ray', 'so']));
var ex4 = map(map(inc), Identity([4]));
var ex2 = map(_.head);  //function(functr){}
var result = map(_.head, xs) //Identity('do')
assertDeepEqual(Identity('do'), ex2(xs))
console.log("exercise 2...ok!")

// Exercise 3
// ==========
// Use safeGet and _.head to find the first initial of the user
var safeGet = _.curry(function(x,o){ return Maybe(o[x]) })
var user = {id: 2, name: "Albert"}
console.log("--------Start exercise 3--------")

var ex3 = compose(map(_.head), safeGet('name'));


assertDeepEqual(Maybe('A'), ex3(user))
console.log("exercise 3...ok!")

// Exercise 4
// ==========
// Use Maybe to rewrite ex4 without an if statement
console.log("--------Start exercise 4--------")

var ex4 = compose(map(parseInt), Maybe);

assertDeepEqual(Maybe(4), ex4("4"))
console.log("exercise 4...ok!")

// TEST HELPERS
// =====================
function inspectIt(x){
    return (x.inspect && x.inspect()) || (x.toString && x.toString()) || x.valueOf(); //hacky for teachy.
}

function assertEqual(x,y){
    if(x !== y){ throw("expected "+x+" to equal "+y); }
}
function assertDeepEqual(x,y){
    if(x.val !== y.val) throw("expected "+inspectIt(x)+" to equal "+inspectIt(y));
}