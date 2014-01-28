angular-ui-utils-scrollfix-issue
================================

Demonstrating issue with ui-utils/scrollfix when navigating between views.

- Clone repository
- Run ```npm install && grunt install```
- Run ```grunt server```
- Run ```open http://localhost:9000```
- Open your browser's Developer Tools
- Find ```bower_components/angular-ui-utils/ui-utils.js``` in the Sources list and set a breakpoint at line 1765.
- Reload the page
- Variable ```top``` has value of ```20```
- Click "Resume script execution" (F8)
- Click "Page 1" in the top right position of the navigation bar.
- Browser will pause in debugger, now see that ```top``` has some pretty large value (in my case ```280```)!
