(function(window){
    var hello="Hello";
    var helloperson={};
    helloperson.sayhello=function(names){
        console.log(hello+" "+names);
    }
    window.helloperson=helloperson;
})(window);
