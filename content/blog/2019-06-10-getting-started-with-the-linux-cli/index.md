---
title: 'Getting Started with the Linux Command Line Interface'
date: '2019-06-10'
tags: '#workflow'
featured_image: ./featured_image.jpg
keywords: 'linux, command line, command line interface, cli, terminal, macos, iterm'
description: "By learning a few commands can open a new world of functionality as a developer. Today I'm going to cover some of those basic commands to get you going."
published: true
---

By learning a few commands can open a new world of functionality as a developer. Today I'm going to cover some of those basic commands to get you going.

I recently attended a talk which compared the Linux command line to magic in Harry Potter. Although I went into the talk a bit skeptical, I ended up being very impressed with how well the analogy worked. He talked about how they're both very powerful but when you don't know what you're doing, they can be very dangerous. He even talked about "Defense Against the Dark Arts", which equated to using the command line to find information if you've been hacked.

I bring this up because the command line can be very intimidating to people who are unfamiliar with it, but after learning a few simple commands it will change your life. I find myself using the command line for just about everything I can because it's faster and easier in a lot of cases than using the GUI, or Graphical User Interface.

<video src="https://media.giphy.com/media/NhBH9RHZdpk4g/giphy.mp4" playsinline autoplay loop muted></video>

## What is the Command Line Interface?

If you've ever seen someone using a computer in an 80s movie or a movie about hacking, you've likely seen the command line interface. I know what you're thinking: "Okay, so I've seen it. That tells me nothing." In short, a command line, or terminal, is a way to interact with the computer itself through text rather than a GUI. Typically when using a command line, you'd have access to all of the things the GUI can do and much more because you're communicating with the computer directly, whereas a GUI is limited to what the developer put into the application.

I'll be honest with you, when I started using the command line for different things, I felt like Hackerman. It's pretty cool to be able to use the "back door" to do things if you feel like it. I'll go ahead and show you how to use the back door now.

## How do you access the Command Line Interface?

If you're on a Windows machine, you'll need to install some software which allows you to use these commands on your machine because Windows doesn't support some of these out-of-the-box. I don't use Windows, but I've heard good things about [cmdr](https://cmder.net/). If you're on a Linux machine or a Mac, you can just open a program called Terminal.

When the application loads, it will typically have a black background with white text or vice versa. There's a little bit of text and a blinking cursor just waiting for your command. Don't be intimidated by this blank screen. It's really not scary at all. Now that your terminal is ready to go, how about we get into some common commands?

## Common commands
Here's a list of common commands and a bit about how to use them. I will not cover every detail about them (because some of them have A LOT of options), but this will be enough to get started.

### Find your location
Pwd (short for Print Working Directory) will show you where you're at in your computer. This command doesn't actually "do" anything other than give you your current location.

```bash:title=terminal
Tims-MacBook-Pro:styles timsmith$ pwd
/Users/timsmith/desktop/styles
```

### See everything in the folder

Another useful command to have up your sleeve is `ls` which is short for list. By typing `ls` and hitting enter, you will see an output of all of the files and directories in your working folder. This is very useful to see what's there and figure out how things are organized.

```bash:title=terminal
Tims-MacBook-Pro:styles timsmith$ ls
Variables.js  components/  library/
```

### Navigate to somewhere else
Short for "Change Directory", cd lets you move around your computers directories quickly and easily. You can move one directory at a time or several, depending on what you want to do. If you look at the terminal code below, you can see the first line is `cd ..`. The two periods tell the computer to go up one directory, so we're going from styles to desktop. The next line tells the computer to change directory into the styles folder (which is located on the desktop).

The third line is a handy tool if you don't know what paths are available in the current directory you're changing into. In the code I'm in the styles directory, so I type `cd` and hit the tab key a couple of times and it prints out all of the available files and directories in the styles folder for me to use. The final line just shows how you can navigate from the desktop directory all the way to the components directory (inside of styles) with just one line. Pretty cool, right?

```bash:title=terminal
Tims-MacBook-Pro:styles timsmith$ pwd

Tims-MacBook-Pro:desktop timsmith$ cd styles

Tims-MacBook-Pro:styles timsmith$ cd
Variables.js  components/  library/

Tims-MacBook-Pro:desktop timsmith$ cd styles/components
```

