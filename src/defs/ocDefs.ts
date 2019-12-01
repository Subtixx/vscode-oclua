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
import { SerializationClassDefinition } from "./serialization";
import { ShellClassDefinition } from "./shell";
import { SidesClassDefinition } from "./sides";
import { TermClassDefinition } from "./term";
import { TextClassDefinition } from "./text";
import { TransformsClassDefinition } from "./transforms";
import { UnicodeClassDefinition } from "./unicode";

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

//https://ocdoc.cil.li/api:serialization
OpenComputerClassDefinitions.push(SerializationClassDefinition);

//https://ocdoc.cil.li/api:shell
OpenComputerClassDefinitions.push(ShellClassDefinition);

//https://ocdoc.cil.li/api:sides
OpenComputerClassDefinitions.push(SidesClassDefinition);

//https://ocdoc.cil.li/api:term
OpenComputerClassDefinitions.push(TermClassDefinition);

//https://ocdoc.cil.li/api:text
OpenComputerClassDefinitions.push(TextClassDefinition);

//https://ocdoc.cil.li/api:transforms
OpenComputerClassDefinitions.push(TransformsClassDefinition);

//https://ocdoc.cil.li/api:unicode
OpenComputerClassDefinitions.push(UnicodeClassDefinition);