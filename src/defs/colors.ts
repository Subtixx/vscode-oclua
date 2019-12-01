'use strict';

import { LuaClass, LuaField } from "./defs";

export var ColorClassDefinition : LuaClass;

let tmpField :LuaField;

//https://ocdoc.cil.li/api:colors

ColorClassDefinition = new LuaClass("colors");
ColorClassDefinition.description = "This “API” serves a global table that allows you to refer to colors by their name, instead of their associated ID/number. The table serves as a look-up in both directions, so for example colors.blue has the value 11, whereas colors[11] has the string value blue.";

tmpField = new LuaField("white", "Number: 0");
ColorClassDefinition.fields.push(tmpField);
tmpField = new LuaField("orange", "Number: 1");
ColorClassDefinition.fields.push(tmpField);
tmpField = new LuaField("magenta", "Number: 2");
ColorClassDefinition.fields.push(tmpField);
tmpField = new LuaField("lightblue", "Number: 3");
ColorClassDefinition.fields.push(tmpField);
tmpField = new LuaField("yellow", "Number: 4");
ColorClassDefinition.fields.push(tmpField);
tmpField = new LuaField("lime", "Number: 5");
ColorClassDefinition.fields.push(tmpField);
tmpField = new LuaField("pink", "Number: 6");
ColorClassDefinition.fields.push(tmpField);
tmpField = new LuaField("gray", "Number: 7");
ColorClassDefinition.fields.push(tmpField);
tmpField = new LuaField("silver", "Number: 8");
ColorClassDefinition.fields.push(tmpField);
tmpField = new LuaField("cyan", "Number: 9");
ColorClassDefinition.fields.push(tmpField);
tmpField = new LuaField("purple", "Number: 10");
ColorClassDefinition.fields.push(tmpField);
tmpField = new LuaField("blue", "Number: 11");
ColorClassDefinition.fields.push(tmpField);
tmpField = new LuaField("brown", "Number: 12");
ColorClassDefinition.fields.push(tmpField);
tmpField = new LuaField("green", "Number: 13");
ColorClassDefinition.fields.push(tmpField);
tmpField = new LuaField("red", "Number: 14");
ColorClassDefinition.fields.push(tmpField);
tmpField = new LuaField("black", "Number: 15");
ColorClassDefinition.fields.push(tmpField);