'use strict';

import { LuaClass, LuaFunction } from "./defs";

export var EventClassDefinition : LuaClass;


let tmpDef : LuaFunction;
/*
// https://ocdoc.cil.li/api:event
event.listen(event: string, callback: function): boolean
Register a new event listener that should be called for events with the specified name.
event - name of the signal to listen to.
callback - the function to call if this signal is received. The function will receive the event name it was registered for as first parameter, then all remaining parameters as defined by the signal that caused the event.
Returns: number, the event id which can be canceled via event.cancel, if the event was successfully registered, false if this function was already registered for this event type.

event.ignore(event: string, callback: function): boolean
Unregister a previously registered event listener.
event - name of the signal to unregister.
callback - the function that was used to register for this event.
Returns: true if the event was successfully unregistered, false if this function was not registered for this event type.
Note: An event listeners may return false to unregister themselves, which is equivalent to calling event.ignore and passing the listener with the event name it was registered for.

event.timer(interval: number, callback: function[, times: number]): number
Starts a new timer that will be called after the time specified in interval.
interval - time in seconds between each invocation of the callback function. Can be a fraction like 0.05.
callback - the function to call.
times - how many times the function will be called. If omitted the function will be called once. Pass math.huge for infinite repeat.
Returns: a timer ID that can be used to cancel the timer at any time.
Note: the timer resolution can vary. If the computer is idle and enters sleep mode, it will only be woken in a game tick, so the time the callback is called may be up to 0.05 seconds off.

event.cancel(timerId: number): boolean
Cancels a timer previously created with event.timer.
timerId - a timer ID as returned by event.timer.
Returns: true if the timer was stopped, false if there was no timer with the specified ID.

event.pull([timeout: number], [name: string], ...): string, ...
Pulls and returns the next available event from the queue, or waits until one becomes available.
timeout - if passed the function will wait for a new event for this many seconds at maximum then returns nil if no event was queued during that time.
name - an event pattern that will act as a filter. If given then only events that match this pattern will be returned. Can be nil in which case the event names will not be filtered. See string.match on how to use patterns.
… - any number of parameters in the same order as defined by the signal that is expected. Those arguments will act as filters for the additional arguments returned by the signal. Direct equality is used to determine if the argument is equal to the given filter. Can be nil in which case this particular argument will not be filtered.
Filter example:
The touch signal (when a player clicks on a tier two or three screen) has the signature screenX: number, screenY: number, playerName: string
To only pull clicks by player “Steve” you'd do:
local _, x, y = event.pull("touch", nil, nil, "Steve")

event.pullFiltered([timeout: number], [filter: function]): string, ... (Since 1.5.9) Pulls and returns the next available event from the queue, or waits until one becomes available but allows filtering by specifying filter function. timeout - if passed the function will wait for a new event for this many seconds at maximum then returns nil if no event was queued during that time.
filter - if passed the function will use it as a filtering function of events. Allows for advanced filtering. 
*/

EventClassDefinition = new LuaClass("event");
EventClassDefinition.description = "The Event API provides a basic event system to allow your code to react to signals sent by the OS or other programs/libraries.\nFor example, this can be used to capture keys pressed, react if an external screen is attached or removed, or handle incoming network messages.";

tmpDef = new LuaFunction();
tmpDef.module = "event";
tmpDef.label = "listen";
tmpDef.description = "Register a new event listener that should be called for events with the specified name.";
tmpDef.args = ["event", "callback"];
tmpDef.argDescs = {};
tmpDef.argDescs["event"] = "name of the signal to listen to.";
tmpDef.argDescs["callback"] = "the function to call if this signal is received. The function will receive the event name it was registered for as first parameter, then all remaining parameters as defined by the signal that caused the event.";
tmpDef.returnType = "number";

