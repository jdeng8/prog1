
/* classes */ 
// Color constructor
class Color {
    constructor(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a; 
            }
        } // end try
        
        catch (e) {
            console.log(e);
        }
    } // end Color constructor

        // Color change method
    change(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a; 
            }
        } // end throw
        
        catch (e) {
            console.log(e);
        }
    } // end Color change method
            // Color add method
    add(c) {
        try {
            if (!(c instanceof Color))
                throw "Color.add: non-color parameter";
            else {
                this.r += c.r; this.g += c.g; this.b += c.b; this.a += c.a;
                return(this);
            }
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end color add
    
        // Color subtract method
    subtract(c) {
        try {
            if (!(c instanceof Color))
                throw "Color.subtract: non-color parameter";
            else {
                this.r -= c.r; this.g -= c.g; this.b -= c.b; this.a -= c.a;
                return(this);
            }
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end color subgtract
    
        // Color scale method
    scale(s) {
        try {
            if (typeof(s) !== "number")
                throw "scale factor not a number";
            else {
                this.r *= s; this.g *= s; this.b *= s; this.a *= s; 
                return(this);
            }
        } // end throw
        
        catch (e) {
            console.log(e);
        }
    } // end Color scale method
    
        // Color copy method
    copy(c) {
        try {
            if (!(c instanceof Color))
                throw "Color.copy: non-color parameter";
            else {
                this.r = c.r; this.g = c.g; this.b = c.b; this.a = c.a;
                return(this);
            }
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end Color copy method
    
        // Color clone method
    clone() {
        var newColor = new Color();
        newColor.copy(this);
        return(newColor);
    } // end Color clone method
    
        // Send color to console
    toConsole() {
        console.log("rgba: "+ this.r +" "+ this.g +" "+ this.b +" "+ this.a);
    }  // end Color toConsole
} // end color class

// Vector class
class Vector {
    constructor(x=0,y=0,z=0) {
        this.set(x,y,z);
    } // end constructor
    
    // sets the components of a vector
    set(x,y,z) {
        try {
            if ((typeof(x) !== "number") || (typeof(y) !== "number") || (typeof(z) !== "number"))
                throw "vector component not a number";
            else
                this.x = x; this.y = y; this.z = z;
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end vector set
    
    // copy the passed vector into this one
    copy(v) {
        try {
            if (!(v instanceof Vector))
                throw "Vector.copy: non-vector parameter";
            else
                this.x = v.x; this.y = v.y; this.z = v.z;
        } // end try
        
        catch(e) {
            console.log(e);
        }
    }
    
    toConsole(prefix) {
        console.log(prefix+"["+this.x+","+this.y+","+this.z+"]");
    } // end to console
    
    // static dot method
    static dot(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.dot: non-vector parameter";
            else
                return(v1.x*v2.x + v1.y*v2.y + v1.z*v2.z);
        } // end try
        
        catch(e) {
            console.log(e);
            return(NaN);
        }
    } // end dot static method
    
    // static add method
    static add(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.add: non-vector parameter";
            else
                return(new Vector(v1.x+v2.x,v1.y+v2.y,v1.z+v2.z));
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end add static method
    
    // static subtract method, v1-v2
    static subtract(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.subtract: non-vector parameter";
            else {
                var v = new Vector(v1.x-v2.x,v1.y-v2.y,v1.z-v2.z);
                //v.toConsole("Vector.subtract: ");
                return(v);
            }
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end subtract static method
    
    // static scale method
    static scale(c,v) {
        try {
            if (!(typeof(c) === "number") || !(v instanceof Vector))
                throw "Vector.scale: malformed parameter";
            else
                return(new Vector(c*v.x,c*v.y,c*v.z));
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method
    // static scale method2
    static scale2(c,v) {
        try {
            if (!(c instanceof Vector) || !(v instanceof Vector))
                throw "Vector.scale2: malformed parameter";
            else
                return(new Vector(c.x*v.x,c.y*v.y,c.z*v.z));
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method
    
    // static normalize method
    static normalize(v) {
        try {
            if (!(v instanceof Vector))
                throw "Vector.normalize: parameter not a vector";
            else {
                var lenDenom = 1/Math.sqrt(Vector.dot(v,v));
                return(Vector.scale(lenDenom,v));
            }
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method

    static cross(v1, v2){
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.normalize: parameter not a vector";
            else{
                var crossv = new Vector(
                    v1.y*v2.z-v2.y*v1.z,
                    v2.x*v1.z-v1.x*v2.z,
                    v1.x*v2.y-v2.y*v1.x,
                    );
                return crossv;
            }

        }

        catch(e){
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    }
    
} // end Vector class
/* parameters */
var eyePosX = document.getElementById("eyex").value;
var eyePosY = document.getElementById("eyey").value;
var eyePosZ = document.getElementById("eyez").value;

// var blx = document.getElementById("blx").value;
// var bly = document.getElementById("bly").value;
// var blz = document.getElementById("blz").value;

// var urx = document.getElementById("urx").value;
// var ury = document.getElementById("ury").value;
// var urz = document.getElementById("urz").value;
/* utility functions */

// draw a pixel at x,y using color
function drawPixel(imagedata,x,y,color) {
    try {
        if ((typeof(x) !== "number") || (typeof(y) !== "number"))
            throw "drawpixel location not a number";
        else if ((x<0) || (y<0) || (x>=imagedata.width) || (y>=imagedata.height))
            throw "drawpixel location outside of image";
        else if (color instanceof Color) {
            var pixelindex = (y*imagedata.width + x) * 4;
            imagedata.data[pixelindex] = color.r;
            imagedata.data[pixelindex+1] = color.g;
            imagedata.data[pixelindex+2] = color.b;
            imagedata.data[pixelindex+3] = color.a;
        } else 
            throw "drawpixel color is not a Color";
    } // end try
    
    catch(e) {
        console.log(e);
    }
} // end drawPixel

// get the input ellipsoids from the standard class URL
function getInputEllipsoids() {
    const INPUT_ELLIPSOIDS_URL = "https://ncsucgclass.github.io/prog1/ellipsoids.json";
        
    // load the ellipsoids file
    var httpReq = new XMLHttpRequest(); // a new http request
    httpReq.open("GET",INPUT_ELLIPSOIDS_URL,false); // init the request
    httpReq.send(null); // send the request
    var startTime = Date.now();
    while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
        if ((Date.now()-startTime) > 3000)
            break;
    } // until its loaded or we time out after three seconds
    if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
        console.log*("Unable to open input ellipses file!");
        return String.null;
    } else
        return JSON.parse(httpReq.response); 
} // end get input ellipsoids

function getInputLights() {
    const INPUT_LIGHTS_URL = "https://ncsucgclass.github.io/prog1/lights.json";
        
    // load the lights file
    var httpReq = new XMLHttpRequest(); // a new http request
    httpReq.open("GET",INPUT_LIGHTS_URL,false); // init the request
    httpReq.send(null); // send the request
    var startTime = Date.now();
    while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
        if ((Date.now()-startTime) > 3000)
            break;
    } // until its loaded or we time out after three seconds
    if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
        console.log*("Unable to open input ellipses file!");
        return String.null;
    } else
        return JSON.parse(httpReq.response); 
} // end get input lights

function getInputTriangles() {
    const INPUT_TRIANGLE_URL = "https://ncsucgclass.github.io/prog1/triangles.json";
        
    // load the lights file
    var httpReq = new XMLHttpRequest(); // a new http request
    httpReq.open("GET",INPUT_TRIANGLE_URL,false); // init the request
    httpReq.send(null); // send the request
    var startTime = Date.now();
    while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
        if ((Date.now()-startTime) > 3000)
            break;
    } // until its loaded or we time out after three seconds
    if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
        console.log*("Unable to open input ellipses file!");
        return String.null;
    } else
        return JSON.parse(httpReq.response); 
} // end get input lights
// put points in the ellipsoids from the class github
function drawPixelsInInputEllipsoids(context) {
    var inputEllipsoids = getInputEllipsoids();
    var lights = getInputLights();
    var w = context.canvas.width;
    var h = context.canvas.height;
    var imagedata = context.createImageData(w,h);
    const eyePos = new Vector(parseFloat(eyePosX), parseFloat(eyePosY), parseFloat(eyePosZ));

    if (inputEllipsoids != String.null) { 
        var n = inputEllipsoids.length; // the number of input ellipsoids
        var ln = lights.length;

        // project and draw pixels
        for(var i=0; i<1;i+=1/w){
            for(var j=1/h;j<=1;j+=1/h){

                var distance = 999;
                var closeObject = n;
                var pixelPos = new Vector(i,j,0);
                var normal = new Vector();
                var objectPos = new Vector();

                //find closest intersect point
                for (var e=0; e<n; e++) {
                    var ellipsoidA = inputEllipsoids[e].a;
                    var ellipsoidB = inputEllipsoids[e].b;
                    var ellipsoidC = inputEllipsoids[e].c;
                    var center = new Vector(inputEllipsoids[e].x, inputEllipsoids[e].y, inputEllipsoids[e].z);
                    
                    var equationParameters = ellipsoidQuatratic(center, pixelPos, eyePos, ellipsoidA, ellipsoidB, ellipsoidC);
                    if(isIntersect(equationParameters)){
                        var roots = getRoot(equationParameters);
                        var minRoot = (roots["r1"]>=1 && roots["r2"]>=1)? Math.min(roots["r1"], roots["r2"]):1;

                        if(distance>minRoot){
                            distance = minRoot;
                            closeObject = e;
                            objectPos = getObjectPos(eyePos, pixelPos, distance);
                            normal = getEllipsNormal(center, objectPos, ellipsoidA, ellipsoidB, ellipsoidC);
                        }
                    }
                }

                //fill color, light and shadow
                if(closeObject<n){
                    var ambient = new Color(
                            inputEllipsoids[closeObject].ambient[0],
                            inputEllipsoids[closeObject].ambient[1],
                            inputEllipsoids[closeObject].ambient[2],
                            1);
                    var illum = new Color(0,0,0,1);

                    for(var l=0; l<ln;l++){
                        var light = new Vector(lights[l].x, lights[l].y, lights[l].z);
                        var hit = 1;
                        for(var e=0; e<n; e++){
                            var ellipsoidA = inputEllipsoids[e].a;
                            var ellipsoidB = inputEllipsoids[e].b;
                            var ellipsoidC = inputEllipsoids[e].c;
                            var center = new Vector(inputEllipsoids[e].x, inputEllipsoids[e].y, inputEllipsoids[e].z);
                            
                            var equationParameters = ellipsoidQuatratic(center, light, objectPos, ellipsoidA, ellipsoidB, ellipsoidC);
                            if(isIntersect(equationParameters)) {
                                var roots = getRoot(equationParameters);
                                if(Math.min(roots["r1"], roots["r2"])>1/w/h){
                                    hit = 0;
                                    break;
                                }
                            }
                        }
                        if(hit ==1){
                            illum = illum.add(shadePixel(inputEllipsoids[closeObject],normal,light, eyePos, objectPos, lights[l]));
                        }
                    }

                    var fillColor = ambient.add(illum).scale(255);
                    drawPixel(imagedata,i*w,(1-j)*h,fillColor);
                }
                else{//background
                    drawPixel(imagedata,i*w,(1-j)*h,new Color(0,0,0,255));
                }
            }
        }
        context.putImageData(imagedata, 0, 0);
    } 
} // end draw pixels in input ellipsoids

function shadePixel(ellipsoid, normal, light, eye, oPos, lightColor){

    var n = Vector.normalize(normal);
    var l = Vector.normalize(Vector.subtract(light, oPos));
    var NdotL = Math.max(0,Vector.dot(n, l));
    var diffuse = new Color(
                            ellipsoid.diffuse[0]*lightColor.diffuse[0]*NdotL,
                            ellipsoid.diffuse[1]*lightColor.diffuse[1]*NdotL,
                            ellipsoid.diffuse[2]*lightColor.diffuse[2]*NdotL,
                            1);

    var v = Vector.normalize(Vector.subtract(eye, oPos));
    var h = Vector.normalize(Vector.add(v,l));
    var q = ellipsoid.n;
    var NdotH = Math.pow(Math.max(0,Vector.dot(n, h)),q);
    // NdotH = 1;
    var specular = new Color(
                            ellipsoid.specular[0]*lightColor.specular[0]*NdotH,
                            ellipsoid.specular[1]*lightColor.specular[1]*NdotH,
                            ellipsoid.specular[2]*lightColor.specular[2]*NdotH,
                            1);
    diffuse.add(specular);
    return diffuse;
}
function getEllipsNormal(c,d,rx,ry,rz){
    var normal = Vector.scale2(new Vector(2/rx/rx, 2/ry/ry, 2/rz/rz), Vector.subtract(d, c));
    return normal;
}

//solve quatratic equation
function ellipsoidQuatratic(c,d,e,rx,ry,rz){
    var cm = Vector.scale2(new Vector(1/rx, 1/ry, 1/rz), c);
    var dm = Vector.scale2(new Vector(1/rx, 1/ry, 1/rz), Vector.subtract(d, e));
    var em = Vector.scale2(new Vector(1/rx, 1/ry, 1/rz), e);

    var a = Vector.dot(dm,dm);
    var b = 2*Vector.dot(Vector.subtract(em,cm),dm);
    var c = (Vector.dot(Vector.subtract(em,cm),Vector.subtract(em,cm))-1);
    return{
        a:a,
        b:b,
        c:c
    };
}

function triangleQuatratic(c,d,e,rx,ry,rz){
    var cm = Vector.scale2(new Vector(1/rx, 1/ry, 1/rz), c);
    var dm = Vector.scale2(new Vector(1/rx, 1/ry, 1/rz), Vector.subtract(d, e));
    var em = Vector.scale2(new Vector(1/rx, 1/ry, 1/rz), e);

    var a = Vector.dot(dm,dm);
    var b = 2*Vector.dot(Vector.subtract(em,cm),dm);
    var c = (Vector.dot(Vector.subtract(em,cm),Vector.subtract(em,cm))-1);
    return{
        a:a,
        b:b,
        c:c
    };
}

function isIntersect(arg){
    var quat = arg['b']*arg['b']-4*arg['a']*arg['c'];
    if(quat<0) return false;
    else return true;
}

function getRoot(arg){
    var quat = Math.sqrt(arg['b']*arg['b']-4*arg['a']*arg['c']);
    var root1 = (-arg['b'] + quat)/2/arg['a'];
    var root2 = (-arg['b'] - quat)/2/arg['a'];
    return {
        r1: root1,
        r2: root2
    };
}

function getObjectPos(e,d,t){
    var v = Vector.subtract(d, e);
    return Vector.add(e, Vector.scale(t,v));
}
/* main -- here is where execution begins after window load */
function submit(){
    window.onload();
}

window.onload = function() {

    // Get the canvas and context
    var canvas = document.getElementById("viewport"); 
    var context = canvas.getContext("2d");
 
    eyePosX = document.getElementById("eyex").value;
    eyePosY = document.getElementById("eyey").value;
    eyePosZ = document.getElementById("eyez").value;

    canvas.width = document.getElementById("canvasx").value;
    canvas.height = document.getElementById("canvasy").value;

    drawPixelsInInputEllipsoids(context);
    
    //drawInputEllipsoidsUsingArcs(context);
      // shows how to read input file, but not how to draw pixels
}
