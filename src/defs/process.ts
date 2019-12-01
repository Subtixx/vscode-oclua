'use strict';

import { LuaClass, LuaMethod } from "./defs";

export var ProcessClassDefinition : LuaClass;

let tmpDef :LuaMethod;

//https://ocdoc.cil.li/api:process

ProcessClassDefinition = new LuaClass("process");
ProcessClassDefinition.description = "This API provides rudimentary process management. It is used mainly by the io module to provide individual standard input and output to individual programs.\nIt can be helpful to think of a process as a coroutine with extra metadata. A process inherits the metadata of its parent, but can define its own. Such metadata supports stdio and terminal windows. All coroutines created are grouped like child threads of the current process.";

tmpDef = new LuaMethod("load");
tmpDef.description = "Loads a Lua script from the specified absolute path and sets it up as a process.\nIt will be loaded with a custom environment, to avoid cluttering the callers/global environment. This environment will have access to anything in the specified environment, or the default (top level) environment if none is given.\n(since OpenOS 1.6) path can also be a function, in which case env must be nil.\nIf an init function is specified, that method is called the first time the resulting coroutine is executed, and run before the actual program is started. This allows fine-tuning of the programs environment.\nIf a name is specified, that is the name the process will specify in process.running. It will be nil otherwise.";
tmpDef.args = ["path", "[env]", "[init]", "[name]"];
tmpDef.returnType = "coroutine";
tmpDef.module = "process";
ProcessClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("info");
tmpDef.description = "Returns a table containing the command and path of the specified process, and some other data. The level can optionally be provided to get parent processes. It defaults to 1, the current program. 2 is the current program's parent (the one that called process.load to start the current program) and so on.";
tmpDef.args = ["[level]"];
tmpDef.returnType = "table";
tmpDef.module = "process";
ProcessClassDefinition.methods.push(tmpDef);