tmpDef = new LuaFunction();
tmpDef.module = "event";
tmpDef.label = "ignore";
tmpDef.description = "Unregister a previously registered event listener.\n*Note: An event listeners may return false to unregister themselves, which is equivalent to calling event.ignore and passing the listener with the event name it was registered for.*";
tmpDef.args = ["event", "callback"];
tmpDef.argDescs = {};
tmpDef.argDescs["event"] = "name of the signal to unregister.";
tmpDef.argDescs["callback"] = "the function that was used to register for this event.";
tmpDef.returnType = "boolean"; // true if the event was successfully unregistered, false if this function was not registered for this event type.

tmpDef = new LuaFunction();
tmpDef.module = "event";
tmpDef.label = "timer";
tmpDef.description = "Starts a new timer that will be called after the time specified in interval.\n*Note: the timer resolution can vary. If the computer is idle and enters sleep mode, it will only be woken in a game tick, so the time the callback is called may be up to 0.05 seconds off.*";
tmpDef.args = ["interval", "callback", "[, times]"];
tmpDef.argDescs = {};
tmpDef.argDescs["event"] = "time in seconds between each invocation of the callback function. Can be a fraction like 0.05.";
tmpDef.argDescs["callback"] = "the function to call.";
tmpDef.argDescs["[, times]"] = "OPTIONAL: how many times the function will be called. If omitted the function will be called once. Pass math.huge for infinite repeat.";
tmpDef.returnType = "number"; // a timer ID that can be used to cancel the timer at any time.

tmpDef = new LuaFunction();
tmpDef.module = "event";
tmpDef.label = "cancel";
tmpDef.description = "Cancels a timer previously created with event.timer.";
tmpDef.args = ["timerID"];
tmpDef.argDescs = {};
tmpDef.argDescs["timerId"] = "a timer ID as returned by event.timer.";
tmpDef.returnType = "boolean"; // true if the timer was stopped, false if there was no timer with the specified ID.

tmpDef = new LuaFunction();
tmpDef.module = "event";
tmpDef.label = "pull";
tmpDef.description = "Pulls and returns the next available event from the queue, or waits until one becomes available.\nFilter example:\nThe touch signal (when a player clicks on a tier two or three screen) has the signature screenX: number, screenY: number, playerName: string\nTo only pull clicks by player “Steve” you'd do:\n\`\`\`ocluatypes\nlocal _, x, y = event.pull(\"touch\", nil, nil, \"Steve\")\n\`\`\`";
tmpDef.args = ["[timeout]", "[name]", "..."];
tmpDef.argDescs = {};
tmpDef.argDescs["[timeout]"] = "if passed the function will wait for a new event for this many seconds at maximum then returns nil if no event was queued during that time.";
tmpDef.argDescs["[name]"] = "an event pattern that will act as a filter. If given then only events that match this pattern will be returned. Can be nil in which case the event names will not be filtered. See string.match on how to use patterns.";
tmpDef.argDescs["..."] = "any number of parameters in the same order as defined by the signal that is expected. Those arguments will act as filters for the additional arguments returned by the signal. Direct equality is used to determine if the argument is equal to the given filter. Can be nil in which case this particular argument will not be filtered.";
tmpDef.returnType = "string, ..."; // true if the timer was stopped, false if there was no timer with the specified ID.

tmpDef = new LuaFunction();
tmpDef.module = "event";
tmpDef.label = "pullFiltered";
tmpDef.description = "Pulls and returns the next available event from the queue, or waits until one becomes available but allows filtering by specifying filter function. timeout - if passed the function will wait for a new event for this many seconds at maximum then returns nil if no event was queued during that time.";
tmpDef.args = ["[timeout]", "[filter]"];
tmpDef.argDescs = {};
tmpDef.argDescs["[timeout]"] = "if passed the function will wait for a new event for this many seconds at maximum then returns nil if no event was queued during that time.";
tmpDef.argDescs["[filter]"] = "if passed the function will use it as a filtering function of events. Allows for advanced filtering. ";
tmpDef.returnType = "string, ..."; // true if the timer was stopped, false if there was no timer with the specified ID.