var tmdb;

var pairs = 
[
    [
       {
          "id":"AK-MAK-1153",
          "Title":"Hand guard",
          "Artist":"anonymous",
          "Thumbnail_Url":"https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/AK-MAK-1153.jpg",
          "Image_Url":"https://lh3.googleusercontent.com/6PQ-WdOMAJQAo8DIy9wyOphJhRtFWqU9lG2B5PxQpS-X8P78XC7VxYb88Y18hcHpkGyHWv_U9MifycMr3yfYtF24Ag=s0",
          "Culture":"japanese",
          "Classification":"uncategorized",
          "Museum_Page":"https://www.rijksmuseum.nl/en/collection/AK-MAK-1153",
          "Museum":"rijks"
       },
       {
          "id":"NG-VG-5-105",
          "Title":"Vroedschapspenning van de stad Dokkum",
          "Artist":"Georg Wilhelm Vestner",
          "Thumbnail_Url":"https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/NG-VG-5-105.jpg",
          "Image_Url":"https://lh3.googleusercontent.com/mlvNdfu0xyd_zJtR5TyX4XjXToZTupQ95XsmG9d_DiYgkWzTeIe1KP8nZ5Nh-XSTADNmXl7WFslVOUGYuZySxjW6Ilk=s0",
          "Culture":"german",
          "Classification":"uncategorized",
          "Museum_Page":"https://www.rijksmuseum.nl/en/collection/NG-VG-5-105",
          "Museum":"rijks"
       }
    ],
    [
       {
          "id":"RP-P-2013-39-2-1-14",
          "Title":"Très Parisien, 1925, No. 1, Pl. 14-TYROL.",
          "Artist":"G-P. Joumard",
          "Thumbnail_Url":"https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/RP-P-2013-39-2-1-14.jpg",
          "Image_Url":"https://lh3.googleusercontent.com/zYgl3gFbEMh2sE4qTsN0Ho_TJWIe-xCPDplJfOCAbj1FUCF_2dP4CxyNl4_-65QdjU6JRuXgqMzlA7Y5O-8CpexuAg=s0",
          "Culture":"french",
          "Classification":"textiles",
          "Museum_Page":"https://www.rijksmuseum.nl/en/collection/RP-P-2013-39-2-1-14",
          "Museum":"rijks"
       },
       {
          "id":"NG-1972-28-31-D",
          "Title":"Oorlogsgeweld",
          "Artist":"anonymous",
          "Thumbnail_Url":"https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/NG-1972-28-31-D.jpg",
          "Image_Url":"https://lh3.googleusercontent.com/d7S7UgebyJp3ylLxlx0K2imbQqvnGPuVMXOJHqQjeDVkt-aRa0NmgIZzb9j4BsbFuaInbjTO6TwB2w8IB0d11oeMRLI=s0",
          "Culture":"dutch",
          "Classification":"prints",
          "Museum_Page":"https://www.rijksmuseum.nl/en/collection/NG-1972-28-31-D",
          "Museum":"rijks"
       }
    ],
    [
       {
          "id":"BK-NM-14365-B",
          "Title":"Staal kloskant met grove draad als voorbeeld van stroptraliegrond",
          "Artist":"anonymous",
          "Thumbnail_Url":"https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/BK-NM-14365-B.jpg",
          "Image_Url":"https://lh3.googleusercontent.com/dmt62ae-7kdwhQbmYqvcMFMGq4CR21-baUtq7tE0ADrsiMKAb1_0C1yno2qipf9N5t6T7_nVmpRlvHr2eazxFBpcNQ=s0",
          "Culture":"dutch",
          "Classification":"textiles",
          "Museum_Page":"https://www.rijksmuseum.nl/en/collection/BK-NM-14365-B",
          "Museum":"rijks"
       },
       {
          "id":"RP-F-F01047-S",
          "Title":"Portret van R.P. Paul-Marie Joseph Claude Seigneret, omgeven door Engelse tekst en getekende kronen",
          "Artist":"anonymous",
          "Thumbnail_Url":"https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/RP-F-F01047-S.jpg",
          "Image_Url":"https://lh3.googleusercontent.com/lTZ1Sh4G6w1hJdum9cuiuj8of1b0vHIncvsCQMv0PT3g_zOB0e9pR_bHJzCmpidW3Ilkm_V8fEnHzSgtN7sWMvM_ZQ=s0",
          "Culture":"french",
          "Classification":"uncategorized",
          "Museum_Page":"https://www.rijksmuseum.nl/en/collection/RP-F-F01047-S",
          "Museum":"rijks"
       }
    ],
    [
       {
          "id":"RP-P-1911-4309",
          "Title":"Standbeeld van Marie d'Orléans, hertogin van Württemberg",
          "Artist":"Carl Mayer",
          "Thumbnail_Url":"https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/RP-P-1911-4309.jpg",
          "Image_Url":"https://lh3.googleusercontent.com/1THNwIzLNSxIf21FbfM7OYWryJraX85OCwuBvZOyiae-YFTphtxXzcrBIWt4lEWlPBAg3s331la2mGXPXP1hnZ7Vbew=s0",
          "Culture":"various",
          "Classification":"prints",
          "Museum_Page":"https://www.rijksmuseum.nl/en/collection/RP-P-1911-4309",
          "Museum":"rijks"
       },
       {
          "id":"RP-F-00-5345-69",
          "Title":"Schilderij De presentatie in de Tempel",
          "Artist":"Edizioni Brogi",
          "Thumbnail_Url":"https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/RP-F-00-5345-69.jpg",
          "Image_Url":"https://lh5.ggpht.com/Sy4G6dHZuOZlYFEu8k7R1uZ_10KQKLoDM4Q7WXZ1yBVNPYdNuQVM-QgGwBlxb6YnjtgqnZzrT9NLk0w6yGXZyhu9JYE=s0",
          "Culture":"various",
          "Classification":"uncategorized",
          "Museum_Page":"https://www.rijksmuseum.nl/en/collection/RP-F-00-5345-69",
          "Museum":"rijks"
       }
    ],
    [
       {
          "id":"AK-MAK-1204",
          "Title":"Two Statuettes of Padmapani",
          "Artist":"anonymous",
          "Thumbnail_Url":"https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/AK-MAK-1204.jpg",
          "Image_Url":"https://lh3.ggpht.com/NEDr5O1qJwWkf_Onsxz1vaNYJolD4uvzp-YWPNN67l26Kx0e8qBovV4_41Rl2zk1-PGyu0B-k5_ybZeJlA80B1Ze_JU=s0",
          "Culture":"southeast asian",
          "Classification":"sculptures",
          "Museum_Page":"https://www.rijksmuseum.nl/en/collection/AK-MAK-1204",
          "Museum":"rijks"
       },
       {
          "id":"BK-1976-16",
          "Title":"St Joseph and the Christ Child",
          "Artist":"Lucas Faydherbe",
          "Thumbnail_Url":"https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/BK-1976-16.jpg",
          "Image_Url":"https://lh5.ggpht.com/1IuwYbdmLJq5N9UtY8jFzXSlf-9_f4KijGzQsMikE0lg3KByZijqNkSiCAf5XCx41SmUS8IbdOJMnWM-RK1_oNtdqA=s0",
          "Culture":"various",
          "Classification":"sculptures",
          "Museum_Page":"https://www.rijksmuseum.nl/en/collection/BK-1976-16",
          "Museum":"rijks"
       }
    ],
    [
       {
          "id":"AK-NM-13760-B",
          "Title":"Bell-shaped cup with antiquities in panels on a ground of floral scrolls",
          "Artist":"anonymous",
          "Thumbnail_Url":"https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/AK-NM-13760-B.jpg",
          "Image_Url":"https://lh3.googleusercontent.com/hJ3WJ6qIfwNdnWeo3ZobiHYuU1tJ2S9Gh8DBTyVnUK__543rxy1_cEsv84sZusCNFlx_OjU12RKchdyGwyTZir5IsSI=s0",
          "Culture":"chinese",
          "Classification":"ceramics",
          "Museum_Page":"https://www.rijksmuseum.nl/en/collection/AK-NM-13760-B",
          "Museum":"rijks"
       },
       {
          "id":"BK-1968-239-2",
          "Title":"Scalloped saucer with hoo birds",
          "Artist":"anonymous",
          "Thumbnail_Url":"https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/BK-1968-239-2.jpg",
          "Image_Url":"https://lh6.ggpht.com/KXddHUvz1w45VLyRQOCB7HXbCA3U7wV29IeTvQWgfsRd6qncKRR6mNDpXdnXrLQrQ4i6Sc7Tv4UxDnS7Enj08lqfuw=s0",
          "Culture":"japanese",
          "Classification":"ceramics",
          "Museum_Page":"https://www.rijksmuseum.nl/en/collection/BK-1968-239-2",
          "Museum":"rijks"
       }
    ],
    [
       {
          "id":"RP-P-1922-455",
          "Title":"Hemelbed met fakkels en lauwerkransen",
          "Artist":"anonymous",
          "Thumbnail_Url":"https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/RP-P-1922-455.jpg",
          "Image_Url":"https://lh3.googleusercontent.com/v9HBhSC6ICIZqYN8AoayCuaWqMGbYxAZFmaDD8-vWm3nXP1GdKfkysPe9I8MQdkScWDxyhkAMTxSRPHrXIBGY7cHZ98=s0",
          "Culture":"french",
          "Classification":"prints",
          "Museum_Page":"https://www.rijksmuseum.nl/en/collection/RP-P-1922-455",
          "Museum":"rijks"
       },
       {
          "id":"RP-P-2009-2288",
          "Title":"Journal des Dames et des Modes, Costume Parisien, 3 juillet 1799, An 7, (114.) : Bonnet Orné de Marguerites (...)",
          "Artist":"anonymous",
          "Thumbnail_Url":"https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/RP-P-2009-2288.jpg",
          "Image_Url":"https://lh3.googleusercontent.com/DiyJtJV4PzDmlaqiueGuu2xu6PfRQguCtFEYA22c7qEKTTteyy4x4ZJ4NM-r2qL1iKl2kwuYJxvuWn9COlizlxMJuGv7=s0",
          "Culture":"french",
          "Classification":"textiles",
          "Museum_Page":"https://www.rijksmuseum.nl/en/collection/RP-P-2009-2288",
          "Museum":"rijks"
       }
    ]
];

