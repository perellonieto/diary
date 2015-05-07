# diary
Script to create diary annotations and explore, visualize and mantain copies of it.

Show the help
-------------
```sh
diary --help
```

Create a new diary
------------------

```sh
diary name_of_the_diary
```

See the name of your diaries
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
