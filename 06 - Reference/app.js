 var a = 10;
 var b = a;

 console.log("a: ", a);
 console.log("b: ", b);

 a = 20;

 console.log("a: ", a);
 console.log("b: ", b);

 var c = {
     name: "John"
 }
 var d = c;

 console.log("c: ", c);
 console.log("d: ", d);

 c.name = "Marie";

 console.log("c: ", c);
 console.log("d: ", d);

 d.name = "Peter";

 console.log("c: ", c);
 console.log("d: ", d);