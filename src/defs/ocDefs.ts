'use scrict';

import { LuaFunction, LuaClass } from "./defs";

import { ComponentClassDefinition } from "./component";
import { ColorClassDefinition } from "./colors";
import { EventClassDefinition } from "./event";
import { ComputerClassDefinition } from "./computer";
import { FilesystemClassDefinition } from "./filesystem";
import { UuidClassDefinition } from "./uuid";
import { InternetClassDefinition } from "./internet";
import { KeyboardClassDefinition } from "./keyboard";
import { NoteClassDefinition } from "./note";
import { ProcessClassDefinition } from "./process";
import { RobotClassDefinition } from "./robot";

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

//https://ocdoc.cil.li/api:uuid
OpenComputerClassDefinitions.push(UuidClassDefinition);

//https://ocdoc.cil.li/api:internet
OpenComputerClassDefinitions.push(InternetClassDefinition);

//https://ocdoc.cil.li/api:keyboard
OpenComputerClassDefinitions.push(KeyboardClassDefinition);

//https://ocdoc.cil.li/api:note
OpenComputerClassDefinitions.push(NoteClassDefinition);

//https://ocdoc.cil.li/api:process
OpenComputerClassDefinitions.push(ProcessClassDefinition);

//https://ocdoc.cil.li/api:robot
OpenComputerClassDefinitions.push(RobotClassDefinition);