var pairInd = Math.floor(Math.random() * Math.floor(pairs.length));

// wrapper around the movie data
(function (tmdb) {

    // defines a node
    // used to format the request response into something cola can use
    var Node = /** @class */ (function () {
        function Node(id, title, thumbnail, original,artist,museum) {
            this.id = id;
            this.title = title;
            this.artist = artist;
            this.museum = museum;
            this.thumbnail = thumbnail;
            this.original = original;
            this.degree = 0;
        }

        Node.prototype.name = function() { return this.id };

        Node.prototype.getImage = function() {
            return this;
        };

        return Node;
    }());

    // defines an edge based on cola's definition
    var Edge = /** @class */ (function () {
        function Edge(source, target) {
            this.source = source;
            this.target = target;
        }
        Edge.prototype.toString = function () {
            return this.source + '-' + this.target;
        };
        return Edge;
    }());

    //tmdb.Movie = new NodeType("movie", "credits", "title", "posters");
    //tmdb.Person = new NodeType("person", "movie_credits", "name", "profiles");
    tmdb.Node = Node;
    tmdb.Edge = Edge;

    var delay = 10000 / 8; // limit to 8 requests in 10 second span
    var last = 0;

    function request(id, thumbnail) {
        var corsurl = "https://floating-harbor-85189.herokuapp.com/";
        var queryURL = "https://extern2020apim.azure-api.net/cknn";

        var data = {
            "url": thumbnail,
            "query":"",
            "n": 5
            };
        
        //return $.post(queryURL,JSON.stringify(data))
        var dfd = $.Deferred();
        function defer() {
            if (last < 1) {
                last++;
                setTimeout(function () { return last--; }, delay);
                dfd.resolve(
                    $.ajax({
                        type: 'POST',
                        url : corsurl+queryURL,
                        headers: {'X-Requested-With': 'XMLHttpRequest'},
                        crossDomain: false,
                        data: JSON.stringify(data),
                        contentType:'application/json; charset=utf-8',
                        dataType: 'json'
                    })
                );
            }
            else
                setTimeout(defer, delay);
            return dfd;            
        }
        return defer();
        // return $.ajax({
        //     type: 'POST',
        //     url : corsurl+queryURL,
        //     headers: {'X-Requested-With': 'XMLHttpRequest'},
        //     crossDomain: false,
        //     data: JSON.stringify(data),
        //     contentType:'application/json; charset=utf-8',
        //     dataType: 'json'
        // })
    };
    
    // used to combine the node and edge classes into a format for Cola
    var Graph = /** @class */ (function () {
        function Graph() {
            this.nodes = {};
            this.edges = {};
        }

        // handles expanding the graph
        Graph.prototype.expandNeighbours = function (node, f) {
            var _this = this;

            if (node.cast) {

                var dn = node.cast.map(function (c) { 
                    //console.log(c);
                    return _this.getNode(c[0].id, c[0].Title, c[0].Thumbnail_Url, c[0].Image_Url, c[0].Artist, c[0].Museum, function (v) {
                        _this.addEdge(node, v);
                        f(v); // Comes from refocus?
                    }); 
                });

            }
            
            var d = $.Deferred();
            $.when.apply($, dn)
                .then(function () {
                    var neighbors = Array.prototype.slice.call(arguments);
                    d.resolve(neighbors);
                });
            return d.promise()
        };

        // determines if graph is complete
        Graph.prototype.fullyExpanded = function (node) {
            var _this = this;
            return node.cast && node.cast.every(function (v) { return (v[0].id) in _this.nodes; });
        };

        // actually adds the node to the list of nodes
        Graph.prototype.addNode = function (id, title, thumbnail, original, artist, museum) {
            var node = new Node(id, title, thumbnail, original, artist, museum);
            return this.nodes[node.name()] = node;
        };

        // creates a request for more info from a node
        Graph.prototype.getNode = function (id, title, thumbnail, original, artist, museum, f) {
            var _this = this;
            var d = $.Deferred();
            var name = id;
            if (name in this.nodes) {
                return this.nodes[name];
            }

            var node = this.addNode(id, title, thumbnail, original, artist, museum);
            f(node); //Awful name, see ExpandNeighbors, input is a node
            var cast = request(id, thumbnail);
            $.when(cast).then(function (c) {
                node.cast = c.results;
                c.results.forEach(function (v) {
                    //console.log(v);
                    //console.log(v[0].id);
                    var neighbourname = v[0].id;
                    if (neighbourname in _this.nodes) {
                        _this.addEdge(node, _this.nodes[neighbourname])
                    }
                });
                d.resolve(node)
            });
            return d.promise();
        };

        // adds to the list of edges
        //input: u and v are nodes
        Graph.prototype.addEdge = function(u, v) {
            var edge = new Edge(u.id,v.id);
            var ename = edge.toString();
            if (!(ename in this.edges)) {
                this.edges[ename] = edge;
            }
            ++u.degree, ++v.degree;
        };

        return Graph;
    }());
    tmdb.Graph = Graph;
})(tmdb || (tmdb = {}));

