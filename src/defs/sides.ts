'use strict';

import { LuaClass, LuaField } from "./defs";

export var SidesClassDefinition : LuaClass;

let tmpField :LuaField;

//https://ocdoc.cil.li/api:sides

SidesClassDefinition = new LuaClass("sides");
SidesClassDefinition.description = "This “API” provides a global table to allow you to refer to sides / directions by name, as opposed to their numbers. The underlying number values are identical to Minecraft's internal numbering (as well as the ForgeDirection Enum). This table serves as a two-directional look-up, so you can resolve names to numbers, but also numbers back to a human readable name. For example, sides.top has the value 1, whereas sides[1] has the string value top.";

tmpField = new LuaField("bottom", "Number: 0");
SidesClassDefinition.fields.push(tmpField);
tmpField = new LuaField("down", "Number: 0");
SidesClassDefinition.fields.push(tmpField);
tmpField = new LuaField("negy", "Number: 0");
SidesClassDefinition.fields.push(tmpField);

tmpField = new LuaField("top", "Number: 1");
SidesClassDefinition.fields.push(tmpField);
tmpField = new LuaField("up", "Number: 1");
SidesClassDefinition.fields.push(tmpField);
tmpField = new LuaField("posy", "Number: 1");
SidesClassDefinition.fields.push(tmpField);

tmpField = new LuaField("back", "Number: 2");
SidesClassDefinition.fields.push(tmpField);
tmpField = new LuaField("north", "Number: 2");
SidesClassDefinition.fields.push(tmpField);
tmpField = new LuaField("negz", "Number: 2");
SidesClassDefinition.fields.push(tmpField);

tmpField = new LuaField("front", "Number: 3");
SidesClassDefinition.fields.push(tmpField);
tmpField = new LuaField("south", "Number: 3");
SidesClassDefinition.fields.push(tmpField);
tmpField = new LuaField("posz", "Number: 3");
SidesClassDefinition.fields.push(tmpField);
tmpField = new LuaField("forward", "Number: 3");
SidesClassDefinition.fields.push(tmpField);

tmpField = new LuaField("right", "Number: 4");
SidesClassDefinition.fields.push(tmpField);
tmpField = new LuaField("west", "Number: 4");
SidesClassDefinition.fields.push(tmpField);
tmpField = new LuaField("negx", "Number: 4");
SidesClassDefinition.fields.push(tmpField);

tmpField = new LuaField("left", "Number: 5");
SidesClassDefinition.fields.push(tmpField);
tmpField = new LuaField("east", "Number: 5");
SidesClassDefinition.fields.push(tmpField);
tmpField = new LuaField("posx", "Number: 5");
SidesClassDefinition.fields.push(tmpField);