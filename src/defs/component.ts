'use scrict';

import { LuaClass, LuaFunction } from "./defs";

export var ComponentClassDefinition : LuaClass;

let tmpDef : LuaFunction;
/*
component.doc(address:string, method:string): string
Returns the documentation string for the method with the specified name of the component with the specified address, if any. Note that you can also get this string by using tostring on a method in a proxy, for example tostring(component.screen.isOn).

component.invoke(address:string, method:string[, ...]): ...
Calls the method with the specified name on the component with the specified address, passing the remaining arguments as arguments to that method. Returns the result of the method call, i.e. the values returned by the method. Depending on the called method's implementation this may throw.

component.list([filter:string[, exact:boolean]]):function
Returns a table with all components currently attached to the computer, with address as a key and component type as a value. It also provides iterator syntax via __call, so you can use it like so: for address, componentType in component.list() do ... end
If filter is set this will only return components that contain the filter string (this is not a pattern/regular expression). For example, component.list("red") will return redstone components.
If true is passed as a second parameter, exact matching is enforced, e.g. red will not match redstone.

component.methods(address:string):table
Returns a table with the names of all methods provided by the component with the specified address. The names are the keys in the table, the values indicate whether the method is called directly or not.

component.proxy(address:string):table
Gets a 'proxy' object for a component that provides all methods the component provides as fields, so they can be called more directly (instead of via invoke). This is what's used to generate 'primaries' of the individual component types, i.e. what you get via component.blah.
For example, you can use it like so: component.proxy(component.list("redstone")()).getInput(sides.north), which gets you a proxy for the first redstone component returned by the component.list iterator, and then calls getInput on it.
Note that proxies will always have at least two fields, type with the component's type name, and address with the component's address.

component.type(address:string):string
Get the component type of the component with the specified address.

component.slot(address:string):string
Return slot number which the component is installed into. Returns -1 if it doesn't otherwise make sense.

component.fields(address:string):string
Undocumented

component.get(address: string[, componentType: string]): string | (nil, string)
Tries to resolve an abbreviated address to a full address. Returns the full address on success, or nil and an error message otherwise. Optionally filters by component type.

component.isAvailable(componentType: string): boolean
Checks if there is a primary component of the specified component type.

component.getPrimary(componentType: string): table
Gets the proxy for the primary component of the specified type. Throws an error if there is no primary component of the specified type.

component.setPrimary(componentType: string, address: string)
Sets a new primary component for the specified component type. The address may be abbreviated, but must be valid if it is not nil. Triggers the component_unavailable and component_available signals if set to nil or a new value, respectively. 
*/

ComponentClassDefinition = new LuaClass("component");
ComponentClassDefinition.description = "The component API is used to access and interact with components available to a computer. Also see the page on component interaction.";

tmpDef = new LuaFunction();
tmpDef.module = "component";
tmpDef.label = "doc";
tmpDef.description = "Returns the documentation string for the method with the specified name of the component with the specified address, if any. Note that you can also get this string by using tostring on a method in a proxy, for example tostring(component.screen.isOn).";
tmpDef.args = ["address", "method"];
tmpDef.argDescs = {};
tmpDef.returnType = "string";

ComponentClassDefinition.methods.push(tmpDef);

tmpDef = new LuaFunction();
tmpDef.module = "component";
tmpDef.label = "invoke";
tmpDef.description = "Calls the method with the specified name on the component with the specified address, passing the remaining arguments as arguments to that method. Returns the result of the method call, i.e. the values returned by the method. Depending on the called method's implementation this may throw.";
tmpDef.args = ["address", "method", "[...]"];
tmpDef.argDescs = {};
tmpDef.returnType = "...";

ComponentClassDefinition.methods.push(tmpDef);

tmpDef = new LuaFunction();
tmpDef.module = "component";
tmpDef.label = "list";
tmpDef.description = "Returns a table with all components currently attached to the computer, with address as a key and component type as a value. It also provides iterator syntax via __call, so you can use it like so: \`\`\`ocluatypes\nfor address, componentType in component.list() do\n\t...\nend\nIf filter is set this will only return components that contain the filter string (this is not a pattern/regular expression). For example, component.list(\"red\") will return redstone components.\nIf true is passed as a second parameter, exact matching is enforced, e.g. red will not match redstone.";
tmpDef.args = ["filter", "exact"];
tmpDef.argDescs = {};
tmpDef.returnType = "function";