//var width = 960, height = 500, imageScale = 0.1;
var width = $(window).width(), height = $(window).height(), imageScale = 0.1;
//var red = "rgb(254, 137, 137)";
//var red = "rgb(155, 28, 49)";
// var red = "rgb(111,34,50)";
var red = "rgb(45,40,62)";
var grey = "rgb(101,100,107)";
var gold = "rgb(212,180,100)";

var d3cola = cola.d3adaptor(d3)
    .linkDistance(60)
    .size([width, height]);

// var outer = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height)
//     .attr("pointer-events", "all");
var outer = d3.select("#graph").append("svg")
.attr("width", width)
.attr("height", height)
.attr("pointer-events", "all");

var zoom = d3.behavior.zoom();

outer.append('rect')
    .attr('class', 'background')
    .attr('width', "100%")
    .attr('height', "100%")
    .call(zoom.on("zoom", redraw))
    .on("dblclick.zoom", zoomToFit);

var defs = outer.append("svg:defs");

// handles colors
function addGradient(id, colour1, opacity1, colour2, opacity2) {
    var gradient = defs.append("svg:linearGradient")
        .attr("id", id)
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%")
        .attr("spreadMethod", "pad");
    gradient.append("svg:stop")
        .attr("offset", "0%")
        .attr("stop-color", colour1)
        .attr("stop-opacity", opacity1);
    gradient.append("svg:stop")
        .attr("offset", "100%")
        .attr("stop-color", colour2)
        .attr("stop-opacity", opacity2);
}

