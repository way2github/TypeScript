//// [thisInInvalidContexts.ts]
//'this' in static member initializer
class ErrClass1 {
    static t = this; // Error
}

class BaseErrClass {
    constructor(t: any) { }
}

class ClassWithNoInitializer extends BaseErrClass {
    t;
    //'this' in optional super call
    constructor() {
        super(this); // OK
    }
}

class ClassWithInitializer extends BaseErrClass {
    t = 4;
    //'this' in required super call
    constructor() {
        super(this); // Error
    }
}

module M {
    //'this' in module variable
    var x = this; // Error
}

//'this' as type parameter constraint
// function fn<T extends this >() { } // Error

//'this' as a type argument
function genericFunc<T>(x: T) { }
genericFunc<this>(undefined);  // Should be an error

class ErrClass3 extends this {

}

//'this' as a computed enum value
enum SomeEnum {
    A = this, // Should not be allowed
    B = this.spaaaace // Also should not be allowed
}



//// [thisInInvalidContexts.js]
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//'this' in static member initializer
var ErrClass1 = (function () {
    function ErrClass1() {
    }
    ErrClass1.t = this; // Error
    return ErrClass1;
})();
var BaseErrClass = (function () {
    function BaseErrClass(t) {
    }
    return BaseErrClass;
})();
var ClassWithNoInitializer = (function (_super) {
    __extends(ClassWithNoInitializer, _super);
    //'this' in optional super call
    function ClassWithNoInitializer() {
        _super.call(this, this); // OK
    }
    return ClassWithNoInitializer;
})(BaseErrClass);
var ClassWithInitializer = (function (_super) {
    __extends(ClassWithInitializer, _super);
    //'this' in required super call
    function ClassWithInitializer() {
        _super.call(this, this); // Error
        this.t = 4;
    }
    return ClassWithInitializer;
})(BaseErrClass);
var M;
(function (M) {
    //'this' in module variable
    var x = this; // Error
})(M || (M = {}));
//'this' as type parameter constraint
// function fn<T extends this >() { } // Error
//'this' as a type argument
function genericFunc(x) { }
genericFunc < this > (undefined); // Should be an error
var ErrClass3 = (function () {
    function ErrClass3() {
    }
    return ErrClass3;
})();
this;
{
}
//'this' as a computed enum value
var SomeEnum;
(function (SomeEnum) {
    SomeEnum[SomeEnum["A"] = this] = "A";
    SomeEnum[SomeEnum["B"] = this.spaaaace] = "B"; // Also should not be allowed
})(SomeEnum || (SomeEnum = {}));