### Create a new folder
Mkdir is short for "make directory" which, you guessed it, makes a new directory. This command is super useful when creating multiple or nested directories. In the example below, the first line is making a new directory called directory1. First, tell the command line you want to make a directory, then list the directory names you want to create separated by spaces. If you need spaces in your directory names, simply wrap the directory name in quotations.

The next line in the example creates two directories called directory2 and directory3. Finally, the third line is creating a folder called directory4 with a subfolder called sub1.

```bash:title=terminal
Tims-MacBook-Pro:styles timsmith$ mkdir directory1

Tims-MacBook-Pro:styles timsmith$ mkdir directory2 directory3

Tims-MacBook-Pro:styles timsmith$ mkdir directory4 directory4/sub1
```

If we looked at our current directory, we should now see the following structure in addition to what was already there:

- directory1/
- directory2/
- directory3/
- directory4/
  - sub1/

It's not hard to see how this can be a timesaving tool if lots of folders need to be created. Imagine how many mouse clicks it would take to create 10 folders as opposed to one line of code in the terminal!

### Create a new file
Along the same lines of mkdir is touch, although the purpose of this command may not be as obvious. Touch is a command which creates a new file and pretty much works the same as mkdir. You can create files inside directories, call them whatever you want (with extensions), and even create multiple files at once (still separated by a space). Like the mkdir command, this can be a huge time saver. Especially if you're starting a new project and have a bunch of files to create to get the project up and running.

The example below shows a file called file1.txt being created in the current directory, a file called file2.txt being created in directory1, and two more files being created called file3.txt and file4.txt. The format of the command should look pretty familiar.

```bash:title=terminal
Tims-MacBook-Pro:styles timsmith$ touch file1.txt

Tims-MacBook-Pro:styles timsmith$ touch directory1/file2.txt

Tims-MacBook-Pro:styles timsmith$ touch file3.txt file4.txt
```

After adding the files above, my working directory structure looks something like this:

- directory1/
  - file2.txt
- directory2/
- directory3/
- directory4/
  - sub1/
- file1.txt
- file3.txt
- file4.txt

### Delete a file or folder
Okay, so I've covered how to create folders and files. What if I want to remove a file? Can I do that from the command line too? You bet! To remove a file, you will use the `rm` command followed by the name of the files you want to remove, separated by a space. If you need to remove a folder, the command is the exact same except you have to add an `-r` flag before the folder names which tells the terminal to execute the command recursively. The examples below demonstrate each of these:

```bash:title=terminal
Tims-MacBook-Pro:styles timsmith$ rm file4.txt

Tims-MacBook-Pro:styles timsmith$ rm file3.txt file1.txt

Tims-MacBook-Pro:styles timsmith$ rm -r directory2
```

After removing these files and folders, my current directory looks like this:

- directory1/
  - file2.txt
- directory3/
- directory4/
  - sub1/

### Copy a file or folder to a new location
The next command I want to show you is the copy command. It's another short one since you just type `cp` followed by the location of the file you want to copy and then the location you'd like to copy it to. Copying directories requires the `-r` flag just like the `rm` command, which says it should be done recursively. The example below demonstrates copying a file from the current directory into another directory as well as copying a directory into a directory. It should be noted, the file name for the location you're copying to does not need to match the existing file name. You can call it whatever you want the new file to be.

```bash:title=terminal
Tims-MacBook-Pro:styles timsmith$ cp directory1/file2.txt directory3/file3.txt

Tims-MacBook-Pro:styles timsmith$ cp -r directory4/sub1 directory3/sub1
```

My directory structure now looks like this:

- directory1/
  - file2.txt
- directory3/
  - sub1/
  - file3.txt
- directory4/
  - sub1/

### Move a file or folder
There are different cases where you'd want to move the file instead of simply copying it. You could just copy the file to the new location and use `rm` to get rid of the old one, but that's kind of a pain. Fortunately we have the move command which does just that. Just like `cp`, you can use `mv` to move a file to a different location on your computer. You can also use this command to move folders without any additional flags. The format for this command is exactly the same as `cp` too. The example below shows how to move a file and how to move a folder.

