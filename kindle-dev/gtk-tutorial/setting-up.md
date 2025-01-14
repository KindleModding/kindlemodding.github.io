---
layout: default
grand_parent: Kindle Development
parent: GTK Tutorial
title: Setting Up The Project
nav_order: 2
has_children: true
---

# Setting Up The Project
Create a new git repository in a safe location, this will be where we write the code for our app

## Setting up the Meson project
Create the folders `src` and `include` as well as empty files called `.gitignore`, `meson.build`, `meson.options` and `gen_crosscompile.sh`.

Run
```sh
chmod +x gen_crosscompile.sh
```
To make the `gen_crosscompile.sh` script executable
<br/>
<br/>
Your folder structure should now look something like this:
```
.
├── gen_crosscompile.sh
├── .git
├── .gitignore
├── include
├── meson.build
├── meson.options
└── src

4 directories, 4 files
```

## Creating the meson.options file
Copy the following to your `meson.options` file:

```python
option('kindle_root_dir', type : 'string', value: '', description: 'The path to the Kindle\'s mounted rootfs (for linking libraries)')
```

This will tell Meson that your project takes a single parameter: `kindle_root_dir`, we will use this to pass our rootfs path that we got in the last step later.

## Creating the meson.build file
Copy the following to your `meson.build` file:
```python
project('example_gtk_application', 'cpp', version: 'v1.0.0', default_options: ['cpp_std=c++17'])

# Define dependencies we want
dependency_names = ['gtk+-2.0']


###
# Hey, HackerDude here, yep, I made this mess
# Don't worry, you don't REALLY need to understand it to use it!
# It uses header files from your host to compile the app BUT it links against your Kindle rootfs
# It's so cursed, I love it
# Oh, you don't love it?
# PRs welcome, figure out how to compile Amazon's GPL source and we'll use it
###

# Loop through cross-compilation dependencies
dependencies = []
cpp = meson.get_compiler('cpp')
foreach dep_name : dependency_names
    dep = dependency(dep_name, required: false)
    if not dep.found()
        # Get the include dirs (amazingly Meson can't do this itself)
        r = run_command('pkg-config', '--cflags-only-I', dep_name)
        assert(r.stderr() == '')
        dep_includes = include_directories(r.stdout().replace('-I', '').strip().split(' '))

        # Get the required libraries we need to link against
        r = run_command('pkg-config', '--libs-only-l', dep_name)
        assert(r.stderr() == '')
        dep_libs = r.stdout().replace('-l', '').strip().split(' ')
        dep_dependencies = []
        foreach lib_name : dep_libs
            dep_dependencies += cpp.find_library(lib_name, dirs: [get_option('kindle_root_dir') + '/usr/lib/'])
        endforeach

        dependencies += declare_dependency(
          dependencies: dep_dependencies,
          include_directories: dep_includes
        )
    endif
endforeach


###
# Project definition
###
sources = files(
    './src/main.cpp'
)

include_dirs = include_directories(
  './include/'
)

executable('example_gtk_application', sources, include_directories: include_dirs, dependencies: dependencies, cpp_args: '-static-libstdc++', link_args: '-static-libstdc++')
```


This may look quite daunting, so let's break it down:

```python
project('example_gtk_application', 'cpp', version: 'v1.0.0', default_options: ['cpp_std=c++17'])
```

The [`project`](https://mesonbuild.com/Reference-manual_functions.html#project) directive is required in all Meson projects and defines metadata about the project we're compiling, in this case, we defined a project called `example_gtk_application` using the `cpp` programming language, with version `v1.0.0` and using `c++17`.
<br/>
<br/>

```python
# Define dependencies we want
dependency_names = ['gtk+-2.0']
```
Here we simply define our list of dependencies to be used by the piece of code below:
<br/>
<br/>

```python
###
# Hey, HackerDude here, yep, I made this mess
# Don't worry, you don't REALLY need to understand it to use it!
# It uses header files from your host to compile the app BUT it links against your Kindle rootfs
# It's so cursed, I love it
# Oh, you don't love it?
# PRs welcome, figure out how to compile Amazon's GPL source and we'll use it
###

# Loop through cross-compilation dependencies
dependencies = []
cpp = meson.get_compiler('cpp')
foreach dep_name : dependency_names
    dep = dependency(dep_name, required: false)
    if not dep.found()
        # Get the include dirs (amazingly Meson can't do this itself)
        r = run_command('pkg-config', '--cflags-only-I', dep_name)
        assert(r.stderr() == '')
        dep_includes = include_directories(r.stdout().replace('-I', '').strip().split(' '))

        # Get the required libraries we need to link against
        r = run_command('pkg-config', '--libs-only-l', dep_name)
        assert(r.stderr() == '')
        dep_libs = r.stdout().replace('-l', '').strip().split(' ')
        dep_dependencies = []
        foreach lib_name : dep_libs
            dep_dependencies += cpp.find_library(lib_name, dirs: [get_option('kindle_root_dir') + '/usr/lib/'])
        endforeach

        dependencies += declare_dependency(
          dependencies: dep_dependencies,
          include_directories: dep_includes
        )
    endif
endforeach
```
The above code seems quite daunting at first, but when you read through it, it's quite simple.
1. Create an empty list called `dependencies`
2. Get the `cpp` compiler via [`meson.get_compiler()`](https://mesonbuild.com/Reference-manual_builtin_meson.html#mesonget_compiler)
3. [Loop](https://mesonbuild.com/Syntax.html#foreach-statements) through each dependency in the `dependency_names` array we defined earlier
4. Check if we can get that dependency via Meson's [`dependency`](https://mesonbuild.com/Reference-manual_functions.html#dependency) function
5. If we can't, [run a command](https://mesonbuild.com/Reference-manual_functions.html#run_command) to obtain metadata about the package such
6. Use string processing on each of the command results to extract both a list of include directories and libraries to link against
7. For each processed library we need to link against, [get that dependency via the compiler](https://mesonbuild.com/Reference-manual_returned_compiler.html#compilerfind_library) (uses the compiler for the target) relative to the Kindle's rootfs
8. Finally, [declare a dependency](https://mesonbuild.com/Reference-manual_functions.html#declare_dependency) and add it to the list of dependency objects our program uses


Now that we're past that large chunk of code, the final section is quite easy to understand

```python
###
# Project definition
###
sources = files(
    './src/main.cpp'
)

include_dirs = include_directories(
  './include/'
)

executable('example_gtk_application', sources, include_directories: include_dirs, dependencies: dependencies, cpp_args: '-static-libstdc++', link_args: '-static-libstdc++')
```

First we define our [`source_files`](https://mesonbuild.com/Reference-manual_functions.html#files) and [`include_dirs`](https://mesonbuild.com/Reference-manual_functions.html#include_directories) for compilation, and put everything together via an [`executable`](https://mesonbuild.com/Reference-manual_functions.html#executable) call.

The [`executable`](https://mesonbuild.com/Reference-manual_functions.html#executable) function defines a target to compile, with the name `example_gtk_application` using the sources and include directories we specified along with the dependencies derrived using the above code.

Importantly, we set `cpp_args` and `link_args` to `-static-libstdc++`, this ensures the C++ standard library is statically linked, which is important as our toolchain uses a newer version of GCC than the Kindle would normally support binaries from.