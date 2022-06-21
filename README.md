# image-resizor-and-favicons-maker-gulp
## Description
Image resizor and favicons maker using `gulp`.
The source files must be one of the `{jpeg,jpg,png,gif}` type, other file types are ignored.

Performs three types of tasks:
1. Makes favicons.
2. Resizes images in width, while the height changes proportionally.
3. Resizes images in both width and height.

Images for each type of task are placed in the appropriate directory.
The result of the execution is placed in the appropriate directories according to the same principle.

A table of correspondences of task types and directories.

Type of task | Source directory | Destination directory
-- | -- | --
1 | ./src-favicons | ./dest-favicons
2 | ./src-resizing | ./dest-resizing
2 | ./src-resizing-wh | ./dest-resizing-wh

## Configuration
There are three files in the root of the project to control the names and sizes of the resulting images.

- `map-favicons.json` is an object of arrays of names, widths and heights of favicons for performing tasks of the type `1`.
- `map-resizing.json` is an array of widths for performing tasks of the type `2`.
- `map-resizing-wh.json` is an object of arrays of widths and heights for performing tasks of the type `3`.

## Task Descriptions
### Tasks of cleaning the destination directories
- `cleanFav` - cleans `./dest-favicons`
- `cleanRes` - cleans `./dest-resizing`
- `cleanResWH` - cleans `./dest-resizing-wh`

### Main tasks

Type of task | Name | Description
-- | -- | --
`1` | `favicons` | Makes favicons using the `favicons` sub object of the `map-favicons.json` object
`1` | `windows` | Makes favicons using the `windows` sub object of the `map-favicons.json` object
`1` | `android` | Makes favicons using the `android` sub object of the `map-favicons.json` object
`1` | `appleIcon` | Makes favicons using the `appleIcon` sub object of the `map-favicons.json` object
`1` | `yandex` |  Makes favicons using the `yandex` sub object of the `map-favicons.json` object
`1` | `ico` | description view after the table
`2` | `resizing` | Resizes images using the `map-resizing.json` array
`3` | `resizingWH` | Resizes images using the `map-resizing-wh.json` object

#### The `ico` task
It is always executed after the `favicons` task, as it requires the `favicon-16x16.png` file that the `favicons` task creates.
The `ico` task converts the `favicon-16x16.png` file to the `favicon.ico` file, which it places in the same directory.

### Combined tasks
- `faviconsIco` = `favicons` + `ico`
- `cleanAll` = `cleanFav` + `cleanRes` + `cleanResWH`
- `favAll` = `faviconsIco` + `windows` + `android` + `appleIcon` + `yandex`
- `all` = `favAll` + `resizing` + `resizingWH`

## A list of commands with notes

npm | gulp | notes
-- | -- | --
`npm run cleanf` | `gulp cleanf` | `cleanFav`
`npm run cleanr` | `gulp cleanr` | `cleanRes`
`npm run cleanrwh` | `gulp cleanrwh` | `cleanResWH`
`npm run cleanall` | `gulp cleanall` | `cleanAll`
`npm run favall` | `gulp favall` | `cleanFav` + `favAll`
`npm run rw` | `gulp` | `resizing`
`npm run rwh` | `gulp rwh` | `resizingWH`
`npm run all` | `gulp all` | `cleanAll` + `all`
`npm run fav` | `gulp fav` | see Main tasks
`npm run win`  | `gulp win` | see Main tasks
`npm run and` | `gulp and` | see Main tasks
`npm run app` | `gulp app` | see Main tasks
`npm run yan` | `gulp yan` | see Main tasks
