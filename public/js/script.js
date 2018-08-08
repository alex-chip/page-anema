(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var toggleMenu = function toggleMenu(navId, menudId, toggleB) {
    var nav = navId,
        menu = menuId,
        toggleButton = toggleB;

    function showNav() {
        nav.classList.toggle('is-active');
    }

    if (nav) {
        if (toggleButton) {
            toggleButton.addEventListener('click', showNav);
        } else {
            console.log('Not Foudn ' + toggleButton);
        }
    } else {
        console.log('Not found ' + navId);
    }
};

var toggleB = document.getElementById('navId-toggle');
var menudId = document.getElementById('menuId');
var navId = document.getElementById('navId');

toggleMenu(navId, menudId, toggleB);

},{}],2:[function(require,module,exports){
'use strict';

var _navigator = require('./components/navigator');

var _navigator2 = _interopRequireDefault(_navigator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./components/navigator":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9uYXZpZ2F0b3IuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQU0sYUFBYSxTQUFiLFVBQWEsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixPQUFqQixFQUE2QjtBQUM1QyxRQUFJLE1BQU0sS0FBVjtBQUFBLFFBQ0ksT0FBTyxNQURYO0FBQUEsUUFFSSxlQUFlLE9BRm5COztBQUlBLGFBQVMsT0FBVCxHQUFtQjtBQUNmLFlBQUksU0FBSixDQUFjLE1BQWQsQ0FBcUIsV0FBckI7QUFDSDs7QUFFRCxRQUFHLEdBQUgsRUFBUTtBQUNKLFlBQUcsWUFBSCxFQUFpQjtBQUNiLHlCQUFhLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLE9BQXZDO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsb0JBQVEsR0FBUixnQkFBeUIsWUFBekI7QUFDSDtBQUNKLEtBTkQsTUFNTztBQUNILGdCQUFRLEdBQVIsZ0JBQXlCLEtBQXpCO0FBQ0g7QUFDSixDQWxCRDs7QUFvQkEsSUFBTSxVQUFVLFNBQVMsY0FBVCxDQUF3QixjQUF4QixDQUFoQjtBQUNBLElBQU0sVUFBVSxTQUFTLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBaEI7QUFDQSxJQUFNLFFBQVEsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQWQ7O0FBRUEsV0FBVyxLQUFYLEVBQWtCLE9BQWxCLEVBQTJCLE9BQTNCOzs7OztBQ3hCQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCB0b2dnbGVNZW51ID0gKG5hdklkLCBtZW51ZElkLCB0b2dnbGVCKSA9PiB7XG4gICAgbGV0IG5hdiA9IG5hdklkLFxuICAgICAgICBtZW51ID0gbWVudUlkLFxuICAgICAgICB0b2dnbGVCdXR0b24gPSB0b2dnbGVCXG5cbiAgICBmdW5jdGlvbiBzaG93TmF2KCkge1xuICAgICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJylcbiAgICB9XG5cbiAgICBpZihuYXYpIHtcbiAgICAgICAgaWYodG9nZ2xlQnV0dG9uKSB7XG4gICAgICAgICAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TmF2KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYE5vdCBGb3VkbiAke3RvZ2dsZUJ1dHRvbn1gKVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coYE5vdCBmb3VuZCAke25hdklkfWApXG4gICAgfVxufVxuXG5jb25zdCB0b2dnbGVCID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdklkLXRvZ2dsZScpXG5jb25zdCBtZW51ZElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVJZCcpXG5jb25zdCBuYXZJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZJZCcpXG5cbnRvZ2dsZU1lbnUobmF2SWQsIG1lbnVkSWQsIHRvZ2dsZUIpXG4iLCJpbXBvcnQgbmF2aWdhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvbmF2aWdhdG9yJ1xuIl19