ComponentClassDefinition.methods.push(tmpDef);

tmpDef = new LuaFunction();
tmpDef.module = "component";
tmpDef.label = "methods";
tmpDef.description = "Returns a table with the names of all methods provided by the component with the specified address. The names are the keys in the table, the values indicate whether the method is called directly or not.";
tmpDef.args = ["address"];
tmpDef.argDescs = {};
tmpDef.returnType = "table";

ComponentClassDefinition.methods.push(tmpDef);

tmpDef = new LuaFunction();
tmpDef.module = "component";
tmpDef.label = "proxy";
tmpDef.description = "Gets a 'proxy' object for a component that provides all methods the component provides as fields, so they can be called more directly (instead of via invoke). This is what's used to generate 'primaries' of the individual component types, i.e. what you get via component.blah.\nFor example, you can use it like so: ```ocluatypes\ncomponent.proxy(component.list(\"redstone\")()).getInput(sides.north)\n```\nwhich gets you a proxy for the first redstone component returned by the component.list iterator, and then calls getInput on it.";
tmpDef.args = ["address"];
tmpDef.argDescs = {};
tmpDef.returnType = "table";

ComponentClassDefinition.methods.push(tmpDef);

tmpDef = new LuaFunction();
tmpDef.module = "component";
tmpDef.label = "type";
tmpDef.description = "Get the component type of the component with the specified address.";
tmpDef.args = ["address"];
tmpDef.argDescs = {};
tmpDef.returnType = "string";

ComponentClassDefinition.methods.push(tmpDef);

tmpDef = new LuaFunction();
tmpDef.module = "component";
tmpDef.label = "slot";
tmpDef.description = "Return slot number which the component is installed into. Returns -1 if it doesn't otherwise make sense.";
tmpDef.args = ["address"];
tmpDef.argDescs = {};
tmpDef.returnType = "string";

ComponentClassDefinition.methods.push(tmpDef);

tmpDef = new LuaFunction();
tmpDef.module = "component";
tmpDef.label = "fields";
tmpDef.description = "Undocumented";
tmpDef.args = ["address"];
tmpDef.argDescs = {};
tmpDef.returnType = "string";

ComponentClassDefinition.methods.push(tmpDef);

tmpDef = new LuaFunction();
tmpDef.module = "component";
tmpDef.label = "get";
tmpDef.description = "Tries to resolve an abbreviated address to a full address. Returns the full address on success, or nil and an error message otherwise. Optionally filters by component type.";
tmpDef.args = ["address", "componentType"];
tmpDef.argDescs = {};
tmpDef.returnType = "string | (nil, string)";

ComponentClassDefinition.methods.push(tmpDef);

tmpDef = new LuaFunction();
tmpDef.module = "component";
tmpDef.label = "isAvailable";
tmpDef.description = "Checks if there is a primary component of the specified component type.";
tmpDef.args = ["componentType"];
tmpDef.argDescs = {};
tmpDef.returnType = "boolean";

ComponentClassDefinition.methods.push(tmpDef);

tmpDef = new LuaFunction();
tmpDef.module = "component";
tmpDef.label = "getPrimary";
tmpDef.description = "Gets the proxy for the primary component of the specified type. Throws an error if there is no primary component of the specified type.";
tmpDef.args = ["componentType"];
tmpDef.argDescs = {};
tmpDef.returnType = "table";

ComponentClassDefinition.methods.push(tmpDef);

tmpDef = new LuaFunction();
tmpDef.module = "component";
tmpDef.label = "setPrimary";
tmpDef.description = "Sets a new primary component for the specified component type. The address may be abbreviated, but must be valid if it is not nil. Triggers the component_unavailable and component_available signals if set to nil or a new value, respectively.";
tmpDef.args = ["componentType", "address"];
tmpDef.argDescs = {};

ComponentClassDefinition.methods.push(tmpDef);