addGradient("SpikeGradient", "red", 1, "red", 0);
addGradient("EdgeGradient", red, 1, grey, 1);
addGradient("ReverseEdgeGradient", grey, 1, red, 1);

var vis = outer.append('g');
var edgesLayer = vis.append("g");
var nodesLayer = vis.append("g");
var nodeMouseDown = false;

// moves the graph around
function redraw(transition) {
    // if mouse down then we are dragging not panning
    if (nodeMouseDown)
        return;
    (transition ? vis.transition() : vis)
        .attr("transform", "translate(" + zoom.translate() + ") scale(" + zoom.scale() + ")");
}

var modelgraph = new tmdb.Graph();
var viewgraph = { nodes: [], links: [] };
//var nodeWidth = 30, nodeHeight = 35;
var nodeWidth = 30, nodeHeight = 35;

function newGame() {
    viewgraph.nodes.forEach(function (v) {
        d3.select("#" + v.name()).remove();
    });

    modelgraph = new tmdb.Graph();
    viewgraph = { nodes: [], links: [] };
    refreshViewGraph();

    pairInd = (pairInd + 1) % pairs.length;

    var startart = pairs[pairInd][0];
    var d = modelgraph.getNode(startart.id,
                                startart.Title,
                                startart.Thumbnail_Url,
                                startart.Image_Url,
                                startart.Artist,
                                startart.Museum,
                                addViewNode);
    document.getElementById("startimg").src = startart.Thumbnail_Url
    document.getElementById("endimg").src = pairs[pairInd][1].Thumbnail_Url
        

    //var d = modelgraph.getNode("RP-T-1969-593", "Liervogel","https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/RP-T-1969-593.jpg", "https://lh3.googleusercontent.com/61X6n7YjWKakDQEwHjPzUyHL2FAcSZ78Q-c0yfQhU0jwQaZKKsA9n083FypPpPwvsVh0OTZcH-a82n7aFvzjEG2YzSQ=s0", "Carel Adolph Lion Cachet", "rijks", addViewNode);
    $.when(d).then(function (startNode) {
        addViewNode(startNode);
        refocus(startNode);
    }).then(() => {
        initialZoom();
    });

}

