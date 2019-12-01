'use strict';

import { LuaClass, LuaMethod } from "./defs";

export var FilesystemClassDefinition : LuaClass;

let tmpDef :LuaMethod;

FilesystemClassDefinition = new LuaClass("filesystem");
FilesystemClassDefinition.description = "This library allows a general way of interacting with file system components. While each component is it's own “folder”, these folders can be “mounted” somewhere into a global directory tree. This allows seamlessly interacting on multiple file system components.";

tmpDef = new LuaMethod("isautorunenabled");
tmpDef.description = "Returns whether autorun is currently enabled. If this is true, newly mounted file systems will be checked for a file named autorun[.lua] in their root directory. If such a file exists, it is executed.";
tmpDef.args = [];
tmpDef.returnType = "boolean";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("setAutorunEnabled");
tmpDef.description = "Sets whether autorun files should be ran on startup.";
tmpDef.args = ["value"];
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("canonical");
tmpDef.description = "Returns the canonical form of the specified path, i.e. a path containing no “indirections” such as . or ... For example, the paths /tmp/../bin/ls.lua and /bin/./ls.lua are equivalent, and their canonical form is /bin/ls.lua.\n*Note that this function truncates relative paths to their topmost “known” directory. For example, ../bin/ls.lua becomes bin/ls.lua. It stays a relative path, however - mind the lack of a leading slash.*";
tmpDef.args = ["path"];
tmpDef.returnType = "string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("segments");
tmpDef.description = "Returns a table containing one entry for each canonical segment of the given path. Examples:\n\`\`\`ocluatypes\nfilesystem.segments(\"foo/bar\") → {\"foo\",\"bar\"}\nfilesystem.segments(\"foo/bar/../baz\") → {\"foo","baz\"}\`\`\`";
tmpDef.args = ["path"];
tmpDef.returnType = "table";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("concat");
tmpDef.description = "Concatenates two or more paths. Note that all paths other than the first are treated as relative paths, even if they begin with a slash. The canonical form of the resulting concatenated path is returned, so fs.concat(\"a\", \"..\") results in an empty string.";
tmpDef.args = ["pathA", "pathB", "[...]"];
tmpDef.returnType = "string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("path");
tmpDef.description = "Returns the path component of a path to a file, i.e. everything before the last slash in the canonical form of the specified path.";
tmpDef.args = ["path"];
tmpDef.returnType = "string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("name");
tmpDef.description = "Returns the file name component of a path to a file, i.e. everything after the last slash in the canonical form of the specified path.";
tmpDef.args = ["path"];
tmpDef.returnType = "string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("proxy");
tmpDef.description = "This is similar to component.proxy, except that the specified string may also be a file system component's label. We check for the label first, if no file system has the specified label we fall back to component.proxy. Returns the proxy of the specified file system, or nil and an error message if no file system matching the specified filter was found.";
tmpDef.args = ["filter"];
tmpDef.returnType = "table or nil, string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("mount");
tmpDef.description = "Mounts a file system at the specified path. The first parameter can be either a file system component's proxy, its address or its label. The second is a path into the global directory tree. Returns true if the file system was successfully mounted, nil and an error message otherwise.";
tmpDef.args = ["fs", "path"];
tmpDef.returnType = "boolean or nil, string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("mounts");
tmpDef.description = "Returns an iterator function over all currently mounted file system component's proxies and the paths at which they are mounted. This means the same proxy may appear multiple times, but with different mount paths.";
tmpDef.args = [];
tmpDef.returnType = "function -> table, string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("umount");
tmpDef.description = "Unmounts a file system. The parameter can either be a file system component's proxy or (abbreviated) address, in which case all mount points of this file system will be removed, or a path into the global directory structure, in which case the file system mount containing that directory will be unmounted.";
tmpDef.args = ["fsOrPath"];
tmpDef.returnType = "boolean";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("islink");
tmpDef.description = "Checks if the object at the specified path is a symlink, if so returns the path to where it links (as of 1.3.3).";
tmpDef.args = ["path"];
tmpDef.returnType = "boolean[, string]";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("link");
tmpDef.description = "Creates a symbolic link to the specified target path at the specified path. This is a 'soft' link, i.e. it the target file does not actually have to exist at the time of creation, and the link will not be deleted if the target file is deleted. Symbolic links do not persist across reboots.";
tmpDef.args = ["target", "linkpath"];
tmpDef.returnType = "boolean or nil, string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("get");
tmpDef.description = "Gets the file system component's proxy that contains the specified path. Returns the proxy and mount path, or nil and an error message.";
tmpDef.args = ["path"];
tmpDef.returnType = "table, string or nil, string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("exists");
tmpDef.description = "Checks whether a file or folder exist at the specified path.";
tmpDef.args = ["path"];
tmpDef.returnType = "boolean";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("size");
tmpDef.description = "Gets the file size of the file at the specified location. Returns 0 if the path points to anything other than a file.";
tmpDef.args = ["path"];
tmpDef.returnType = "number";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("isdirectory");
tmpDef.description = "Gets whether the path points to a directory. Returns false if not, either because the path points to a file, or file.exists(path) is false.";
tmpDef.args = ["path"];
tmpDef.returnType = "boolean";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("lastmodified");
tmpDef.description = "Returns the real world unix timestamp of the last time the file at the specified path was modified. For directories this is usually the time of their creation.";
tmpDef.args = ["path"];
tmpDef.returnType = "number";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("list");
tmpDef.description = "Returns an iterator over all elements in the directory at the specified path. Returns nil and an error messages if the path is invalid or some other error occurred.\n*Note that directories usually are postfixed with a slash, to allow identifying them without an additional call to fs.isDirectory.*";
tmpDef.args = ["path"];
tmpDef.returnType = "function -> string or nil, string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("makedirectory");
tmpDef.description = "Creates a new directory at the specified path. Creates any parent directories that do not exist yet, if necessary. Returns true on success, nil and an error message otherwise.";
tmpDef.args = ["path"];
tmpDef.returnType = "boolean or nil, string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("remove");
tmpDef.description = "Deletes a file or folder. If the path specifies a folder, deletes all files and subdirectories in the folder, recursively. Return true on success, nil and an error message otherwise.";
tmpDef.args = ["path"];
tmpDef.returnType = "boolean or nil, string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("rename");
tmpDef.description = "Renames a file or folder. If the paths point to different file system components this will only work for files, because it actually perform a copy operation, followed by a deletion if the copy succeeds.\nReturns true on success, nil and an error message otherwise.";
tmpDef.args = ["oldPath", "newPath"];
tmpDef.returnType = "boolean or nil, string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("copy");
tmpDef.description = "Copies a file to the specified location. The target path has to contain the target file name. Does not support folders.";
tmpDef.args = ["fromPath", "toPath"];
tmpDef.returnType = "boolean or nil, string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("open");
tmpDef.description = "Opens a file at the specified path for reading or writing. If mode is not specified it defaults to “r”. Possible modes are: r, rb, w, wb, a and ab.\nReturns a file stream (see below) on success, nil and an error message otherwise.\n*Note that you can only open a limited number of files per file system at the same time. Files will be automatically closed when the garbage collection kicks in, but it is generally a good idea to call close on the file stream when done with the file.*\n*Important: it is generally recommended to use io.open instead of this function, to get a buffered wrapper for the file stream.*\nWhen opening files directly via the file system API you will get a file stream, a table with four functions. These functions are thin wrappers to the file system proxy's callbacks, which also means that read/write operations are not buffered, and can therefore be slow when reading few bytes often. You'll usually want to use io.open instead.";
tmpDef.args = ["path", "[mode]"];
tmpDef.returnType = "table or nil, string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("close");
tmpDef.description = "Closes the file stream, releasing the handle on the underlying file system.";
tmpDef.args = [];
tmpDef.returnType = "";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("read");
tmpDef.description = "Tries to read the specified number of bytes from the file stream. Returns the read string, which may be shorter than the specified number. Returns nil when the end of the stream was reached. Returns nil and an error message if some error occurred.";
tmpDef.args = ["n"];
tmpDef.returnType = "string or nil, string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("seek");
tmpDef.description = "Jumps to the specified position in the file stream, if possible. Only supported by file streams opened in read mode. The first parameter determines the relative location to seek from and can be cur for the current position, set for the beginning of the stream and end for the end of the stream. The second parameter is the offset by which to modify the position. Returns the new position or nil and an error message if some error occurred.\nThe default value for the second parameter is 0, so f:seek(\"set\") will reset the position to the start of the file, f:seek(\"cur\") will return the current position in the file.";
tmpDef.args = ["whence", "[offset]"];
tmpDef.returnType = "number or nil, string";
FilesystemClassDefinition.methods.push(tmpDef);

tmpDef = new LuaMethod("write");
tmpDef.description = "Writes the specified data to the stream. Returns true on success, nil and an error message otherwise.";
tmpDef.args = ["str"];
tmpDef.returnType = "boolean or nil, string";
FilesystemClassDefinition.methods.push(tmpDef);