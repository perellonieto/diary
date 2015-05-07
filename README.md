# diary

Script to create diary annotations and explore, visualize and mantain copies of
them. It is possible to create as many diaries as desired and every day is
stored in an individual text-file.

All the diaries are stored in "~/diary/" and separated folders per each diary
name. However, it is possible to change the paths.

By default the text editor is vim and for nice visualization of the diary it is
recommended to use markdown syntax.

Show the help
-------------
```sh
diary --help
```

Create or open a diary
----------------------

If is the first annotation of the day it creates a new page. If not, it opens
the actual page (text-file).

```sh
diary name_of_the_diary
```

Show the name of your diaries
----------------------------

```sh
diary -ls
```

or in a list

```sh
diary -lsl
```

Search one sentence
-------------------

If the name of the diary is not specified the sentences is searched into all
the diaries

```sh
diary -s "sentence" name_of_the_diary
```

Explore one diary
-----------------

Visualize all the pages of a diary in a web-browser

```sh
diary -e name_of_the_diary
```

Save your diaries
-----------------

```sh
diary -push
```

Update your diaries
-------------------

```sh
diary -pull
```