// updates the graph when node is clicked
function refocus(focus) {
    var neighboursExpanded = modelgraph.expandNeighbours(focus, function (v) {
        if (!inView(v))
            addViewNode(v, focus);
    });
    refreshViewGraph();
    $.when(neighboursExpanded).then(function f() {
        refreshViewGraph();
    });
}

// updates the graph's node colors
// no more info = gray
// clickable = red
function refreshViewGraph() {
    viewgraph.links = [];
    viewgraph.nodes.forEach(function (v) {
        var fullyExpanded = modelgraph.fullyExpanded(v);
        v.colour = fullyExpanded ? grey : red;

        if (v.id === pairs[pairInd][1].id && !fullyExpanded) {
            v.colour = gold;
        }

        if (!v.cast)
            return;
    });
    Object.keys(modelgraph.edges).forEach(function (e) {
        var l = modelgraph.edges[e];
        var u = modelgraph.nodes[l.source], v = modelgraph.nodes[l.target];
        if (inView(u) && inView(v))
            viewgraph.links.push({ source: u, target: v });
        if (inView(u) && !inView(v))
                        
            
            if (u.id === pairs[pairInd][1].id) {
                u.colour = gold;
            } else {
                u.colour = red;
            }
        if (!inView(u) && inView(v))
            
            if (v.id === pairs[pairInd][1].id) {
                v.colour = gold;
            } else {
                v.colour = red;
            }
    });
    update();
}

// function to create "hints" on nodes -- spikes that appear based on # of other connections
function hintNeighbours(v) {
    if (!v.cast)
        return;
    var hiddenEdges = v.cast.length + 1 - v.degree;
    var r = 2 * Math.PI / hiddenEdges;
    for (var i = 0; i < hiddenEdges; ++i) {
        var w = nodeWidth - 6, h = nodeHeight - 6, x = w / 2 + 25 * Math.cos(r * i), y = h / 2 + 30 * Math.sin(r * i), rect = new cola.Rectangle(0, w, 0, h), vi = rect.rayIntersection(x, y);
        var dview = d3.select("#" + v.name() + "_spikes");
        dview.append("rect")
            .attr("class", "spike")
            .attr("rx", 1).attr("ry", 1)
            .attr("x", 0).attr("y", 0)
            .attr("width", 10).attr("height", 4)
            .attr("transform", "translate(" + vi.x + "," + vi.y + ") rotate(" + (360 * i / hiddenEdges) + ")")
            .on("click", function () { click(v); });
    }
}

