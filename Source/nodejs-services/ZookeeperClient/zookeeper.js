var ZooKeeper = require ("zookeeper");
var zk = new ZooKeeper({
  connect: "localhost:2181"
 ,timeout: 200000
 ,debug_level: ZooKeeper.ZOO_LOG_LEVEL_WARN
 ,host_order_deterministic: false
});

let initialPath = "/node.js1";
let serviceData = {'name': 'subscriptions', 'url' : 'http://myhost:80', 'endpoint': '/subs'};
zk.connect(function (err) {
    if(err) throw err;
    console.log ("zk session established, id=%s", zk.client_id);
    zk.a_create (initialPath, JSON.stringify(serviceData), ZooKeeper.ZOO_SEQUENCE | ZooKeeper.ZOO_EPHEMERAL, function (rc, error, path)  {
        if (rc != 0) {
            console.log ("zk node create result: %d, error: '%s', path=%s", rc, error, path);
        } else {
            console.log ("created zk node %s", path);
        // list children
    // zk.a_get_children(path, false, function(rc3, error3, children) {
    //     if (rc3 != 0) {
    //         console.log("ERROR zk node1.a_get_children: %d, error: '%s'", rc3, error3);
    //     } else if (children == null || children.length != 1) {
    //         console.log("ERROR zk node1.a_get_children: unexpected child state %s", JSON.stringify(children));
    //     } else {
    //         console.log("zk node1.a_get_children SUCCESS");
    //     }
    // });
        zk.a_get(path, false, function(rc4, erro4, stat4, data4){
            if (rc4 != 0) {
                console.log ("failed getting node: %d, error: '%s', path=%s", rc4, error4, path);
            } else {
                console.log ("fetched node %s", data4);            
            }
        });
        }
    });



    // process.nextTick(function () {
    //     zk.close ();
    // });
});