'use strict';

import { LuaClass, LuaMethod } from "./defs";

export var InternetClassDefinition : LuaClass;

let tmpDef :LuaMethod;

//https://ocdoc.cil.li/api:internet

InternetClassDefinition = new LuaClass("internet");
InternetClassDefinition.description = "This library wraps functionality of Internet cards. Also see the Internet Component for more low level functionality (such as querying availability of HTTP and TCP functionality). ";

tmpDef = new LuaMethod("request");
tmpDef.description = "Sends an HTTP request to the specified URL, with the specified POST data, if any. If no data is specified, a GET request will be made. The POST data can be in one of two formats: if it's a string, it will be sent as-is. If it's a table, it will be converted to a string by assuming that each key is the name of a POST variable, and it's associated value is the value for that variable. method can be explicitly specified to values such as GET, POST, or PUT. Some examples: internet.request(url, {some = \"variable\", another = 1})\nWill send some=variable&another=1.\nThe returned function is an iterator over chunks of the result, use it like so:\nfor chunk in internet.request(...) do stuff() end\nNote that this method ALSO support HTTPS. So simply use internet.request(\"https://example.com\") to send a request through HTTPS.\nExample specifying PUT: internet.request(\"https://example.com\", \"put data\", {}, \"PUT\").";
tmpDef.args = ["url", "[data]", "[headers]", "[method]"];
tmpDef.returnType = "function";
InternetClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("socket");
tmpDef.description = "Opens a TCP socket using an internet component's connect method and wraps it in a table that provides the same methods as a file opened using filesystem.open: read, write and close (and seek, which will always fail). It is recommended to use internet.open instead, which will wrap the opened socket in a buffer, the same way io.open wraps files.\nThe read method on the returned socket is non-blocking. Read will instantly return, but may return an empty string if there is nothing to read. Write may block until all data has been successfully written. It'll usually return immediately, though.";
tmpDef.args = ["address", "[port]"];
tmpDef.returnType = "table";
InternetClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("open");
tmpDef.description = "Opens a buffered socket stream to the specified address. The stream can be read from and written from, using s:read and s:write - in general it can be treated much like files opened using io.open. It may often be desirable to set the buffer's read timeout using s:setTimeout(seconds), to avoid it blocking indefinitely. The read method on the returned buffer is blocking. Read will wait until some data is available to be read and return that.";
tmpDef.args = ["address", "[port]"];
tmpDef.returnType = "table";
InternetClassDefinition.methods.push(tmpDef);