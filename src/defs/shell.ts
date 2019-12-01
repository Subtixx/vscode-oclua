'use strict';

import { LuaClass, LuaMethod } from "./defs";

export var ShellClassDefinition : LuaClass;

let tmpDef :LuaMethod;

//https://ocdoc.cil.li/api:shell

ShellClassDefinition = new LuaClass("shell");
ShellClassDefinition.description = "This API provides shell related functionality, such as the current working directory, program search path and aliases for the shell.";

tmpDef = new LuaMethod("getAlias");
tmpDef.description = "Gets the value of a specified alias, if any. If there is no such alias returns nil.";
tmpDef.args = ["alias"];
tmpDef.returnType = "string";
tmpDef.module = ShellClassDefinition.label;
ShellClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("setAlias");
tmpDef.description = "Defines a new alias or updates an existing one. Pass nil as the value to remove an alias. Note that aliases are not limited to program names, you can include parameters as well. For example, view is a default alias for edit -r.";
tmpDef.args = ["alias", "value"];
tmpDef.module = ShellClassDefinition.label;
ShellClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("aliases");
tmpDef.description = "Returns an iterator over all known aliases.";
tmpDef.returnType = "function";
tmpDef.module = ShellClassDefinition.label;
ShellClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("getWorkingDirectory");
tmpDef.description = "Gets the path to the current working directory. This is an alias for ```ocluatypes\nos.getenv(\"PWD\")\n```";
tmpDef.returnType = "string";
tmpDef.module = ShellClassDefinition.label;
ShellClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("setWorkingDirectory");
tmpDef.description = "Sets the current working directory. This is a checked version of ```ocluatypes\nos.setenv(\"PWD\", dir)\n```";
tmpDef.args = ["dir"];
tmpDef.module = ShellClassDefinition.label;
ShellClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("getPath");
tmpDef.description = "Gets the search path used by shell.resolve. This can contain multiple paths, separated by colons (:).\nThis is an alias for `os.getenv(\"PATH\")`";
tmpDef.returnType = "string";
tmpDef.module = ShellClassDefinition.label;
ShellClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("setPath");
tmpDef.description = "Sets the search path. Note that this will replace the previous search paths. To add a new path to the search paths, do this:\nshell.setPath(shell.getPath() .. \":/some/path\")\nThis is an alias for ´os.setenv(\"PATH\", value)´.";
tmpDef.args = ["value"];
tmpDef.module = ShellClassDefinition.label;
ShellClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("resolve");
tmpDef.description = "Tries to “resolve” a path, optionally also checking for files with the specified extension, in which case path would only contain the name. This first searches the working directory, then all entries in the search path (see getPath/setPath).\nIf no file with the exact specified name exists and an extension is provided, it will also check for a file with that name plus the specified extension, i.e. for path .. \".\" .. ext.";
tmpDef.args = ["path", "[ext]"];
tmpDef.returnType = "string";
tmpDef.module = ShellClassDefinition.label;
ShellClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("execute");
tmpDef.description = "Runs the specified command. This runs the default shell (see os.getenv(\"SHELL\")) and passes the command to it. env is the environment table to use for the shell, and thus for the called program, in case you wish to sandbox it or avoid it cluttering the caller's namespace. Additional arguments are passed directly to the first program started based on the command, so you can pass non-string values to programs.\nReturns values similar to pcall and coroutine.resume: the first returned value is a boolean indicating success or error. In case of errors, the second returned value is a detailed error message. Otherwise the remaining returned values are the values that were returned by the specified program when it terminated.";
tmpDef.args = ["command", "env", "[...]"];
tmpDef.returnType = "boolean ...";
tmpDef.module = ShellClassDefinition.label;
ShellClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("parse");
tmpDef.description = "Utility methods intended for programs to parse their arguments. Will return two tables, the first one containing any “normal” parameters, the second containing “options”. Options are indicated by a leading -, and all options must only be a single character, since multiple characters following a single - will be interpreted as multiple options. Options specified with 2 dashes are not split and can have multiple letters. Also, 2-dash options can be given values by using an equal sign. The following examples all assume the script program parses the options using local args, ops = shell.parse(...). program ";
tmpDef.args = ["..."];
tmpDef.returnType = "table, table";
tmpDef.module = ShellClassDefinition.label;
ShellClassDefinition.methods.push(tmpDef);