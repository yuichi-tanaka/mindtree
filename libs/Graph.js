var r = require('neo4j');
var db = new r.GraphDatabase({url:"http://neo4j:Kuro09201015@localhost:7474"});

var Graph = module.exports = function(){};
Graph.prototype.query = function(q,p,fn){
  db.cypher({query:q,params:p},fn);
};