// removes "hints" from the node
function unhintNeighbours(v) {
    var dview = d3.select("#" + v.name() + "_spikes");
    dview.selectAll(".spike").remove();
}

function inView(v) { return typeof v.viewgraphid !== 'undefined'; }

// adds a new node to the viewable graph
function addViewNode(v, startpos) {
    v.viewgraphid = viewgraph.nodes.length;
    var d = v.getImage();
    $.when(d).then(function (node) {
        d3.select("#" + node.name()).append("image")
            .attr("width", 0)
            .attr("height", 0)
            .attr("transform", "translate(2,2)")
            .attr("xlink:href", function (v) {
            var url = v.thumbnail;
            var simg = this;
            var img = new Image();
            img.onload = function () {
                simg.setAttribute("width", nodeWidth - 4);
                simg.setAttribute("height", nodeHeight - 4);
            };
            return img.src = url;
        }).on("click", function () { click(node); });
    }).then(() => {
        if (v.id === pairs[pairInd][1].id){
            console.log("YOU WIN YAY",v.id,pairs[pairInd][1].id);
        }
    });
    if (typeof startpos !== 'undefined') {
        //honestly whoever wrote this is satan.
        //console.log(startpos);
        v.x = startpos.x;
        v.y = startpos.y;
    }
    viewgraph.nodes.push(v);
}

// handles mouse clicking to expand the graph
function click(node) {
    if (node.colour == grey) //the people who wrote this sucks
        return;
    var focus = modelgraph.getNode(node.id, node.title, node.thumbnail, node.original, node.artist, node.museum, addViewNode);
    refocus(focus);
}

// updates the graph every tick
function update() {
    d3cola.nodes(viewgraph.nodes)
        .links(viewgraph.links)
        .start();
        
    var link = edgesLayer.selectAll(".link")
        .data(viewgraph.links);

    link.enter().append("rect")
        .attr("x", 0).attr("y", 0)
        .attr("height", 5)
        .attr("class", "link");
    link.exit().remove();
    link.attr("fill", function (d) {
        if (d.source.colour !== grey && d.target.colour !== grey)
            return red;
        if (d.source.colour === grey && d.target.colour === grey)
            return grey; 
        return d.source.colour !== grey ? "url(#ReverseEdgeGradient)" : "url(#EdgeGradient)";
    });


    var node = nodesLayer.selectAll(".node")
        .data(viewgraph.nodes, function (d) { return d.viewgraphid; });

    var nodeEnter = node.enter().append("g")
        .attr("id", function (d) { return d.name(); })
        .attr("class", "node")
        .on("mousedown", function () { nodeMouseDown = true; }) // recording the mousedown state allows us to differentiate dragging from panning
        .on("mouseup", function () { nodeMouseDown = false; })
        .on("touchmove", function () { d3.event.preventDefault(); })
        .on("mouseenter", function (d) { hintNeighbours(d); }) // on mouse over nodes we show "spikes" indicating there are hidden neighbours
        .on("mouseleave", function (d) { unhintNeighbours(d); })
        .call(d3cola.drag);

    nodeEnter.append("g").attr("id", function (d) { return d.name() + "_spikes"; })
        .attr("transform", "translate(3,3)");

    nodeEnter.append("rect")
        .attr("rx", 5).attr("ry", 5)
        .style("stroke-width", "0")
        .attr("width", nodeWidth).attr("height", nodeHeight)
        .on("click", function (d) { click(d); })
        .on("touchend", function (d) { click(d); });

    nodeEnter.append("title")
        .text(function (d) { return "Title: "+d.title+"\n"+"Artist: "+d.artist+"\n"+"Museum: "+d.museum; });

    node.style("fill", function (d) { return d.colour; });

    d3cola.on("tick", function () {
        link.attr("transform", function (d) {
            var dx = d.source.x - d.target.x, dy = d.source.y - d.target.y;
            var r = 180 * Math.atan2(dy, dx) / Math.PI;
            return "translate(" + d.target.x + "," + d.target.y + ") rotate(" + r + ") ";
        }).attr("width", function (d) {
            var dx = d.source.x - d.target.x, dy = d.source.y - d.target.y;
            return Math.sqrt(dx * dx + dy * dy);
        });
        node.attr("transform", function (d) { return "translate(" + (d.x - nodeWidth / 2) + "," + (d.y - nodeHeight / 2) + ")"; });
    });
}

