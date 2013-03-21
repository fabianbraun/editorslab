/*
 *   @author Artur Melanchyk
 *   @email artur.melanchyk@nzz.ch
 *   @version 0.2
 *
 *   $.counters jQuery extension
 *
 *   To update all counters simply call "$.counters.update()"
 *   To update one specific counter call "$.counters.update('supported_counter_name')"
 *
 *   Currently supported counters are:
 *   - 'netmetrix'
 *   - 'google'
 *   - 'omniture'
 */

(function ($) {

    var counters = {
        'netmetrix': function () {
            try {
                if (typeof NETMX !== 'undefined' && $("#netmx").length) {
                    $("#netmx").attr("src", NETMX + "?d=" + (Math.random() * 100000) + "&x=" + screen.width + "x" + screen.height);
                } else {
                    throw "counter is missing";
                }

                log("Netmetrix counter updated");
                return true;
            } catch (e) {
                log("Exception: Netmetrix " + e);
                return false;
            }
        },

        'google': function () {
            try {
                if (typeof _gaq !== 'undefined') {
                    _gaq.push([ '_trackPageview' ]);
                } else if (typeof pageTracker !== 'undefined') {
                    pageTracker._trackPageview(window.location.pathname);
                } else {
                    throw "counter is missing";
                }

                log("Google counter updated");
                return true;
            } catch (e) {
                log("Exception: Google analytics " + e);
                return false;
            }
        },

        'omniture': function () {
            try {
                if (typeof s !== 'undefined') {
                    s.t();
                } else {
                    throw "counter is missing";
                }

                log("Omniture counter updated");
                return true;
            } catch (e) {
                log("Exception: Omniture " + e);
                return false;
            }
        }
    };

    function update(counter) {
        /* $.counters.update() */
        if (typeof counter === 'undefined') {
            $.each(counters, function (index, counter) {
                counter();
            });
            return true;

        /* $.counters.update('netmetrix') */
        } else if (counters.hasOwnProperty(counter.toLowerCase())) {
            return counters[ counter.toLowerCase() ]();

        /* $.counters.update('unknown counter') */
        } else {
            log('Exception: trying to update undefined counter "' + counter + '"');
            return false;
        }
    }

    /* likely user don't have Firebug in his browser, wrap console.log */
    function log(s) {
        try {
            console.log(s);
        } catch (e) {}
    }

    $.counters = {
        "update": update
    };

})(jQuery);