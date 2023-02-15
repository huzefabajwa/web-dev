// var x=10
// {
//     console.log('original value', x)
//     x=20
//     console.log('changed inside the scope',x);
// }
const author = "huzefa";
const array = [1, 2, 3, 4, 5];
{
  console.log(array);
}
// function performComputation(){
//     return true, 0;
// }
const performComputation = () => {
  return { result: 42, error: NULL };
};

function setname(name){
    console.log(name);
}
setname(()=>{return "john"});
(
    sfu = () => {
        console.log('nameless');
    }
)();
(
    function sfu(){
        console.log('nameless');
    }
)