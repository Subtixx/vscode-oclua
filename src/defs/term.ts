'use strict';

import { LuaClass, LuaMethod } from "./defs";

export var TermClassDefinition : LuaClass;

let tmpDef :LuaMethod;

//https://ocdoc.cil.li/api:term

TermClassDefinition = new LuaClass("term");
TermClassDefinition.description = "Provides a simplified way of writing text to screens and reading user input, so you don't have to manually interact with the GPU API for these cases. ";

tmpDef = new LuaMethod("isAvailable");
tmpDef.description = "Returns whether the term API is available for use, i.e. whether a primary GPU and screen are present. In other words, whether term.read and term.write will actually do something.";
tmpDef.returnType = "boolean";
tmpDef.module = TermClassDefinition.label;
TermClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("getViewport");
tmpDef.description = "Gets the width, height, x offset, y offset, relative x, and relative y values.";
tmpDef.returnType = "number, number, number, number, number, number";
tmpDef.module = TermClassDefinition.label;
TermClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("gpu");
tmpDef.description = "Gets the gpu proxy used by the term api.";
tmpDef.returnType = "table";
tmpDef.module = TermClassDefinition.label;
TermClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("pull");
tmpDef.description = "Acts exactly like event.pull taking the same parameters and returning the same results. This method is used to blink the cursor while waiting for an event result.";
tmpDef.args = ["[...]"];
tmpDef.returnType = "...";
tmpDef.module = TermClassDefinition.label;
TermClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("getCursor");
tmpDef.description = "Gets the current position of the cursor.";
tmpDef.returnType = "number, number";
tmpDef.module = TermClassDefinition.label;
TermClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("setCursor");
tmpDef.description = "Sets the cursor position to the specified coordinates.";
tmpDef.args = ["col", "row"];
tmpDef.module = TermClassDefinition.label;
TermClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("getCursorBlink");
tmpDef.description = "Gets whether the cursor blink is currently enabled, i.e whether the cursor alternates between the actual “pixel” displayed at the cursor position and a fully white block every half second.";
tmpDef.returnType = "boolean";
tmpDef.module = TermClassDefinition.label;
TermClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("setCursorBlink");
tmpDef.description = "Sets whether cursor blink should be enabled or not.";
tmpDef.args = ["enabled"];
tmpDef.module = TermClassDefinition.label;
TermClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("clear");
tmpDef.description = "Clears the complete screen and resets the cursor position to (1, 1).";
tmpDef.module = TermClassDefinition.label;
TermClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("clearLine");
tmpDef.description = "Clears the line the cursor is currently on and resets the cursor's horizontal position to 1.";
tmpDef.module = TermClassDefinition.label;
TermClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("read");
tmpDef.description = "Read some text from the terminal, i.e. allow the user to input some text. For example, this is used by the shell and Lua interpreter to read user input. This will make the rest of the current line, starting at the current cursor position, an editable area. It allows input, deletion and navigating to the left and right via the arrow keys and home/end keys.\n\nsince OpenOS 1.6 the parameter list as specified here is considered deprecated. The first parameter is an options argument. The indexed array values are treated as history, named keys take the place of legacy arguments. For compatibility, OpenOS 1.6 will respect the previous usage, i.e. parameter list.\nThe new ops parameter supports a new key, nowrap. The default behavior of term.read wrap the cursor and input vertically. Legacy behavior scrolled the input horizontally, i.e. term.read({nowrap=true})\n\nThe optional history table can be used to provide predefined text that can be cycled through via the up and down arrow keys. It must be a sequence (i.e. the keys must be a gap-less integral interval starting at 1). This is used for the command history in shell and Lua interpreter, for example. If text is entered and confirmed with enter, it will be added to the end of this table.\nThe dobreak parameter, when set to false (nil defaults to true!) will not enter a new line after input was completed (e.g. by the user pressing enter).\nThe hint parameter is used for tab completion. It can either be a table with strings or a function that returns a table of strings and takes two parameters, the current text and the position in that text, i.e. the signature of the callback is function(line:string, pos:number):table.\nThe pwchar parameter, when given, causes input to be masked using the first char of the given string. For example, providing \"*\" will make all entered characters appear as stars. The returned value will still be the actual text inserted, of course.\nThe function will return a string if input was successful, nil if the pipe was closed (^d), or false if the pipe was interrupted (^c)\n\nNote: io.stdin:read() uses this function.\nNote 2: This will return the entered string with the \n (new line character). If you want only the entered string to be returned, use io.read(). ";
tmpDef.args = ["[history]", "[dobreak]", "[hint]", "[pwchar]"];
tmpDef.returnType = "string";
tmpDef.module = TermClassDefinition.label;
TermClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("write");
tmpDef.description = "Allows writing optionally wrapped text to the terminal starting at the current cursor position, updating the cursor accordingly. It automatically converts tab characters to spaces using text.detab. If wrap is true, it will automatically word-wrap the text. It will scroll the displayed buffer if the cursor exceeds the bottom of the display area, but not if it exceeds the right of the display area (when wrap is false).\n*Note: This method respects io redirection. That is to say, term.write writes to the same stream as io.stdout*";
tmpDef.args = ["value", "wrap"];
tmpDef.module = TermClassDefinition.label;
TermClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("bind");
tmpDef.description = "Binds a gpu proxy (not address) to the terminal. This method is called automatically during boot when the gpu and screen become available. Note that if manually rebinding a terminal to a screen with different width and height, the terminal draw area will be truncated and not maximized. This changes the gpu used in all terminal output, not just via the term api, i.e. io.write, print, io.stdout:write, etc all use the same output stream, and term.bind is used to change the gpu used. ";
tmpDef.args = ["gpu"];
tmpDef.module = TermClassDefinition.label;
TermClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("screen");
tmpDef.description = "Convenience method, simply calls getScreen on the terminal's bound gpu (see term.bind)";
tmpDef.returnType = "string";
tmpDef.module = TermClassDefinition.label;
TermClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("keyboard");
tmpDef.description = "Gets the address of the keyboard the terminal is accepting key events from.";
tmpDef.returnType = "string";
tmpDef.module = TermClassDefinition.label;
TermClassDefinition.methods.push(tmpDef);