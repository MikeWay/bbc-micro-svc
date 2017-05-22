var ZooKeeper = require("zookeeper");
var zk = new ZooKeeper({
    connect: "localhost:2181"
    , timeout: 200000
    , debug_level: ZooKeeper.ZOO_LOG_LEVEL_WARN
    , host_order_deterministic: false
});

let initialPath = "/MemberService";
let service1Data = { 'name': 'subscriptions', 'url': 'http://myhost:80', 'endpoint': '/subs' };
let service2Data = { 'name': 'subscriptions', 'url': 'http://myhost2:80', 'endpoint': '/subs' };

zk.connect(function (err) {
    if (err) throw err;

    createKey(initialPath, "").then((path) => {
        createKey(path + "/service1", service1Data)
            .then(createKey(path + "/service2", service2Data))
            .then(getChildren(path));
    });


});



function createKey(path, data) {
    let prom = new Promise((resolve, reject) => {
        let res = zk.a_create(path, JSON.stringify(data), ZooKeeper.ZOO_SEQUENCE, (rc, error, path) => {
            if (rc != 0) {
                let err = "zk node create result: %d, error: '%s', path=%s", rc, error, path;
                console.log(err);
                reject(err);
            } else {
                console.log("created zk node %s", path);
                resolve(path);
            }
        })
    })
    return prom;
}
function getData(path) {
    let prom = new Promise((resolve, reject) => {
        zk.a_get(path, false, (rc4, error4, stat4, data4) => {
            if (rc4 != 0) {
                console.log("failed getting node: %d, error: '%s', path=%s", rc4, error4, path);
            } else {
                console.log("node data for %s is %s", path, data4);
            }
        });
    });
    return prom;
}


function getChildren(path) {
    let prom = new Promise((resolve, reject) => {
        zk.a_get_children(path, false, (rc, error3, children) => {
            if (rc != 0) {
                console.log("ERROR zk node1.a_get_children: %d, error: '%s'", rc3, error3);
            } else {
                for (let child of children) {
                    console.log(child);
                    getData(path + '/' + child);
                }
            }
        });
    });
    return prom;
}

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
            // zk.a_get(path, false, function (rc4, erro4, stat4, data4) {
            //     if (rc4 != 0) {
            //         console.log("failed getting node: %d, error: '%s', path=%s", rc4, error4, path);
            //     } else {
            //         console.log("fetched node %s", data4);
            //     }
            // });            
            // }