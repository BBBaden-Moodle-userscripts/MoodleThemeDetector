var MoodleThemeDetector = (function () {
    function info (){
        const name = "MoodleThemeDetector.lib.user.js";
        const version = "1.0.1";
        const description = "a library for the moodle theme detector";
        const author = "black-backdoor";
        
        const homepageURL = "https://github.com/BBBaden-Moodle-userscripts/MoodleThemeDetector"

        return {
            name: name,
            version: version,
            description: description,
            author: author,
            homepageURL: homepageURL
        };
    }


    function getAllStylesheets (head) {
        /*
            returns a list of all stylesheets in the head

            @param head: the head element of the document
            @return: a list of all stylesheets in the head
        */

        var stylesheets = Array.from(head.getElementsByTagName('link')).filter(link => link.rel === 'stylesheet');
        return stylesheets;
    }
    
    function detectTheme (head) {
        /*
            returns the theme of the moodle page

            @param head: the head element of the document
            @return: the theme of the moodle page
        */

        const stylesheets = MoodleThemeDetector.getAllStylesheets(head);

        // get all stylesheets that contian the word theme the url
        const filteredStylesheets = stylesheets.filter(link => link.href.includes('theme'));

        const stylesheetURL = "https://moodle.bbbaden.ch/theme/styles.php/"

        // Get the link to the current theme stylesheet
        var stylesheetLink = null;
        filteredStylesheets.forEach(stylesheet => {
            if (stylesheet.href.startsWith(stylesheetURL)) {
                stylesheetLink = stylesheet.href;
            }
        });
        

        if (stylesheetLink === null) {
            //console.log("No theme stylesheet found");
            return null;
        }
        else {
            //console.log("Theme stylesheet found: " + stylesheetLink);
            var style = stylesheetLink.replace(stylesheetURL, "").split("/")[0];
            style = style.toLowerCase();
            //console.log("Theme: " + style);
            return style;
        }
        
    }

    return {
        info: info,
        getAllStylesheets: getAllStylesheets,
        detectTheme: detectTheme
    };
})();