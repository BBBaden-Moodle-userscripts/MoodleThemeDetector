# MoodleThemeDetector

MoodleThemeDetector is a userscript library designed to detect the current theme applied to a Moodle website. By integrating this library into your userscripts, you can easily retrieve information about the active Moodle theme.



## Usage

To incorporate this userscript library, include the following tag in your userscript metadata:

`// @require     https://github.com/BBBaden-Moodle-userscripts/MoodleThemeDetector/raw/main/MoodleThemeDetector.lib.user.js`

To obtain the current website theme as a lowercase string, use the following function:
`MoodleThemeDetector.detectTheme(document.head);`


## Library Code
The library code consists of essential functions for theme detection, providing valuable information about the Moodle page. Here's an overview of the library functions:

### detectTheme(head)
The `detectTheme(head)` function efficiently retrieves the current Moodle theme in lowercase. It requires the website's `<head>` element to be passed as an argument, simplifying this process by suggesting the use of `document.head`.

### info()
This function returns metadata about the library, including its name, version, description, author, and homepage URL.