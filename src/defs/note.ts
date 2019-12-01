'use strict';

import { LuaClass, LuaMethod } from "./defs";

export var NoteClassDefinition : LuaClass;

let tmpDef :LuaMethod;

//https://ocdoc.cil.li/api:note

NoteClassDefinition = new LuaClass("note");
NoteClassDefinition.description = "The Note API provides functionality to convert music notes into their respective MIDI code and/or their frequency in Hertz, among other things. It it used in combination with computer.beep and note blocks (using OpenComponents).";

tmpDef = new LuaMethod("midi");
tmpDef.description = "Converts a note in string form (e.g. A#4 or Gb3, see below) or a given frequency into the respective MIDI code";
tmpDef.args = ["n"];
tmpDef.returnType = "number";
NoteClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("freq");
tmpDef.description = "Converts a note in string form (e.g. A#4) or a given MIDI code into the respective frequency";
tmpDef.args = ["n"];
tmpDef.returnType = "number";
NoteClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("name");
tmpDef.description = "Converts a MIDI value back into a string; if you have a frequency to convert, just use `note.name(note.midi(frequency))`";
tmpDef.args = ["n"];
tmpDef.returnType = "string";
NoteClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("ticks");
tmpDef.description = "Converts note block ticks (0-24) into MIDI code (34-58, respectively) and vice-versa. Useful for use with Note Blocks and OpenComponents";
tmpDef.args = ["n"];
tmpDef.returnType = "number";
NoteClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("play");
tmpDef.description = "Plays a note from a string or MIDI code via computer.beep with the specified duration";
tmpDef.args = ["tone", "duration"];
NoteClassDefinition.methods.push(tmpDef);
