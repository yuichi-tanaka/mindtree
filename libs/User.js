var Graph = require('./Graph');
var g = new Graph();
var User = module.exports = function(){};
User.prototype.getUser = function(id){
  console.dir(g);
  g.query("match (n:User) where id(n) = {id} return n",{"id":id},function(e,data){
    e && console.error(e);
    console.dir(data[0].n.labels);
    console.dir(data[0].n.properties);
  });
};

new User().getUser(10);