```bash:title=terminal
Tims-MacBook-Pro:styles timsmith$ mv directory1/file2.txt directory4/file1.txt

Tims-MacBook-Pro:styles timsmith$ mv directory4/sub1 directory1/sub1
```

The structure for my directory now looks like this:

- directory1/
  - sub1/
- directory3/
  - sub1/
  - file3.txt
- directory4/
  - file2.txt

### Search files for some text
The final command I'd like to talk about today is one I've just started using in the past few months. It's called `grep` which is short for **g**lobally search a **r**egular **e**xpression and **p**rint. What does all of that mean? It basically means search for some text. I want to be upfront. There's A LOT of flags you can use to really customize your search, so I'm just going to tell you what I use. It's pretty basic, but has served me well so far.

When I use grep, I use the flags `-Rnaio` which searches how I want and displays output how I want. This is actually 5 separate flags, but they can be combined into one, and yes... case does matter here. Let me break down what each of these does:

- **R** - Searches recursively in directories, i.e. all directories inside of the current one
- **n** - Adds line numbers to results to make finding the text in the file easier
- **a** - Processes a binary file as if it were text. This is particularly useful to programmers who are editing said binary files.
- **i** - Ignore case. This increases the search results because it doesn't care whether things are upper or lower cased.
- **o** - Only show the part of the line that matches our input. This helps to prevent a wall of text for the results.

The example below contains the grep command, the aforementioned flags, and then a bunch of dots and the word demonstration. What? The dots immediately before and after the word are acting as wildcards to return the 5 characters before and after the word, which helps to provide a little context for me. If you look carefully, you'll notice that there's also a space and one more dot at the end. This is also acting as a wildcard which tells grep to search in all directories inside of the current one. If you only wanted to search a particular folder, you could change this final dot to the name of the folder you're interested in searching.

The results appear directly below the grep command and you can see that based on the flags I've used, we get back the file name (`./directory4/file1.txt:`) followed by the line number (1:). After the line number is the results for the text search, which includes the 5 characters before and after our search term.

```bash:title=terminal
Tims-MacBook-Pro:styles timsmith$ grep -Rnaio .....demonstration..... .
./directory4/file1.txt:1: for demonstration purp
```

## Making things even easier

While these commands don't require too much time or energy, it can be tedious to write the same thing out over and over. Especially when you have to try and remember the flags you want with grep or something similar. Fortunately, there's a way to streamline this considerably.

To do this, navigate to your home folder. The following command will get you there:

```bash:title=terminal
Tims-MacBook-Pro:styles timsmith$ cd ~

Tims-MacBook-Pro:~ timsmith$
```

 Once inside the home folder, run the following command to open the `.bashrc` file in an editor. If the file doesn't exist, you may need to create it using the `touch` command from above.

 ```bash:title=terminal
 Tims-MacBook-Pro:~ timsmith$ open .bashrc
 ```

 The `.bashrc` file may or may not be empty. Either way, you can add things to the end of it which will affect the terminal as well as create shortcuts or "aliases". Today we will just cover how to create an alias. The one I use most is for the grep command so I don't have to remember the flags. Add the text below to your `.bashrc` file and save. Close your terminal and reopen it to try out the new command.

 ```bash:title=.bashrc
 alias search="grep -Rnaio"
 ```

 Now instead of typing out the grep command with all of those flags, you can just write `search` and the rest of the grep command. I'll use the same search as before but with the new alias:

 ```bash:title=terminal
 Tims-MacBook-Pro:styles timsmith$ search .....demonstration..... .
./directory4/file1.txt:1: for demonstration purp
```

 As you can see, using the new `search` command returns the same results as the grep command because we've created this alias. Aliases can be created for any text or command which makes things easier. I've created aliases for shells, directories I frequently go into, and more. The goal is to make your life easier be creating simple names for the things you do all the time.

 ## Conclusion

 As you can see, it doesn't take much to get going with the terminal. The commands we covered above as well as aliasing things out should set you up for success on most day-to-day things. Of course, there are more advanced commands and flags that can be used, but these are the basics which should get your feet wet.

 Let me know if you're using these or other commands in the terminal. You can reach me on twitter at [@iam_timsmith](https://www.twitter.com/iam_timsmith).
