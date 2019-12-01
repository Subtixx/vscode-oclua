'use strict';

import { LuaClass, LuaMethod } from "./defs";

export var RobotClassDefinition : LuaClass;

let tmpDef :LuaMethod;

//https://ocdoc.cil.li/api:robot

RobotClassDefinition = new LuaClass("robot");
RobotClassDefinition.description = "This API wraps the functionality of the component robot to allow more intuitive interaction with the robot. ";

tmpDef = new LuaMethod("name");
tmpDef.description = "Returns the robot's name.\nThe name of a Robot is set initially during it's creation and cannot be changed programmatically. However you can change it using an anvil if you want.";
tmpDef.args = [];
tmpDef.returnType = "string";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("detect");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("detectup");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("detectdown");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("select");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("inventorysize");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("count");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("space");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("transferto");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("compareto");
tmpDef.description = "";
tmpDef.args = ["slot"];
tmpDef.returnType = "boolean";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("compare");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "boolean";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("compareup");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("comparedown");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("drop");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("dropup");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("dropdown");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("suck");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("suckup");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("suckdown");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("place");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("placeup");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("placedown");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("durability");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("swing");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("swingup");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("swingdown");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("use");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("useup");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("usedown");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("forward");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("back");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("up");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("down");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("turnleft");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("turnright");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("turnAround");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("tankCount");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("selectTank");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("tankLevel");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("tankSpace");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("compareFluidTo");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("transferFluidTo");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("compareFluid");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("compareFluidUp");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("compareFluidDown");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("drain");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("drainUp");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("drainDown");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("fill");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("fillUp");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("fillDown");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "";
RobotClassDefinition.methods.push(tmpDef);