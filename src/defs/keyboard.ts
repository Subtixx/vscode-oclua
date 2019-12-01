'use strict';

import { LuaClass, LuaMethod } from "./defs";

export var KeyboardClassDefinition : LuaClass;

let tmpDef :LuaMethod;

//https://ocdoc.cil.li/api:keyboard

KeyboardClassDefinition = new LuaClass("keyboard");
KeyboardClassDefinition.description = " This API allows you to refer to key codes by name, using the keyboard.keys table. This is a two-directional table, for example, the value of keyboard.keys.numpad0 is 0x52, and the value of keyboard.keys[0x52] is the string numpad0.\nPlease see [the Lua file containing the API's implementation](https://github.com/MightyPirates/OpenComputers/blob/master-MC1.7.10/src/main/resources/assets/opencomputers/loot/OpenOS/lib/keyboard.lua) for the list of available names. ";

tmpDef = new LuaMethod("isaltdown");
tmpDef.description = "";
tmpDef.args = [];
tmpDef.returnType = "boolean";
KeyboardClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("iscontrol");
tmpDef.description = "Checks if the specified character (from a keyboard event for example) is a control character as defined by Java's Character class. Control characters are usually not printable.";
tmpDef.args = ["char"];
tmpDef.returnType = "boolean";
KeyboardClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("iscontroldown");
tmpDef.description = "Checks if one of the Control keys is currently being held by some user.";
tmpDef.args = [];
tmpDef.returnType = "boolean";
KeyboardClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("iskeydown");
tmpDef.description = "Checks if a specific key is currently being by some user. If a number is specified it is assumed it's a key code. If a string is specified it is assumed it's a single character, such as the ones passed by keyboard events.";
tmpDef.args = ["charOrCode"];
tmpDef.returnType = "boolean";
KeyboardClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("isshiftdown");
tmpDef.description = "Checks if one of the Shift keys is currently being held by some user.";
tmpDef.args = [];
tmpDef.returnType = "boolean";
KeyboardClassDefinition.methods.push(tmpDef);