// used for the zoom to fit button
function graphBounds() {
    var x = Number.POSITIVE_INFINITY, X = Number.NEGATIVE_INFINITY, y = Number.POSITIVE_INFINITY, Y = Number.NEGATIVE_INFINITY;
    nodesLayer.selectAll(".node").each(function (v) {
        x = Math.min(x, v.x - nodeWidth / 2);
        X = Math.max(X, v.x + nodeWidth / 2);
        y = Math.min(y, v.y - nodeHeight / 2);
        Y = Math.max(Y, v.y + nodeHeight / 2);
    });
    return { x: x-10, X: X+10, y: y-10, Y: Y+10 };
}

// cancels out fullscreen
function fullScreenCancel() {
    outer.attr("width", width).attr("height", height);
    zoomToFit();
}

// zooms the graph to fit its svg box
function zoomToFit() {
    var b = graphBounds();
    var w = b.X - b.x, h = b.Y - b.y;
    var cw = Number(outer.attr("width")), ch = Number(outer.attr("height"));
    var s = Math.min(cw / w, ch / h);
    var tx = (-b.x * s + (cw / s - w) * s / 2), ty = (-b.y * s + (ch / s - h) * s / 2);
    zoom.translate([tx, ty]).scale(s);
    redraw(true);
}

function initialZoom() {
    var b = graphBounds();
    // b.Y = b.Y+100;
    b.y = b.y-30;
    var w = 200;
    var h = 200;
    var cw = Number(outer.attr("width")), ch = Number(outer.attr("height"));
    var s = Math.min(cw/w, ch/h);
    var tx = (-b.x * s + (cw / s - w) * s / 2), ty = (-b.y * s + (ch / s - h) * s / 2);
    zoom.translate([tx, ty]).scale(s);
    redraw(true);
}

$().ready(function () {
    // button to zoom the graph
    $("#zoomToFitButton").click(zoomToFit);

    // // button for fullscreen mode
    // $("#fullScreenButton").click(function () {
    //     var fs = fullscreen(outer[0][0]);
    //     fs.request();
    //     outer.attr('width', screen.width).attr('height', screen.height);
    //     zoomToFit();
    //     fs.on('release', fullScreenCancel);
    // });

    // get first node
    //node.id, node.title, node.thumbnail, node.original,
    //"id":"RP-T-1969-593",
    //"Title":"Liervogel",
    //"Artist":"Carel Adolph Lion Cachet",
    //"Thumbnail_Url":"https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/RP-T-1969-593.jpg",
    //"Image_Url":"https://lh3.googleusercontent.com/61X6n7YjWKakDQEwHjPzUyHL2FAcSZ78Q-c0yfQhU0jwQaZKKsA9n083FypPpPwvsVh0OTZcH-a82n7aFvzjEG2YzSQ=s0",
    
    // var d = modelgraph.getNode("AK-MAK-1153","Hand guard",
    // "https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/AK-MAK-1153.jpg",
    // "https://lh3.googleusercontent.com/6PQ-WdOMAJQAo8DIy9wyOphJhRtFWqU9lG2B5PxQpS-X8P78XC7VxYb88Y18hcHpkGyHWv_U9MifycMr3yfYtF24Ag=s0",
    // "anonymous",
    // "rijks",
    // addViewNode
    // );
    var startart = pairs[pairInd][0];
    var d = modelgraph.getNode(startart.id,
                                startart.Title,
                                startart.Thumbnail_Url,
                                startart.Image_Url,
                                startart.Artist,
                                startart.Museum,
                                addViewNode);

    document.getElementById("startimg").src = startart.Thumbnail_Url
    document.getElementById("endimg").src = pairs[pairInd][1].Thumbnail_Url


    //var d = modelgraph.getNode("RP-T-1969-593", "Liervogel","https://mmlsparkdemo.blob.core.windows.net/rijks/resized_images/RP-T-1969-593.jpg", "https://lh3.googleusercontent.com/61X6n7YjWKakDQEwHjPzUyHL2FAcSZ78Q-c0yfQhU0jwQaZKKsA9n083FypPpPwvsVh0OTZcH-a82n7aFvzjEG2YzSQ=s0", "Carel Adolph Lion Cachet", "rijks", addViewNode);
    $.when(d).then(function (startNode) {
        addViewNode(startNode);
        refocus(startNode);
    }).then(() => {
        initialZoom();
    });
});
