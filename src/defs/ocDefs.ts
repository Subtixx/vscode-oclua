'use scrict';

import { LuaFunction, LuaClass } from "./defs";

import { ComponentClassDefinition } from "./component";
import { ColorClassDefinition } from "./colors";
import { EventClassDefinition } from "./event";
import { ComputerClassDefinition } from "./computer";
import { FilesystemClassDefinition } from "./filesystem";

export var OpenComputerDefinitions = new Array<LuaFunction>();
export var OpenComputerClassDefinitions = new Array<LuaClass>();

//https://ocdoc.cil.li/api:component
OpenComputerClassDefinitions.push(ComponentClassDefinition);

//https://ocdoc.cil.li/api:colors
OpenComputerClassDefinitions.push(ColorClassDefinition);

//https://ocdoc.cil.li/api:event
OpenComputerClassDefinitions.push(EventClassDefinition);

//https://ocdoc.cil.li/api:computer
OpenComputerClassDefinitions.push(ComputerClassDefinition);

//https://ocdoc.cil.li/api:filesystem
OpenComputerClassDefinitions.push(FilesystemClassDefinition);

/*let tmpDef : LuaFunction;
let tmpClassDef : LuaClass;
let tmpField : LuaField;*/
