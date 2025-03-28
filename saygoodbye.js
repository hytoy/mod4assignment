(function(window){
    var goodbye="Goodbye";
    var goodbyeperson={};
    goodbyeperson.saygoodbye=function(names){
        console.log(goodbye+" "+names);
    }
    window.goodbyeperson=goodbyeperson;
})(window);